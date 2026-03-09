const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Disable caching for development
app.use((req, res, next) => {
  res.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  next();
});

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// Serve model files from model folder
app.use("/model", express.static(path.join(__dirname, "model")));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
