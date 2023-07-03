function rollDice(times:number, sides:number){
    let arr:number[] = []
    for (let i = 0; i < times; i++) {
        const randomNumber = Math.floor(Math.random() * sides) + 1
        console.log(randomNumber)
        arr.push(randomNumber);
    }
    return arr;
}
rollDice(2, 2)