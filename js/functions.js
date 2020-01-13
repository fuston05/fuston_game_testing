// functions

function rollDice() {
   // 2 normal 6 sided die
   const max = 7;
   const min = 1;

   //random itself returns decimal from 0(inclusive) - 1(exclusive)
   //roll die 1, limits between 1 and 6
   const die_1 = Math.floor(Math.random() * (max - min)) + min;

   //roll die 2, limits between 1 and 6
   const die_2 = Math.floor(Math.random() * (max - min)) + min;

   //add the die together
   const dieTotal = die_1 + die_2;
   const disp= document.querySelector('.mainText');
   disp.textContent= "Die-1: "+ die_1;
   disp.textContent+=" \n -Die_2: "+ die_2;
   + " \n Total Roll: " +dieTotal;

   //could make it to where we pass in the number of die to be rolled? Not sure if that could be a needed feature or not.
}//end func

// ///////////////////////////////////////////////////////////////
function gameStart(){
   //set start and intro sequences
   // actionBtn.style.display= 'none';
   actionBtn.textContent= 'Continue';
   updateDisp(narratives.start);
   //remove old click event
   actionBtn.removeEventListener('click', gameStart);
   //update sequence state
   sequenceState.startComplete= true;
};

const gameState={
   'curSequence': narratives.start
};

const sequenceState={
   startComplete: false,
   introComplete: false
};

function sequenceTracker(seq){

};


function updateDisp(seq){
   const disp= document.querySelector('.mainText');
   disp.textContent= seq;

}//end updateDisp