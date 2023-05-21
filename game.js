import {getInputDirection} from './input.js';
export var c;
import {power} from './food.js';
//import {sum} from './index.js';
//export let ss = 5;
import {Words2} from './food.js'

let newSegments=0;
export let o=4;
export let t=0;
export let u=0;
let x1=0;
let y1=0;
let x2=0;
let y2=0;
let x3=0;
let y3=0;
let x4=0;
let y4=0;
export let snakeBody=[
     {x:13 , y:10}  
 ];

export function update(){
    addSegments();
    const inputDirection = getInputDirection()
    for( var i=snakeBody.length-2; i>=0 ;i--){
        snakeBody[i+1] = {...snakeBody[i]};
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
    
}


export function draw(gameBoard){
    snakeBody.forEach((segment,index) => {
        const snakeElement=document.createElement('div')
        snakeElement.style.gridRowStart=segment.y
        snakeElement.style.gridColumnStart=segment.x
  
        snakeElement.classList.add('snake');
        if(index===0){
         snakeElement.classList.add('head');
        } 
        
        gameBoard.appendChild(snakeElement)
    })

}
 export function expandSnake(amount){
   console.log("h");
    newSegments+=amount;
   
 }

 export function OnSnake(position){
    return snakeBody.some((segment) =>{
        for(let i=0; i<position.length; i++){
         if (equalPositions(segment,position[i])){
            position.shift();
            t=t+1;
            console.log(t);
            return true;
         }
         else if(t===4){
            t=0;
         }
         else{
            return false;
         }
         
      }
    })
 }

 export function letterSnake(position){
   return snakeBody.some((segment) =>{
       for(let i=0; i<position.length; i++){
        if (equalPositions(segment,position[i])){
         o=o-1;
           position.shift();
           u=u+1;
           
          // console.log("o"+o);
           if(o===0){
               o=4;
           }
           console.log(`u:${u}`);
           return true;
        }
        else if(u===4){
           u=0;
        }
        else{
           return false;
        }
        
     }
   })
}

 export function InSnake(position, {ignoreHead = false} = {}){
   return snakeBody.some((segment,index) =>{
       if (ignoreHead && index===0) return false
       return equalPositions(segment, position)
   })
}

 export function getSnakeHead(){
    return snakeBody[0]
 }

 export function snakeIntersection(){
  // console.log("hoi");
    return InSnake(snakeBody[0],{ignoreHead : true})
 }

 function equalPositions(pos1, pos2){
    return (pos1.x === pos2.x && pos1.y === pos2.y)
 }
  
 function addSegments(){
    for( let i=0;i<newSegments;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    newSegments=0;
 }
  
 export function generateFood(pos){
    x1=Math.floor(Math.random()*21 + 1);
    y1=Math.floor(Math.random()*21 + 1);

    x2=Math.floor(Math.random()*21 + 1);
    y2=Math.floor(Math.random()*21 + 1);

    x3=Math.floor(Math.random()*21 + 1);
    y3=Math.floor(Math.random()*21 + 1);

    x4=Math.floor(Math.random()*21 + 1);
    y4=Math.floor(Math.random()*21 + 1);
    console.log("yes");
    //sum=sum+5;
    pos.push({x:x1,y:y1},{x:x2,y:y2},{x:x3,y:y3},{x:x4,y:y4});
    
 }

 export function respawn(){
   snakeBody=[];
   snakeBody.push({x:11,y:11});
 }



