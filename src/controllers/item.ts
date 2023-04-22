import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { createCar, deleteCar, getCar, getCars, updateCar } from "../service/item.service";
import { Car } from '../interface/car.interface';

const getItem = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
       const response = await getCar(id)
       res.json(response)
    } catch (error) {
        handleHttp(res, 'ERROR, GET ITEM')
    }
};

const getItems = async (req: Request, res: Response) => {
    try {
        const responseCars = await getCars();
       
       return res.json(responseCars)
    } catch (error) {
        handleHttp(res, 'ERROR, GET ITEMS')
    }
};

const postItem = async (req: Request, res: Response) => {
    try {
        const { body } = req
        console.log(body)
        const response = await createCar(body)
        response.save()
        res.json(response)
    } catch (error) {
        handleHttp(res, 'ERROR, POST ITEM', error)
    }
};

const updateItem = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const { id } = req.params
        const response = await updateCar(id, body)
        res.json(response)
    } catch (error) {
        handleHttp(res, 'ERROR, UPDATE ITEM')
    }
};

const deleteItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const response = await deleteCar(id)
        res.json(response)
    } catch (error) {
        handleHttp(res, 'ERROR, DELETE ITEM')
    }
};

export {
    getItem,
    getItems,
    postItem,
    updateItem,
    deleteItem
}