const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { createClient } = require("webdav");
const path = require("path");

dotenv.config();
console.log("🧪 USERNAME:", process.env.USERNAME);
console.log("🧪 PASSWORD:", process.env.PASSWORD ? "gesetzt" : "NICHT gesetzt");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;


// 👉 Test-API
app.get("/api/videos", async (req, res) => {
  const client = createClient(
    `https://isa14.edumake.de/remote.php/dav/files/${process.env.USERNAME}/Videos%20Ackerguide/`,
    {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    }
  );

  try {
    const folders = ["Raven", "Trimble", "Efix"];
    const results = {};

    for (const folder of folders) {
      const folderPath = `https://isa14.edumake.de/remote.php/dav/files/${process.env.USERNAME}/Videos%20Ackerguide/${folder}/`;
      const contents = await client.getDirectoryContents(folder);
      const videoFiles = contents
        .filter(file => file.mime === "video/mp4")
        .map(file => folderPath + encodeURIComponent(file.basename));
      results[folder] = videoFiles;
    }

    res.json(results);
  } catch (err) {
    console.error("❌ Fehler beim Abrufen der Videos:", err.message);
    res.status(500).json({ error: "Fehler beim Abrufen der Videos." });
  }
});

// 👉 HTML ausliefern
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  const htmlPath = path.join(__dirname, "ackerguide_chatbot_local.html");
  console.log("📄 HTML senden:", htmlPath);
  res.sendFile(htmlPath);
});

// 👉 Server starten
app.listen(PORT, "0.0.0.0", () => {
  console.log("📦 process.env.PORT:", process.env.PORT);
  console.log(`✅ API läuft unter http://0.0.0.0:${PORT}/api/videos`);
});
