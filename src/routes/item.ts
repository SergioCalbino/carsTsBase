import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

//Manejador de rutas
const router = Router();


//localhost:3002/items [get]
router.get('/', getItems )
router.get('/:id', logMiddleware, getItem )
router.post('/', postItem )
router.put('/:id', updateItem )
router.delete('/:id', deleteItem )



export { router }