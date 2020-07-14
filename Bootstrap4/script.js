var age=Number(prompt("What is your age?"));

if(age<0){
    console.log("Come back one");
}
else if(age%Math.sqrt(age)==0){
    console.log("Perfect");
}
else{
    console.log("Try again");
}