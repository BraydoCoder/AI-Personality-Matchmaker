require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const apiKey = process.env.OPENROUTER_API_KEY || "";

if (!apiKey) {
  console.warn("Warning: OPENROUTER_API_KEY is not set in .env — app will run in demo mode.");
}

app.get("/", (req, res) => {
  const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
  const injected = html.replace("__OPENROUTER_API_KEY__", apiKey);
  res.setHeader("Content-Type", "text/html");
  res.send(injected);
});

app.listen(PORT, () => {
  console.log(`Virel running at http://localhost:${PORT}`);
});
