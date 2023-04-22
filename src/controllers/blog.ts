import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR, GET Blog')
    }
};

const getBlogs = (req: Request, res: Response) => {
    try {
        res.send({msg: 'hola'})
    } catch (error) {
        handleHttp(res, 'ERROR, GET BlogS')
    }
};

const postBlog = (req: Request, res: Response) => {
    try {
        const { body } = req
        res.json(body)
    } catch (error) {
        handleHttp(res, 'ERROR, POST Blog')
    }
};

const updateBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR, UPDATE Blog')
    }
};

const deleteBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR, DELETE Blog')
    }
};

export {
    getBlog,
    getBlogs,
    postBlog,
    updateBlog,
    deleteBlog
}