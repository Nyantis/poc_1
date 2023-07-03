import { Request, Response } from "express"
import Repositories_person from "../repositories/skills_repositories"


function rollDice(times:number, sides:number){
    let arr:number[] = []
    for (let i = 0; i < times; i++) {
        arr.push(Math.floor(Math.random() * sides) + 1);
    }
    return arr.join(', ');
}

function separateDicesTypes(dices:string){
    const arr = dices.split(' ')
    const newObj: {[k: string]: string} = {};
    for (let i = 0; i < arr.length; i++) {
        const thisAnArr = arr[i].split('d')
        const randomNumbers = rollDice(Number(thisAnArr[0]), Number(thisAnArr[1]))
        if(randomNumbers){
            newObj["d"+thisAnArr[1]] = randomNumbers
        }
    }
    
    return newObj
}

const servicesDices = {
    rollDice,
    separateDicesTypes
}
export default servicesDices
