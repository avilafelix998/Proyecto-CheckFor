import { obtenerCategorias, obtenerPreguntas, obtenerSubcategorias, guardarRespuestas } from "../controllers/preguntas.controller.js"
import { validateJwt } from "../middlewares/validateJwt.js"
import express from "express"

export const router = express.Router()

router.get("/test/:categoria", obtenerPreguntas)
router.get("/categories", obtenerCategorias)
router.get("/subcategorias",obtenerSubcategorias)
router.post("/respuestas",validateJwt, guardarRespuestas)

