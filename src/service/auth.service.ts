import { verify } from 'jsonwebtoken';
import { Auth } from '../interface/auth.interface';
import { User } from '../interface/user.interface';

import UserModel from '../models/user.model';
import { encrypt, verifyed } from '../utils/bcrypt.handle';
import { generateToken } from '../utils/jwt.handle';




const registerNewUser = async({ email, password, name }: User) => {
    const alreadyEmail = await UserModel.findOne( { email } )
    if ( alreadyEmail ) return 'ALREADY: USER'
   
    if(!password || !name) return 'Password and Name is required'

    const passHash = await encrypt(password)
    const register = await UserModel.create({email, password: passHash, name})
  
   
    register.save()
    return register
};

const loginUser = async ({ email, password }: Auth) => {

    const user = await UserModel.findOne({ email })
    if (!user) {
        return "EL USUARIO NO EXISTE EN LA BASE DE DATOS"
    }

    const passwordHash = user.password
    const isCorrectPass = await verifyed(password, passwordHash)

    if (!isCorrectPass) {
        return 'PASSWORD INCORRECTO'
    }

    const token = await generateToken(user.id)
    
    return {
       user: user, token
    }

}

export { registerNewUser, loginUser }