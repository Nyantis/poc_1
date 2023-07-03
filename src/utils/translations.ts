
//Example skill string: ( player_att.atk + ( player_att.str * 1.5 ) ) * 30

function skill(original: string){
    return eval(original)
}

const player_att = {
        atk: 10,
        str: 5,
    }
console.log(skill("( player_att.atk + ( player_att.str * 1.5 ) ) * 2"))

const translation = {
    skill
}
export default translation