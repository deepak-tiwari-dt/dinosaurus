import express from "express";
import dinosaurs from "./dinosaurs.json" assert { type: "json" };
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.json(dinosaurs);
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
