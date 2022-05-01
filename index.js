import express from "express";
import cors from "cors";
import dinosaurs from "./dinosaurs.json" assert { type: "json" };
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Dinosaur API");
});

app.get("/dinosaurs", (req, res) => {
  res.json(dinosaurs);
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
