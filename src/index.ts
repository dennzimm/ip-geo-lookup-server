import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/ping", (req, res) => {
  res.send("Pong! 🏓");
});

app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}`);
});
