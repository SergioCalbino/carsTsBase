import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'palabraSecreta'


const generateToken = async (id: string) => {
    const jwt =  sign({ id }, JWT_SECRET, {
        expiresIn : "2h"
    })
    return jwt



};

//Verifica si el token pertenece a un usuario
const verifyToken = async (jwt: string) => {
   const isOkToken =  verify(jwt, JWT_SECRET)
   return isOkToken
};

export { generateToken, verifyToken }