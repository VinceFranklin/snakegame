import { OnSnake,expandSnake,generateFood,InSnake,snakeBody,letterSnake } from "./game.js";
//import {TimeIncrement} from "./index.js"
import {t,u,o} from './game.js'
//import {p,q} from './index.js'
export let score=0;
export var power={x:11,y:12};
//export let u=10;
let v=0;
let d=0;
let i;
let k;
let j;
let r;
let portal=[{x:5,y:11},{x:19,y:19}];
export let food=[{x: 10, y: 10},{x: 5, y: 8},{x: 10, y:14},{x: 5, y:20},];
let EXPANSION_RATE=1;
let Words=["SWAG","BUSH","MALL","MERE","NICK","HOUR","SOME","TIME","SELF","WHIZ","SAME","DARK","PINK","NONE","BOLD","BALD","EASY","MEAN","HUGE","DUAL","PASS","ZEUS"];
let Words1=[];
// let Words = ["VINS","SHIV","HARI","SHER","ATHU","AYEJ","VISU","PRET","ASHW","VIDO"]
export let Words2=[];
let letpos=[{x:10, y:14},{x:8,y:15},{x:9,y:16},{x:10,y:17}];
let arr1=[];
let lettersorder=document.querySelector(".letters-order");
            lettersorder.innerHTML=Words[d];




// function cc(gameBoard){
// snakeBody.forEach(segment =>{
//     const SE=document.createElement("div");
//     SE.style.gridRowStart=segment.y;
//     SE.style.gridColumnStart=segment.x;
//     SE.classList.add("NFX");
//     gameBoard.appendChild(SE);
//     console.log('got it')
// })
// }

export function update(){
    if(OnSnake(food)){
        var Eat=new Audio("sounds/SnakeEat.wav");
        Eat.play();
        
        if(t===1){
            var color1btn=document.querySelector(".color1");
            // color1btn.setAttribute('style',"border: 4px solid #000;");
            // if(score>1){
                color1btn.setAttribute('style',"background-color:white");
            // }
        }
        else if(t===2){
            var color2btn=document.querySelector(".color2");
            // color2btn.setAttribute('style',"border: 4px solid #000;");
            // if(score>1){
                color2btn.setAttribute('style',"background-color:white");
            // }
        }
        else if(t===3){
            var color3btn=document.querySelector(".color3");
            color3btn.setAttribute('style',"background-color:white");
        }
        else if(t===4){
            var color4btn=document.querySelector(".color4");
            color4btn.setAttribute('style',"background-color:white");
        }


       
        
        // if(t%4===0 && u%4===0 && u!=0){
        //     //console.log("u:" + u);
        //     console.log("hi");
        //     expandSnake(EXPANSION_RATE);
        //     // if(food.length===0){
        //     //     p=p+5;
        //     //     console.log("increased");
        //     // }
            
        //         // console.log("ate");
        //         // q=q+p;
        //         var color1btn=document.querySelector(".color1");
        //         var color2btn=document.querySelector(".color2");
        //         var color3btn=document.querySelector(".color3");
        //         var color4btn=document.querySelector(".color4");    
        //     // color1btn.removeAttribute('style',"border: 4px solid #000;");
        //     // color2btn.removeAttribute('style',"border: 4px solid #000;");
        //     // color3btn.removeAttribute('style',"border: 4px solid #000;");
        //     // color4btn.removeAttribute('style',"border: 4px solid #000;");
        //     var a1=Math.floor(Math.random()*254 +1);
        //     var a2=Math.floor(Math.random()*254 +1);
        //     var a3=Math.floor(Math.random()*254 +1);

        //     var b1=Math.floor(Math.random()*254 +1);
        //     var b2=Math.floor(Math.random()*254 +1);
        //     var b3=Math.floor(Math.random()*254 +1);

        //     var c1=Math.floor(Math.random()*254 +1);
        //     var c2=Math.floor(Math.random()*254 +1);
        //     var c3=Math.floor(Math.random()*254 +1);

        //     var d1=Math.floor(Math.random()*254 +1);
        //     var d2=Math.floor(Math.random()*254 +1);
        //     var d3=Math.floor(Math.random()*254 +1);

    
        //     color1btn.setAttribute("style", "background-color:rgb("+a1+","+a2+","+a3+")");
        //     color2btn.setAttribute("style", "background-color:rgb("+b1+","+b2+","+b3+")");
        //     color3btn.setAttribute("style", "background-color:rgb("+c1+","+c2+","+c3+")");
        //     color4btn.setAttribute("style", "background-color:rgb("+d1+","+d2+","+d3+")");

        //     color1btn.style.border="4px solid black"
        //     color2btn.style.border="4px solid black"
        //     color3btn.style.border="4px solid black"
        //     color4btn.style.border="4px solid black"

           


        //     // var f1=document.querySelector(".realfood1");
        //     // f1.setAttribute("style", "background-color:rgb("+a1+","+a2+","+a3+")");

        //     // var f1=document.querySelector(".food");
        //     // f1.setAttribute("style","background-color:rgb("+a1+","+a2+","+a3+")");
              
           
        //     score = score + 1;
        //     return arr1=[a1,a2,a3,b1,b2,b3,c1,c2,c3,d1,d2,d3];
        //    // highScore = score>=highScore ? score :highScore;
        //     //localStorage.setItem("high-score", highScore);
        //    // t=0;
        // }  
    }
    if(t%4===0 && t!=0){
    if(letterSnake(letpos)){
        
        if(u%4===0 && u!=0){
          
            d=d+1;
            let lettersorder=document.querySelector(".letters-order");
            lettersorder.innerHTML=Words[d];
            generateFood(letpos);
            generateFood(food);
            expandSnake(EXPANSION_RATE);
            // if(food.length===0){
            //     p=p+5;
            //     console.log("increased");
            // }
            
                // console.log("ate");
                // q=q+p;
                var color1btn=document.querySelector(".color1");
                var color2btn=document.querySelector(".color2");
                var color3btn=document.querySelector(".color3");
                var color4btn=document.querySelector(".color4");    
            // color1btn.removeAttribute('style',"border: 4px solid #000;");
            // color2btn.removeAttribute('style',"border: 4px solid #000;");
            // color3btn.removeAttribute('style',"border: 4px solid #000;");
            // color4btn.removeAttribute('style',"border: 4px solid #000;");
            var a1=Math.floor(Math.random()*254 +1);
            var a2=Math.floor(Math.random()*254 +1);
            var a3=Math.floor(Math.random()*254 +1);

            var b1=Math.floor(Math.random()*254 +1);
            var b2=Math.floor(Math.random()*254 +1);
            var b3=Math.floor(Math.random()*254 +1);

            var c1=Math.floor(Math.random()*254 +1);
            var c2=Math.floor(Math.random()*254 +1);
            var c3=Math.floor(Math.random()*254 +1);

            var d1=Math.floor(Math.random()*254 +1);
            var d2=Math.floor(Math.random()*254 +1);
            var d3=Math.floor(Math.random()*254 +1);

    
            color1btn.setAttribute("style", "background-color:rgb("+a1+","+a2+","+a3+")");
            color2btn.setAttribute("style", "background-color:rgb("+b1+","+b2+","+b3+")");
            color3btn.setAttribute("style", "background-color:rgb("+c1+","+c2+","+c3+")");
            color4btn.setAttribute("style", "background-color:rgb("+d1+","+d2+","+d3+")");

            color1btn.style.border="4px solid black"
            color2btn.style.border="4px solid black"
            color3btn.style.border="4px solid black"
            color4btn.style.border="4px solid black"

           


            // var f1=document.querySelector(".realfood1");
            // f1.setAttribute("style", "background-color:rgb("+a1+","+a2+","+a3+")");

            // var f1=document.querySelector(".food");
            // f1.setAttribute("style","background-color:rgb("+a1+","+a2+","+a3+")");
              
           
            score = score + 1;
            return arr1=[a1,a2,a3,b1,b2,b3,c1,c2,c3,d1,d2,d3];
            //u=0;
           // t=0;
        }
    }
}

    
    
    
    if(score%8===0 && score!=0){
     if (InSnake(power)){
         console.log("hi");
         var bonus=new Audio("sounds/Bonus.wav");
         bonus.play();
    
        
         //PP.classList.remove("power");
         //gameBoard.appendChild(PP);
        
         power={};
        //  if(score%2===0 && score!=0){
        //      console.log("power");
        //  var colorchangers = document.querySelectorAll(".snake");
        //  console.log("changeed");
        //  // for(let i=0;i<colorchangers.length;i++){
        //  //     console.log(colorchangers[i]);
        //  //    colorchangers[i].style.backgroundColor = "blue";
        //  // }
        //  }
         score=score+2;
         //u=p*4;
       //cc(gameBoard);
         power={x:Math.floor(Math.random()*21 + 1),y:Math.floor(Math.random()*21 +1)};

        
        
        
     }
    }
   
   

    

}


export function changepowerpos(){
    power={x:Math.floor(Math.random()*21 + 1),y:Math.floor(Math.random()*21 +1)};
}
//  if (InSnake(portal[0])) {
//       snakeBody[0] = { x: portal[1].x, y: portal[1].y };
//       expandSnake(EXPANSION_RATE);
//     }

//OLD CODE FOR LETTEERS SPAWNING//
/*
export function wordletters(gameBoard){
   // for(var i=0;i<Words.length;++i)
   if(u===1){
    console.log("hhhhhhhhhhhhhhhhhh")
    Words2.pop();
    console.log(Words2);
   }
   
       // Words1.push(Words[d]);
       console.log("o"+ o);
        for(var j=0;j<o;j++){
            Words2.push(Words[d][j]);
           
            //const letters=Words2[j];
            if(Words2.length===1){ r=0}
            else if(Words2.length===2){ r=1}
            else if(Words2.length===3){ r=2}
            else if(Words2.length===4){ r=3}
            const letters=document.createElement('div');
            letters.style.gridRowStart=letpos[r].y;
            letters.style.gridColumnStart=letpos[r].x;
            letters.classList.add('letters');
            letters.textContent=Words[d][j];
            gameBoard.appendChild(letters);
            console.log(Words2)
            // if(u%4===0){
            if(Words2.length===4 && o===4){
                Words2=[];
            }
            else if(Words2.length===3 && o===3){
                Words2=[];
            }
            else if(Words2.length===2 && o===2){
                Words2=[];
            }
            else if(Words2.length===1 && o===1){
                Words2=[];
            }


        // }
        
        }
        // d=d+1;
    

}*/

export function wordletters(gameBoard){
    if(letpos.length===4){
        const l1=document.createElement("div");
        l1.style.gridRowStart=letpos[0].y;
        l1.style.gridColumnStart=letpos[0].x;
        l1.classList.add('letters');
        l1.textContent=Words[d][0];
        gameBoard.appendChild(l1);

    }

    if(letpos.length===4 || letpos.length===3){
        if(letpos.length===4){
            r=1;
        }
        else{r=0}
        const l2=document.createElement("div");
        l2.style.gridRowStart=letpos[r].y;
        l2.style.gridColumnStart=letpos[r].x;
        l2.classList.add('letters');
        l2.textContent=Words[d][1];
        gameBoard.appendChild(l2);
    }

    if(letpos.length===4 || letpos.length===3 || letpos.length===2){
        if(letpos.length===4){
            r=2;
        }
        else if(letpos.length===3){r=1}
        else{r=0}
        const l3=document.createElement("div");
        l3.style.gridRowStart=letpos[r].y;
        l3.style.gridColumnStart=letpos[r].x;
        l3.classList.add('letters');
        l3.textContent=Words[d][2];
        gameBoard.appendChild(l3);
    }
    if(letpos.length===4 || letpos.length===3 || letpos.length===2 || letpos.length===1){
        if(letpos.length===4){
            r=3;
        }
        else if(letpos.length===3){r=2}
        else if(letpos.length===2){r=1}
        else{r=0}
        const l4=document.createElement("div");
        l4.style.gridRowStart=letpos[r].y;
        l4.style.gridColumnStart=letpos[r].x;
        l4.classList.add('letters');
        l4.textContent=Words[d][3];
        gameBoard.appendChild(l4);
    }
}
  

//}

export function drawU(gameBoard){
    if(score%8===0 && score!=0){
    const PP = document.createElement('div');
    PP.style.gridRowStart=power.y;
    PP.style.gridColumnStart=power.x;
    PP.classList.add("powerups");
    gameBoard.appendChild(PP);}
  }


export function draw(gameBoard){
if(food.length===4){
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart=food[0].y;
        foodElement.style.gridColumnStart=food[0].x;
        // if(score>2){
        if(score>=1){
            foodElement.style.backgroundColor = "rgb("+arr1[0]+","+arr1[1]+","+arr1[2]+")";
            foodElement.style.border="4px solid white";}
        else{    
        foodElement.classList.add('food');
        }
        // else{
        //     foodElement.classList.add("realfood1")
        // }
        //foodElement.classList.add('realfood1');
        gameBoard.appendChild(foodElement);}
if(food.length===4 || food.length===3){
        if(food.length===4){
            i=1;
        }
        else{
            i=0;
        }

        const Element = document.createElement('div');
        Element.style.gridRowStart=food[i].y;
        Element.style.gridColumnStart=food[i].x;
        if(score>=1){
            Element.style.backgroundColor = "rgb("+arr1[3]+","+arr1[4]+","+arr1[5]+")";
            Element.style.border="4px solid white"; }
        
        else{
        Element.classList.add('food1');}
        gameBoard.appendChild(Element);}

if(food.length===4 || food.length===3 || food.length===2){
    if(food.length===4){j=2;}
    else if(food.length===3){j=1;}
    else {j=0;}
        const Element1 = document.createElement('div');
        Element1.style.gridRowStart=food[j].y;
        Element1.style.gridColumnStart=food[j].x;
        if(score>=1){
            Element1.style.backgroundColor = "rgb("+arr1[6]+","+arr1[7]+","+arr1[8]+")";
            Element1.style.border="4px solid white";}
        
        else{
        Element1.classList.add('food2');}
        gameBoard.appendChild(Element1);}

if(food.length===4 || food.length===3 || food.length===2 ||food.length===1){
    if(food.length===4){k=3}
    else if(food.length===3){k=2}
    else if(food.length===2){k=1}
    else {k=0}
        const Element2 = document.createElement('div');
        Element2.style.gridRowStart=food[k].y;
        Element2.style.gridColumnStart=food[k].x;
        if(score>=1){
            Element2.style.backgroundColor = "rgb("+arr1[9]+","+arr1[10]+","+arr1[11]+")";
            Element2.style.border="4px solid white";}
        
        else{
        Element2.classList.add('food3');}
        gameBoard.appendChild(Element2);}


};

// export function Portal(gameBoard){
//     console.log("hsdgfhfhg")
//     const portalIn = document.createElement('div');
//     portalIn.style.gridRowStart = portal[0].y;
//     portalIn.style.gridColumnStart = portal[0].x;
//     portalIn.classList.add('portal-In');
//     gameBoard.appendChild(portalIn);

//     const portalOut = document.createElement('div');
//     portalOut.style.gridRowStart = portal[1].y;
//     portalOut.style.gridColumnStart = portal[1] .x;
//     portalOut.classList.add('portal-Out');
//     gameBoard.appendChild(portalOut);
// }


