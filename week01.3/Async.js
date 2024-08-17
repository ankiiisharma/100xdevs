const { readFile } = require("fs");

let fileContent = readFile("./a.txt");

console.log("hello world");

let counter = 0;
for(let i=0;i<1000;i++){
    counter += 1;
}