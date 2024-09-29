const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Conectar a la base de datos MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "checkfor",
});

// Ruta para obtener preguntas por categoría
app.get("/api/preguntas/:categoria", (req, res) => {
  const categoria = req.params.categoria;

  const query = "SELECT * FROM preguntas WHERE categoria = ?";
  connection.query(query, [categoria], (error, results) => {
    if (error) {
      console.error("Error al obtener preguntas:", error);
      res.status(500).json({ message: "Error al obtener preguntas" });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
