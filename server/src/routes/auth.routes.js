import { loginUserCtrl, registerUsersCtrl } from "../controllers/auth.controllers.js";
import { Router } from "express";
const authRoutes = Router()

authRoutes.post("/register",registerUsersCtrl)
authRoutes.post("/login",loginUserCtrl)
authRoutes.get("/",loginUserCtrl)

export {authRoutes}