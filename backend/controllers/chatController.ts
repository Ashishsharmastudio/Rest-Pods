import { Request, Response } from 'express';
import { GoogleGenAI } from "@google/genai";
import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from 'dotenv';

dotenv.config();

// Initialize AI and Vector DB
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY || "" });

export const handleChat = async (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    // 1. Generate Embeddings for the user message
    const embeddingResult = await ai.models.embedContent({
      model: "text-embedding-004",
      contents: [{ parts: [{ text: message }] }]
    });
    const embedding = embeddingResult.embeddings[0].values;

    // 2. Query Pinecone for relevant context
    const index = pc.index(process.env.PINECONE_INDEX_NAME || "reset-pods-index");
    
    // We try to fetch the top 3 relevant chunks
    const queryResponse = await index.query({
      vector: embedding,
      topK: 3,
      includeMetadata: true,
    });

    const context = queryResponse.matches
      .map((match: any) => match.metadata?.text || "")
      .join("\n\n");

    // 3. Generate response with context using Gemini
    const prompt = `
      You are the Reset Pods™ Assistant. Use the following operational context to answer the user's question accurately.
      If the context doesn't contain the answer, use your general knowledge but prioritize the context.
      
      Operational Context:
      ${context}
      
      User Question: ${message}
    `;

    const chatResult = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt
    });
    const responseText = chatResult.text;

    res.json({ response: responseText });
  } catch (err) {
    console.error("Chat Error:", err);
    res.status(500).json({ error: "Failed to process AI request. Ensure API keys are configured." });
  }
};
