import { Request, Response } from "express"
import Services_person from "../services/skills_services"
import { BAD_REQUEST, INTERNAL_SERVER_ERROR, OK } from "http-status"
import { SkillFormat } from "schemas/skills_schemas"


async function create(req: Request, res: Response){
    const skill : SkillFormat = req.body; 
    try {
        await Services_person.createNewSkill(skill)
        return res.sendStatus(OK)
    } catch (error) {
        return res.sendStatus(BAD_REQUEST)
    }
}

async function getById(req: Request, res: Response){
    const { id } : {id?:string} = req.params
    const parsed = Number.parseInt(id)
    console.log(parsed)
    try {
        if(isNaN(parsed)){
            return res.sendStatus(BAD_REQUEST)
        }
        

        return res.status(OK).send({parsed})
    } catch (error) {
        return res.sendStatus(INTERNAL_SERVER_ERROR)
    }
}

async function updateOneById(req: Request, res: Response){
    const { id } : {id?:string} = req.params
    const parsed = Number.parseInt(id)
    console.log(parsed)
    try {
        if(isNaN(parsed)){
            return res.sendStatus(BAD_REQUEST)
        }
        

        return res.status(OK).send({parsed})
    } catch (error) {
        return res.sendStatus(INTERNAL_SERVER_ERROR)
    }
}

async function deleteOneById(req: Request, res: Response){
    const { id } : {id?:string} = req.params
    const parsed = Number.parseInt(id)
    console.log(parsed)
    try {
        if(isNaN(parsed)){
            return res.sendStatus(BAD_REQUEST)
        }
        

        return res.status(OK).send({parsed})
    } catch (error) {
        return res.sendStatus(INTERNAL_SERVER_ERROR)
    }
}
const controllerSkills = {
    create,
    getById,
    updateOneById,
    deleteOneById,
}
export default controllerSkills