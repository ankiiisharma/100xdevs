

//async code.

function Print(){
    console.log("hello World");
}
setTimeout(Print, 2 * 1000);

//synchronous code.

let counter = 0;
for(let i=0;i<1000;i++){
    counter += 1;
}

console.log(counter);