import express from "express";
import cors from "cors";
import morgan from "morgan"
import { authRoutes } from "./src/routes/auth.routes.js";
import { router } from "./src/routes/preguntas.routes.js";

const app = express()

//middlewares

app.use (cors({

    origin :[
        'http://localhost:3000',
        'http://localhost:5173',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
    
}))

app.use(express.json())
app.use(morgan("dev"))
app.use(router)
app.use(authRoutes)

//Inicio del servidor en PORT 3000
app.listen(3000, () => {
    console.log("Server Running on port", 3000);
});
