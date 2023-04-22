import { Router } from "express";
import { readdirSync } from 'fs'

//Leo los directorios
const PATH_ROUTER = `${ __dirname }`;

const router = Router();

const cleanFileName = (fileName : string) => {
    const file = fileName.split('.').shift()
    return file
}

//Lee la cantidad de directorios que tiene una ruta. ASi leo los __dirname. Esto devuelve un arreglo
// Con el import hago un cargador de rutas dinamicos propios de TS. Todas las rutas van a ser /algo
readdirSync(PATH_ROUTER).filter((filename) => {
    const cleanName = cleanFileName(filename)
    if (cleanName !== 'index') {
        console.log(cleanName)
        import(`./${cleanName}`).then((moduleRouter) =>{
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})



export { router }