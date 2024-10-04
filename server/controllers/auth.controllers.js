import { ConnectionDataBase} from "../dataase.js"
import jwt from "jsonwebtoken"

export const registerUsersCtrl = async (req, res)=>{
    const {nombre_usuario,email,password} = req.body
    try {
        const conection = await ConnectionDataBase()
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
    const conection = await ConnectionDataBase()
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
    }, "secreto",{expiresIn:"5h"})
    return res.json({
        message: "inicio de sesion exitoso",
        token
    })

} catch (error) {
    console.error("error al iniciar sesion",error)
}
}
