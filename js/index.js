function rollDice(){
    // 2 normal 6 sided die
    const max= 7;
    const min= 1;

    //roll die 1
    const die_1= Math.floor(Math.random() * (max - min))+ min;

    //roll die 2
    const die_2= Math.floor(Math.random() * (max - min)) + min;

    //add the die together
    const dieTotal= die_1 + die_2;
    
    return `-Die_1: ${die_1},\n-Die_2: ${die_2} \n\nTotal Roll: ${dieTotal}`;

    //could make it to where we pass in the number of die to be rolled? Not sure if that could be a needed feature or not.
}//end func

// let poop= document.getElementById("outPut");
// poop.textContent= rollDice();


