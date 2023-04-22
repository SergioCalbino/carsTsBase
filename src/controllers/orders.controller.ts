import { Request, Response } from "express";

import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interface/req-ext";



const getItems = async (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "Eso solo lo ve la persona con sesion",
            user: req.user
        })
      
    } catch (error) {
        handleHttp(res, 'ERROR, GET ITEMS')
    }
};


export { getItems }