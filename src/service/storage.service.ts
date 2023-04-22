import { Car } from "../interface/car.interface";
import { Storage } from "../interface/storage";
import ItemModel from "../models/item.model";
import { Request, Response } from 'express';
import StorageModel from "../models/storage";

const registerUpload = async ({filename, idUser, path}: Storage) => {
    const responseInsert = await StorageModel.create({filename, idUser, path});
    return responseInsert
};

export { registerUpload }