var todo=[];

window.setTimeout(function(){
    var input=prompt("What would you like to do?");
    while(input!="quit"){
        if(input==="list"){
            console.log(todo);
        }
        else if(input==="new"){
            var newToDo=prompt("Enter new To do?");
            todo.push(newToDo);
        }
        //ask user again
        input=prompt("What would you like to do?");
    }
    console.log("You are done!!");
},500);
