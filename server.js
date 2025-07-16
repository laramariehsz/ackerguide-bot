const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/api/videos", (req, res) => {
  res.json({ status: "OK", message: "Test erfolgreich" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("📦 process.env.PORT:", process.env.PORT);
  console.log(`✅ API läuft unter http://0.0.0.0:${PORT}/api/videos`);
});
