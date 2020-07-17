var h1=document.querySelector("h1");
h1.style.color="Black";
var body=document.querySelector("body");
isBlue=false;
setInterval(function(){
    if(isBlue){
        body.style.background="pink";
    }
    else body.style.background="purple";
    isBlue=!isBlue;
},1000);