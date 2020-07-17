var p1=document.querySelector("#p1");
var p2=document.getElementById("p2");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
var p=document.querySelector("p");

var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");

var numInput=document.querySelector("input");

var p1score=0;
var p2score=0;
var gameOver=false;
var winingScore=5;

p1.addEventListener("click",function(){
    if(!gameOver){
        p1score++;
        if(p1score===winingScore) {
            p1Display.classList.add("winner");
            gameOver=true;
        }
        p1Display.textContent=p1score;
    }
});

p2.addEventListener("click",function(){
    if(!gameOver){
        p2score++;
        if(p2score===winingScore) {
            p2Display.classList.add("winner");
            gameOver=true;
        }
        p2Display.textContent=p2score;
    }
});

function resetF(){
    p1score=0;
    p2score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    gameOver=false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

reset.addEventListener("click",function(){
    resetF();
});

numInput.addEventListener("change",function(){
    p.textContent="Playing to: " + numInput.value;
    winingScore=Number(numInput.value);
    resetF();
});
