var fs = require('fs');

function SumFromFile(n){
var sum = 0;
for(var i = 1;i<n;i++){
    sum += i;
}
console.log(sum);
}

fs.readFile("test.txt",'utf8',fileContent);

function fileContent(err,data){
    if(err){
        console.error("ERROR!")
    }
    else
      SumFromFile(data)
}
