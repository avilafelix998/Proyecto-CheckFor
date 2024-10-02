import { loginUserCtrl, registerUsersCtrl } from "../controllers/auth.controllers.js";
import { Router } from "express";
const router = Router()

router.post("/register",registerUsersCtrl)
router.post("/login",loginUserCtrl)
router.get("/",loginUserCtrl)

export {router}