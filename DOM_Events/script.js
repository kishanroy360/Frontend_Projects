var button=document.querySelector("button");
var p=document.querySelector("body");
var isPurple=false;
button.addEventListener("click",function(){
    if(isPurple){
    p.style.background="white";
    }
    else
    p.style.background="purple";
    isPurple=!isPurple;
});