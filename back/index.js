const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const __DIRNAME = path.resolve();

// Middleware CORS et JSON
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

// Servir les fichiers statiques en premier
app.use(express.static(path.join(__DIRNAME, "front", "dist")));

// Importe toutes les routes depuis routes/index.js
const routes = require("./routes");
app.use(routes);

// Catch-all route pour SPA : doit être en dernier
app.get("*", (req, res) => {
  res.sendFile(path.join(__DIRNAME, "front", "dist", "index.html"));
});

// Connexion à MongoDB + démarrage serveur
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(
        `🚀 Server running on ${
          process.env.API_URL || `http://localhost:${PORT}`
        }`
      );
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });
