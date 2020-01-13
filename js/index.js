////// initial game state event listeners ////////
const actionBtn= document.querySelector('.screenActionButton');
actionBtn.addEventListener('click', (e) => {gameStart()});

//////////////////////////////////////////////////
/////////////////////////////////////////////////

//get out outPut div
let outPut = document.getElementById('outPut');

//test game tik
// I think this is a 30fps counter? if you use 33.3 for setInterval? 
//not that we need 30fps for our purposes, just messing around.
//prob use 1500 for the setInterval in the text game just to delay actions so everythings not 
// instant like a fight etc..

function nextSequence() {

   //call to a JSON object with sequences? :: { 1: 'waking up in a strange place starting story line??' } .. not sure how this might work out. 
   //could update a gameObject property to track what sequence we're on??

}//end nextSequence


let count = 1;
window.setInterval(() => {
   //i think every tick we call a function for next action or sequence??
   nextSequence();
   // console.log('Count: ' + count);
   count++;

   // //// run main game here???  /////
   // Add story content to another js file and pull it from there? maybe store story sections in -
   // JSON object?? would make it easy to call different portions of text, especially repetitive portions - like: "do you want to pick this item up?" or "which direction would you like to go? etc"

   //just testing how/where we'd need start this//

   // outPut.innerHTML = stuff;

}, 1500);//end game timer


//just testing how/where we'd need start this//
class GameRoom{
   constructor(){
      this.id= '',
      this.rmName= '',
      this.availableDirections= [],
      this.items= [],
      this.sound= '',
      this.entryDialog= ''

   }//end constructor
}//end class
                  //8 cols
const gameRooms= [1,1,1,1,1,0,1,1,  //ind: 0-7   //ind 9 is end
   /*5-rows */    1,0,1,0,0,0,1,1,  //8-15       // start at ind: 19
                  1,0,1,0,1,0,1,1,  //16-23
                  1,0,1,0,0,0,0,1,  //24-31      //1's are impassable
                  1,0,0,0,1,1,1,1]; //32-39

                  /*
                  if start is #6: index: 5
                  options: N1,S1,E2,W1
                  "go N": takes u to #2: index: 1.. 
                  so... 
                  N = index-4, 
                  S = index +4
                  E= index +1, 
                  W= index -1
                  */
