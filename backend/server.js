import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MESSAGES_FILE = path.join(__dirname, "messages.json");

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // URL of Vite dev server
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date() });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Simple validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    };

    // Load existing messages or initialize empty array
    let messages = [];
    try {
      const data = await fs.readFile(MESSAGES_FILE, "utf-8");
      messages = JSON.parse(data);
    } catch (err) {
      // File doesn't exist or is invalid, keep empty array
    }

    // Append new message
    messages.push(newMessage);

    // Save back to file
    await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");

    console.log(`[API] Received message from ${name} (${email})`);

    return res.status(201).json({
      success: true,
      message: "Message received successfully."
    });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
