import { createConnection } from 'mysql2/promise'
export const conexion = async () => {
  try {
    const connection = await createConnection({
      host: "localhost",
      user: "root",
      database: "checkfor",
    });
    await connection.connect();
    console.log("conectado correctamente");
    return connection
  } catch (error) {
    console.log(error)
  }
}