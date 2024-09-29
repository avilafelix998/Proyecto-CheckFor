const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/respuestas", (req, res) => {
  const respuestas = req.body;
  console.log("Respuestas recibidas:", respuestas);
  res.json({ message: "Respuestas guardadas correctamente" });
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
