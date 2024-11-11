import { conexion } from "../database/database.js";

export const obtenerPreguntas = async (req, res) => {
  console.log("llegó");
  const categoria  = req.params.categoria;
  const connection = await conexion()
  try{
    const [preguntas] = await connection.query("SELECT * FROM preguntas WHERE id_categoria_FK = ?", [categoria])
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
    res.json(categorias)
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "Error interno del servidor"})
  }
};


export const obtenerSubcategorias =  async (req, res) => {
  try {

  const connection = await conexion()
  const [subcategorias] = await connection.query( "SELECT * FROM subcategorias" )

  if(subcategorias.length === 0){
    res.status(404).json({msg: "Subcategorias no encontradas."})
  }
  res.json(subcategorias)
} catch (error) {

  console.log(error);
  res.status(500).json({msg: "Error interno del servidor"})

}
};

export const guardarRespuestas = async (req,res) =>{
  const respuestas = req.body
  try{
    
    const connection = await conexion()
    const sql = "INSERT INTO `respuestas`(`id_pregunta_FK`,`respuesta`,`id_usuario_FK`) VALUES (?,?,?)"
    Object.entries(respuestas).map(([key, value]) => connection.query(sql,[key,value,1]));
    const peticion = await connection.query( "SELECT * FROM subcategorias" )
    res.json(peticion)

  }catch(err){
    console.log(err)
    res.status(500).json({msg: "Error interno del servidor"})
  }
}
