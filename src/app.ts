import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import dbConnect from './config/mongo';

const PORT = process.env.PORT || 3001
const app = express();

app.use(express.json())
dbConnect().then(() => console.log("Conexion Ready"))
app.use(cors());

//Importo las rutas
app.use(router)


app.listen(PORT, () => {
    console.log(`Base de datos on line en el puerto ${PORT}`)
})