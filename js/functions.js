// functions

function rollDice(){
    // 2 normal 6 sided die
    const max= 7;
    const min= 1;

    //random itself returns decimal from 0(inclusive) - 1(exclusive)
    //roll die 1, limits between 1 and 6
    const die_1= Math.floor(Math.random() * (max - min))+ min;

    //roll die 2, limits between 1 and 6
    const die_2= Math.floor(Math.random() * (max - min)) + min;

    //add the die together
    const dieTotal= die_1 + die_2;
    
    return `<p>-Die_1: ${die_1}<br />-Die_2: ${die_2} <br /><br />Total Roll: ${dieTotal}</p>`;

    //could make it to where we pass in the number of die to be rolled? Not sure if that could be a needed feature or not.
}//end func

// ///////////////////////////////////////////////////////////////
