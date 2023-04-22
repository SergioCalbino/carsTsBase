import { Request, Response, Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth.controller";


//Manejador de rutas
const router = Router();


//localhost:3002/auth/login [post]
//localhost:3002/auth/register [post]
router.post('/register', registerCtrl)
router.post('/login', loginCtrl)




export { router }