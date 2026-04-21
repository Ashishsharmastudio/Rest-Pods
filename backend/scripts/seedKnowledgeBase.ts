import { GoogleGenAI } from "@google/genai";
import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from 'dotenv';

dotenv.config();

const KNOWLEDGE_BASE = [
  "Reset Pods™ provide 10-minute rapid interventions for cognitive recalibration in corporate environments.",
  "The flagship location is at 80 Ann Street, Fortitude Valley, Brisbane.",
  "Reset Pods™ offer two primary services: the Precision Reset Pod (10 mins) and the Operational Deep Dive (45 mins).",
  "The system prevents double-booking and enforces a 5-minute buffer between all sessions.",
  "Sessions are designed to treat cognitive burnout as a system failure rather than a personal failing.",
  "Operational hours are Monday to Friday, 9:00 AM to 6:00 PM.",
  "Corporate partnerships are available for Tier-One law firms and large infrastructure projects.",
];

async function seed() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY || "" });
  const index = pc.index(process.env.PINECONE_INDEX_NAME || "reset-pods-index");

  console.log("Seeding began...");

  for (let i = 0; i < KNOWLEDGE_BASE.length; i++) {
    const text = KNOWLEDGE_BASE[i];
    const embeddingResult = await ai.models.embedContent({
      model: "text-embedding-004",
      contents: [{ parts: [{ text }] }]
    });
    const values = embeddingResult.embeddings[0].values;

    await index.upsert({
      records: [{
        id: `chunk-${i}`,
        values: values,
        metadata: { text }
      }]
    });
    
    console.log(`Upserted chunk ${i}`);
  }

  console.log("Seeding complete.");
}

seed().catch(console.error);
