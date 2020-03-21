////// initial game state event listeners ////////
const actionBtn= document.querySelector('.screenActionButton');
actionBtn.addEventListener('click', (e) => {gameStart()});

const action_1= document.querySelector('.action_1');
action_1.addEventListener('click', (e) => {
   console.log('You take a look around the area and find: ',StartArea.items);
})

// game start.


//////////////////////////////////////////////////
/////////////////////////////////////////////////

//get out outPut div
let outPut = document.getElementById('outPut');

                  //8 cols
const gameRooms= [1,1,1,1,1,0,1,1,  //ind: 0-7   //ind 9 is end
   /*5-rows */    1,0,1,0,0,0,1,1,  //8-15       // start at ind: 19
                  1,0,1,0,1,0,1,1,  //16-23
                  1,0,1,0,0,0,0,1,  //24-31      //1's are impassable
                  1,0,0,0,1,1,1,1]; //32-39      //0's are rooms or areas basically
                  // this array has 16 rooms (14 playable rooms.. 1-start, 1 end room)
                  
                  /* movement:
                  options: N1,S1,E2,W1 
                  so... 
                  N = index-8, 
                  S = index +8
                  E= index +1, 
                  W= index -1
                  */
