import { loginUserCtrl, registerUsersCtrl } from "../controllers/auth.controllers.js";
import { Router } from "express";
const registeRouter = Router()

registeRouter.post("/register",registerUsersCtrl)
registeRouter.post("/login",loginUserCtrl)
registeRouter.get("/",loginUserCtrl)

export {registeRouter}