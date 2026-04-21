# 🧬 Reset Pods™ | The Recovery OS for High-Performers

[![React](https://img.shields.io/badge/Frontend-React%2019-61DAFB?logo=react)](https://react.dev/)
[![Tailwind](https://img.shields.io/badge/CSS-Tailwind%20v4-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Backend-Express.js-000000?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?logo=mongodb)](https://www.mongodb.com/)
[![AI](https://img.shields.io/badge/AI-Gemini%20RAG-4285F4?logo=google-gemini)](https://deepmind.google/technologies/gemini/)

Reset Pods™ is a **Full-Stack Recovery Management System** designed by **Corporate Recovery Co.** It provides a professional ecosystem for high-performance individuals to initiate rapid "Precision Resets," treating workplace friction as a measurable system failure.

---

## 🏗️ Core Architecture (MVC Protocol)
The platform is built on a strict **Model-View-Controller** architecture to ensure operational integrity and scalability.

-   **Models**: Specialized Mongoose schemas for `User` profiles and `Booking` allocations.
-   **Views**: High-fidelity React components styled with Tailwind v4 for a clinical, SaaS-focused aesthetic.
-   **Controllers**: Dedicated logic handlers for authentication, resource management, and AI intelligence.

---

## ⚡ Key Feature Stack

### 1. 🛡️ Identity & Auth (Google OAuth)
Unified professional sign-on via Google. 
- **Hybrid Entry**: Guests can book immediately, but can "Convert to Member" with one click to persist their recovery history.
- **Role-Based Access**: Specialized views for standard **Professionals** and system **Administrators**.

### 2. 🧠 Retrieval-Augmented Generation (RAG Chat)
The intelligent **Reset Assistant** is powered by a high-precision AI pipeline:
- **Google Gemini 3**: Generative intelligence for natural language interactions.
- **Pinecone Vector DB**: Long-term operational memory for the assistant. 
- **The Pipeline**: User Query → Gemini Embeddings → Pinecone Context Retrieval → Gemini Contextual Response.

### 3. 📊 Operational Admin Center
Global telemetry for the entire recovery network:
- **Resource Matrix**: 7-day grid of pod allocations.
- **Identity Logs**: Searchable professional directory with audit history.
- **System Rules**: Direct control over operational hours, slot duration, and recalibration buffers.

### 4. 📈 User Recovery Dashboard
A personal control center for the modern professional to manage:
- **Session Recalibration**: One-click rescheduling or cancellation.
- **Activity Mirror**: Real-time log of recovery interventions.
- **Performance Metrics**: Visual tracking of consistency-based rewards.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Vite, Motion |
| **Styling** | Tailwind CSS v4, Lucide Icons |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (Mongoose) |
| **Identity** | Passport.js (Google OAuth 2.0) |
| **Intelligence** | Google Gemini (Embeddings + Flash) |
| **Vector Search** | Pinecone Database |

---

## 🚀 Quick Setup Guide

1.  **Clone the Recalibration Engine**:
    ```bash
    npm install
    ```
2.  **Environment Calibration**:
    Create a `.env` file based on `.env.example` and provide your secrets (Google Cloud, MongoDB Atlas, Pinecone, Gemini).
3.  **Initiate Dev Sequence**:
    ```bash
    npm run dev
    ```
4.  **Seed Intelligence** (Optional):
    Ingest the knowledge base into your Pinecone index:
    ```bash
    npx tsx backend/scripts/seedKnowledgeBase.ts
    ```

---

## 📁 System Topology
-   `/backend`: MVC-compliant controllers, routes, and models.
-   `/src`: Atomic UI components, functional pages, and global contexts.
-   `/server.ts`: Unified full-stack entry point (Express + Vite Middleware).

---
*© 2026 Corporate Recovery Co. Architectural rest for the high-performance professional.*
