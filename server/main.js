import express, {json} from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './src/routes/preguntas.routes.js'
const app = express()


app.use(morgan("dev"));
app.use(cors());
app.use(router)

app.listen(3000, console.log("Servidor corriendo en http://localhost:3000"))