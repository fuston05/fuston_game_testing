function rollDice(  ){
    // 2 normal 6 sided die
    const max= 7;
    const min= 1;
    const die1= Math.floor(Math.random() * (max - min))+ min;
    const die2= Math.floor(Math.random() * (max - min)) + min;
    const dieTotal= die1 + die2;
    return `Die1: ${die1}, Die2: ${die2} \n Total Roll: ${dieTotal}`;
}//end func

// console.log(rollDice());
