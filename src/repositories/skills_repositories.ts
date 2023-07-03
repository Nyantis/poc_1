import { connection } from "../database/db";


async function insertSkill(){
    try{
        const query = await connection.query(`
        INSERT INTO 
        skills("roomId", calculations, name)
        VALUES($1, $2, $3)
        `, [])
        
        return query.rows

    } catch(err){return}
}


const repositoriesSkills = {
    insertSkill
}
export default repositoriesSkills
