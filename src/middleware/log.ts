import { NextFunction, Request, Response } from "express"

const logMiddleware = ( req: Request, res: Response, next: NextFunction ) => {
    const headers = req.headers;
    const agent = headers["user-agent"]
    console.log(agent)

    next()

}

export { logMiddleware }