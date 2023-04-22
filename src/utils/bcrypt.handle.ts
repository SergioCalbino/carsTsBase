import { hash, compare } from "bcryptjs";

const encrypt = async (pass: string) => {
    const passwordHash = await hash(pass, 10)
    return passwordHash
}
const verifyed = async (pass: string, pasHash: string) => {
    const isCorrect = await compare(pass, pasHash)
    return isCorrect;

}

export { encrypt, verifyed }