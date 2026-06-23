require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require("../config/db");
const resumeRoutes = require("../routes/resumeRoutes");

const app = express();

// Connect to Database
connectDB();

// Middleware - Allow all origins for production
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false
}));

// Handle preflight OPTIONS requests
app.options("*", cors());

app.use(express.json());

// Routes
app.use("/api/resumes", resumeRoutes);

app.get("/", (req, res) => {
  res.json({ message: "AI Resume Generator API is running." });
});

// Vercel serverless: DO NOT call app.listen()
module.exports = app;
