import { checkAuthCtrl, loginUserCtrl, logoutUserCtrl, registerUsersCtrl } from "../controllers/auth.controllers.js";
import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt.js";
const authRoutes = Router()

authRoutes.post("/register",registerUsersCtrl)
authRoutes.post("/login",loginUserCtrl)
authRoutes.get("/",loginUserCtrl)
authRoutes.get("/authJwt",validateJwt,checkAuthCtrl)
authRoutes.post("/logout",logoutUserCtrl)

export {authRoutes}