import { Car } from "../interface/car.interface";
import ItemModel from "../models/item.model";
import { Request, Response } from 'express';

const createCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert
};


const getCars = async () => {
    const getResponse = await ItemModel.find({})
    return getResponse
};

const getCar = async ( id: string ) => {
    const getResponse = await ItemModel.findById({_id: id})
    const data = getResponse ? getResponse : 'El Auto no existe en la DB'
    return data
};

const updateCar = async ( id: string, data: Car  ) => {

     const carUpdate = await ItemModel.findByIdAndUpdate({_id : id}, data, { new: true })
    return carUpdate
};

const deleteCar = async ( id: string  ) => {

     const removeCar = await ItemModel.findByIdAndDelete({_id : id})
    return removeCar
};

export { createCar, getCars, getCar, updateCar, deleteCar }