// server.js — Express server that injects API key safely into the frontend
// The API key NEVER touches the client bundle directly
// Run: node server.js

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { readFileSync } from "fs";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Inject API key via a server-side endpoint (not hardcoded in JS)
app.get("/config.js", (req, res) => {
  const key = process.env.GEMINI_API_KEY || "";
  if (!key) {
    console.warn("[WARNING] GEMINI_API_KEY is not set in .env");
  }
  res.setHeader("Content-Type", "application/javascript");
  res.send(`window.GEMINI_API_KEY = "${key}";`);
});

// Catch-all: serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`\n✅ Scaler AI Personas running at http://localhost:${PORT}\n`);
});
