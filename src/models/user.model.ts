import { Schema, Types, model, Models } from "mongoose";

import { User } from "../interface/user.interface";

const UserSchema = new Schema<User>(
    {
       name: {
        type: String,
        required: true
       },
       password: {
        type: String,
        required: true
       },
       email: {
        type: String,
        required: true,
        unique: true
       },
       description: {
        type: String,
        default: 'Soy la descripcion'
       }

    },
    {
        timestamps: true,
        versionKey: false
    }
)

const UserModel = model('user', UserSchema);
export default UserModel