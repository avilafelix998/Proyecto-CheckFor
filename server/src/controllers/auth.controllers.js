import { conexion } from "../database/database.js"
import jwt from "jsonwebtoken"


export const registerUsersCtrl = async (req, res)=>{
    const {nombre_usuario,email,password} = req.body
    try {
        const conection = await conexion ()
        conection.query("INSERT INTO `usuarios`(`nombre_usuario`, `email`,`password`) VALUES (?,?,?)",
        [nombre_usuario, email, password, ])
        conection.end()

        res.status(200).json({message:"Usuario Registrado"})

    } catch (error) {
        console.error(error)
    }
    
    }


export const loginUserCtrl = async (req, res)=>{
const {emailLogin,passwordLogin} = req.body
try {
    const conection = await conexion ()
    const [searchUser] = await conection.query("SELECT * FROM usuarios WHERE email LIKE ? AND password LIKE ?",[emailLogin,passwordLogin])
    conection.end()

    if (searchUser.length === 0) {
        return res.status(401).json({message:"usuario no encontrado"})
    }
    
    const user = searchUser[0]

    const token = jwt.sign({
        id: user.id,
        username: user.username,
        email: user.email,
    }, "secreto" , {expiresIn:"5h"})

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
      });

    res.json({
        message: "inicio de sesion exitoso",
    
    })

} catch (error) {
    console.error("error al iniciar sesion",error)
}
}
export const checkAuthCtrl = (req, res) => {
    res.set('Cache-Control', 'no-store'); //Evita que el navegador guarde la respuesta en cache
    res.status(200).json({ user: req.user });
    console.log(req.user);
  };


  
  export const logoutUserCtrl = (req, res) => {
    // Elimina la cookie llamada 'token'
    res.clearCookie('token', {
        httpOnly: true,
        secure: false, // Cambiar a true si usas HTTPS
        sameSite: 'Lax'  // Asegura compatibilidad con el envío de cookies
    });
    
    res.json({
        message: "Sesión cerrada exitosamente"
    });
};

 