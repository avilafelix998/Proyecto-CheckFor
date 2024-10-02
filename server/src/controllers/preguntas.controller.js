import { conexion } from "../database/database.js";

export const obtenerPreguntas = async (req, res) => {
  const categoria  = req.params.categoria;
  const connection = await conexion()
  try{
    const [preguntas] = await connection.query("SELECT * FROM preguntas WHERE id_categoria_FK = ?", [categoria])
    console.log(preguntas);
    res.json(preguntas)
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "preguntas no encontradas"})
  }
};

export const obtenerCategorias = async (req, res) => {
  const connection = await conexion()
  try {
    // res.json({msg: "todo ok"})
    const sql = "SELECT * FROM categorias";
    const [categorias] = await connection.query(sql)

    if(categorias.length === 0){
      res.status(404).json({msg: "Categorias no encontradas."})
    }
    console.log(categorias);
    res.json(categorias)
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "Error interno del servidor"})
  }
};