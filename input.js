//import {gamePaused} from "./index";
let inputDirection ={x:0 ,y:0};
let lastInputDirection ={x:0,y:0};

var len=document.querySelectorAll(".btn").length;
for(var i=0; i<len;i++) {
document.querySelectorAll("button")[i].addEventListener("click",function(){
    let buttonInnerHtml;
    if(this.innerHTML === "Up"){
        buttonInnerHtml = "ArrowUp"
    }
    else if(this.innerHTML === "Down"){
        buttonInnerHtml = "ArrowDown"
    }
    else if(this.innerHTML === "Left"){
        buttonInnerHtml = "ArrowLeft"
    }
    else if(this.innerHTML === "Right"){
        buttonInnerHtml = "ArrowRight"
    }
  // var buttonInnerHtml=this.innerHTML;
   controlls(buttonInnerHtml);
   Animation(buttonInnerHtml);
});
}



window.addEventListener("keydown", function(e) {
    controlls(e.key);
    Animation(e.key);
})
function controlls(key){
    switch (key) {
        case "ArrowUp":
            if(lastInputDirection.y == 0 ){
            inputDirection={x:0,y:-1}}
            break
        case "ArrowDown":
            if(lastInputDirection.y == 0 ){
            inputDirection={x:0,y:1}}
            break
        case "ArrowLeft":
            if(lastInputDirection.x == 0 ){
            inputDirection={x:-1,y:0}}
            break
        case "ArrowRight":
            if(lastInputDirection.x == 0 ){
            inputDirection={x:1,y:0}}
            break
    }
}
 export function Animation(element){
    var ani=document.querySelector("."+element);
    ani.classList.add("pressed");
    setTimeout(function(){
        ani.classList.remove("pressed");
    },100);
}



export function getInputDirection() {
    lastInputDirection= inputDirection
    return inputDirection;
}