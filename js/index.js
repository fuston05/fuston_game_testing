//main game file

//get out outPut div
let outPut= document.getElementById('outPut');

//test game tik
// I think this is a 30fps counter? if you use 33.3 for setInterval? 
//not that we need 30fps for our purposes, just messing around.
//prob use 1500 for the setInterval in the text game just to delay actions so everythings not 
// instant like a fight etc..
let count=1;
window.setInterval(() => {
    outPut.innerHTML=count;
    if( count== 30 ){
        count= 1;
        // console.log('30 frame');
    }else{
        count++;
    }
    
}, 1500);

// out.innerHTML= rollDice();

