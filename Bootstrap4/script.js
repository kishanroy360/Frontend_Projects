var todo=["Buy new MacBook"];

window.setTimeout(function(){
    var input=prompt("What would you like to do?");
    while(input!="quit"){
        if(input==="list"){
            console.log("*******");
            todo.forEach(function(names,i){
                console.log(i+": "+names);
            });
            console.log("*******");
        }
        else if(input==="new"){
            var newToDo=prompt("Enter new To do?");
            todo.push(newToDo);
            console.log("Added ToDo!!");
        }
        else if(input==="delete"){
            var index=prompt("What index do u want to delete?");
            //splice
            todo.splice(index,1);
            console.log("To Do Deleted!");
        }
        //ask user again
        input=prompt("What would you like to do?");
    }
    console.log("You are done!!");
},500);
