import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { registerUpload } from "../service/storage.service";
import { RequestExt } from "../interface/req-ext";
import { Storage } from "../interface/storage";

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;
        const dataToRegister: Storage = {
            filename: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`
        }
        const response = await registerUpload(dataToRegister)
        res.send('Aqui debe llegar el file')
    } catch (error) {
        handleHttp(res, "Error")
    }


};


export { getFile }