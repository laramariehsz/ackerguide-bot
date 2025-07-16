const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Test-Endpunkt, um zu prüfen, ob API funktioniert
app.get("/api/videos", (req, res) => {
  res.json({ status: "OK", message: "Test erfolgreich" });
});

// Statische Dateien (HTML, CSS, JS) bereitstellen
app.use(express.static(path.join(__dirname)));

// HTML-Datei beim Aufruf von "/" ausgeben
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "ackerguide_chatbot_local.html"));
});

// Server starten
app.listen(PORT, "0.0.0.0", () => {
  console.log("📦 process.env.PORT:", process.env.PORT);
  console.log(`✅ API läuft unter http://0.0.0.0:${PORT}/api/videos`);
});
