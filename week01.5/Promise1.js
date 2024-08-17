const fs = require('fs');

function ReadFile(){
        // This is the promise which may or maynot be resove. 

   return new Promise(function(resolve){
       fs.readFile("file.txt","utf-8",function(err, data){
          resolve(data);
       });
   })
}

function onDone(data){
   console.log(data);
}

ReadFile().then(onDone);