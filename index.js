import { update as updatesnake, draw as drawsnake,getSnakeHead,snakeIntersection,OnSnake,respawn,t} from './game.js'
import { update as updatefood,draw as drawfood,score,drawU as drawpowerUps,food,wordletters} from './food.js'
import { OutsideGrid } from './grid.js'
import { Animation } from './input.js';
//import {time, updateTime} from './Timer.js'
let count=0;
let last = 0;
let sum=180;
//let power={x:3,y:4};
let ss=10;
export let p=5;
export let q=180;
//export let p=5;
export let lives=5;
export var time=0;
let gameOver=false;
export const gameBoard = document.getElementById('game-board');
let output = document.querySelector(".Timer");
let points=document.querySelector(".score");
let LIFE=document.querySelector(".life");
let highscoreelement = document.querySelector(".high-score");
let pauseButton = document.querySelector(".pause-button");
let gamePaused=false;

var name=prompt("Name of the player");
alert("Game will start 'IMMEDIATELY' once you clock 'OK'");

//export let highScore = localStorage.getItem("high-score") || 0;
//highscoreelement.textContent=score;

let highScore=localStorage.getItem("high-score") || 0;
highscoreelement.textContent="HIGHSCORE:" + highScore;


function main(currentTime) {
  // if(gamePaused){
  //   return;
  // }
 
  if (gameOver && lives===0){
    return alert("GAME OVER!!! Great play BTW your score : "+score);
  }

  if(gamePaused===true){
    window.cancelAnimationFrame(main);
  }
  else{
    window.requestAnimationFrame(main);
  }

  const tt = (currentTime - last) / 1000;
  if (tt < 1 / ss) return
  last = currentTime;

 if(tt<1){
 count=count+1;}

 if(count%ss===0){
  sum=sum-1;}
  
  time=sum;

  highScore=score >=highScore ?score :highScore;
  localStorage.setItem("high-score",highScore);
  highscoreelement.textContent="HIGHSCORE:" + highScore;

  output.textContent="TIMER: "+q;
  points.textContent='SCORE'+name+": " + score;
  LIFE.textContent="LIVES: " +lives;
 // highscoreelement.textContent=score;
  if(sum<180 && sum>=160){
    ss=8;
  }

  else if(sum<160 && sum>=140){
    ss=10;
  }
  else if(sum>=120 && sum<140){
    ss=15;
  }
  else if(sum<120 && sum>=100){
    ss=20;
  }
  else{
    ss=25;
  }

  if(q===0){
    alert("Time up")
    lives=0;
    return gameOver=true; 
  }
  // if(OnSnake(food)){
  //   sum=sum+5;
  // }
  
  update();
  draw();


}
//setInterval(time,1000)
//let hiscore=localStorage.getItem("hiscore:");

//let HSCB=document.querySelector(".hiscorebox");
//let  hiscoreval = 0;
//if(hiscore===null){
 
//   localStorage.setItem("hiscore:",JSON.stringify(hiscoreval));
// }
// else{
//   hiscoreval=JSON.parse(hiscore);
  
//   HSCB.innerHTML = "HI Score: " + hiscoreval;
// }

// if(score>hiscoreval) {
//   hiscoreval = score;
//   localStorage.setItem("hiscoreval",JSON.stringify(hiscoreval));
//   HSCB.innerHTML = "HI Score: " + hiscoreval;
// }
pauseButton.addEventListener("click", () =>{
  gamePaused = !gamePaused;
  pauseButton.innerHTML=gamePaused ?'Resume' : 'Pause';
  window.requestAnimationFrame(main);
});

pauseButton.addEventListener('keydown',function(e){
  pause(e.key)
  Animation(e.key);
})
function pause(key){
  switch(key){
    case "SpaceBar":
      gamePaused = !gamePaused;
      pauseButton.innerHTML=gamePaused ?'Resume' : 'Pause';
      window.requestAnimationFrame(main);
      break;

    case "Enter":
      gamePaused = !gamePaused;
      pauseButton.innerHTML=gamePaused ?'Resume' : 'Pause';
      window.requestAnimationFrame(main);
      break;
  }
}



window.requestAnimationFrame(main);




function update() {
    updatesnake()
    updatefood()
    checkDeath()
   // updateTime()
   

}

function draw() {
    gameBoard.innerHTML ='';
    drawsnake(gameBoard)
    drawfood(gameBoard)
    wordletters(gameBoard)
    // Portal(gameBoard)
  //  if (score%2===0 && score!=0){
       
      drawpowerUps(gameBoard);
      //power={x:(Math.floor(Math.random()*21 +1)),y:(Math.floor(Math.random()*21 +1))};
     
   // }
   
}

function checkDeath() {
  if(gameOver = OutsideGrid(getSnakeHead()) || snakeIntersection()){
    console.log('lifeout');
    console.log(snakeIntersection());
    var Go=new Audio("sounds/GameOver.mp3");
    Go.play();
  lives=lives-1;
  respawn();
}
}

// export function TimeIncrement(){
//   if(OnSnake(food)){
//     console.log("hi");
//     return time=time-5;
//   }
//   else {
//     return false;
//   }
//  }
setInterval(timer,1000);
function timer(){
    q=q-1;
    console.log("p");
    if(t%4===0 && t!=0){
     return q=q+0.5;
    }
}



