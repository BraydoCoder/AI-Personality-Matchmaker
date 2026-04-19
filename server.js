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

// Read and inject once at startup — restart server to pick up HTML changes
const injectedHtml = fs.readFileSync(path.join(__dirname, "index.html"), "utf8")
  .replace("__OPENROUTER_API_KEY__", apiKey);

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(injectedHtml);
});

app.listen(PORT, () => {
  console.log(`Virel running at http://localhost:${PORT}`);
});
