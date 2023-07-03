import { SkillFormat } from "schemas/skills_schemas"
import repositoriesSkills from "../repositories/skills_repositories"

async function createNewSkill(body:SkillFormat){
    const result = await repositoriesSkills.insertSkill()
}


const servicesSkills = {
    createNewSkill
}
export default servicesSkills
