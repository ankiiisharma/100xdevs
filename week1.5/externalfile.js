const fs = require("fs");

//filesystem module

fs.readFile("./week1.5/file.txt", "utf-8",function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

console.log("Hi there, Js to file.txt");