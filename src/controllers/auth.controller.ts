import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../service/auth.service";

const registerCtrl = async( req: Request, res: Response) => {
    const { body } = req
    const newUser = await registerNewUser(body)
    res.json(newUser)
};

const loginCtrl = async( req: Request, res: Response) => {

    const { body } = req;
    const login = await loginUser(body)

    res.json(login)
    
};

export { registerCtrl, loginCtrl  }