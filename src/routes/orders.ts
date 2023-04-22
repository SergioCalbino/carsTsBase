import { Request, Response, Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth.controller";
import { getOrders } from "../service/order.service";
import { getItems } from "../controllers/orders.controller";
import { checkJwt } from "../middleware/session";

//A esta ruta solo accede las personas con sesion activa
//Manejador de rutas
const router = Router();

router.get('/',checkJwt, getItems)

export { router }