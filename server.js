const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/api/prices", async (req, res) => {
  try {
    const prices = {};
    res.json(prices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to retrieve Amazon prices" });
  }
});

app.listen(PORT, () => {
  console.log(`Infinity PCs running on port ${PORT}`);
});