import { Request, Response } from "express"
import Services_person from "../services/skills_services"
import { BAD_REQUEST, OK } from "http-status"
import { SkillFormat } from "schemas/skills_schemas"


async function create(req: Request, res: Response){
    const skill : SkillFormat = req.body; 
    try {
        await Services_person.createNewSkill(skill)
        return res.status(OK).send()
    } catch (error) {
        return res.sendStatus(BAD_REQUEST)
    }
}

async function getById(req: Request, res: Response){
    const { id } : {id?:string} = req.params
    
    try {
        if(isNaN(Number(id)) || !id){
            return res.sendStatus(BAD_REQUEST)
        }
        

        return res.status(OK).send(id)
    } catch (error) {
    
    }
}

async function updateOneById(req: Request, res: Response){
    const { id } : {id?:string} = req.params
    
    try {
        if(isNaN(Number(id)) || !id){
            return res.sendStatus(BAD_REQUEST)
        }
        

        return res.status(OK).send(id)
    } catch (error) {
    
    }
}

async function deleteOneById(req: Request, res: Response){
    const { id } : {id?:string} = req.params
    
    try {
        if(isNaN(Number(id)) || !id){
            return res.sendStatus(BAD_REQUEST)
        }
        

        return res.status(OK).send(id)
    } catch (error) {
    
    }
}
const controllerSkills = {
    create,
    getById,
    updateOneById,
    deleteOneById,
}
export default controllerSkills