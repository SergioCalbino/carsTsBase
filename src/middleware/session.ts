import { Request, Response, NextFunction } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import { verifyToken } from '../utils/jwt.handle';
import { RequestExt } from '../interface/req-ext';




const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
    try {

        //El bearer se conforma con el bearer y el token. Por eso corto los datos y me quedo con el Token solo
        const jwtByUser = req.headers.authorization || null;
        const jwt = jwtByUser?.split(' ').pop()
        const isUser = await verifyToken(`${jwt}`) as { id: string } // Esto lo hago asi para indicarle que es un string
        if (!isUser) {
           return res.status(401).send('No tienes una sesion valida')
        }
        //Ahora que el usuario esta verificado, se lo asignamos a la propiedad de req. entonces podesmo acceder a el desde otro lado
        req.user = isUser
        // console.log(isUser)
        console.log(req.user)
        next()
        
    } catch (error) {
        res.status(400).send('Sesión no valida')
    }
};

export { checkJwt }