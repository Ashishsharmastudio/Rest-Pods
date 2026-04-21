import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import dotenv from "dotenv";

// Import custom configs & routes
import "./backend/config/passport"; // Just to initialize it
import authRoutes from "./backend/routes/auth";
import apiRoutes from "./backend/routes/api";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // MongoDB Connection
  const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/reset_pods";
  mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000,
  })
    .then(() => console.log("Connected to MongoDB established."))
    .catch((err) => {
      if (err.name === 'MongooseServerSelectionError') {
        console.error("❌ MONGODB ATLAS CONNECTIVITY ERROR:");
        console.error("Your IP address is likely blocked. PLEASE GO TO MONGODB ATLAS > NETWORK ACCESS AND ADD '0.0.0.0/0' TO THE WHITELIST.");
      } else {
        console.error("MongoDB connection error:", err);
      }
    });

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Sessions
  app.use(session({
    secret: process.env.SESSION_SECRET || 'recovery-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  }));

  // Passport Init
  app.use(passport.initialize());
  app.use(passport.session());

  // API Routes
  app.use("/auth", authRoutes);
  app.use("/api", apiRoutes);

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite middleware integrated.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
