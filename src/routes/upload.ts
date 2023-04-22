import { Request, Response, Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth.controller";
import { getOrders } from "../service/order.service";
import { getItems } from "../controllers/orders.controller";
import { checkJwt } from "../middleware/session";
import { getFile } from "../controllers/upload.controllers";
import multerMiddleware from "../middleware/file";


//A esta ruta solo accede las personas con sesion activa
//Manejador de rutas
const router = Router();

router.post('/', checkJwt, multerMiddleware.single('myfile'), getFile)

export { router }