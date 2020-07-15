console.log("Connected");
var movies=[
    {
        name:"Titanic",
        Watched:true,
        Rating:9
    },
    {
        name:"Dil Bechara",
        Watched:false,
        Rating:10
    }
]

movies.forEach(function(i){
    if(i.Watched){
        console.log("You have watched "+ i.name +" and its rating is : "+i.Rating);
    }
    else{
        console.log("You have not watched "+ i.name +" and its rating is : "+i.Rating);
    }
});
