import { Request, Response } from "express"
import servicesDices from "../services/dices_services"
import httpStatus from "http-status"


async function roll(req: Request, res: Response){
    const { dices } : {dices?:string} = req.query

    if(!dices){return res.sendStatus(httpStatus.BAD_REQUEST)}

    const result = servicesDices.separateDicesTypes(dices)

    return res.status(200).send(result)
}

const controllersDices = {
    roll
}
export default controllersDices