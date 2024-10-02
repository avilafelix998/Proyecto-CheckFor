import { obtenerCategorias, obtenerPreguntas } from "../controllers/preguntas.controller.js"
import express from "express"

export const router = express.Router()

router.get("/test/:categoria", obtenerPreguntas)
router.get("/categories", obtenerCategorias)


