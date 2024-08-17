var click = 1;
var counter = 1;

function printclick(){
    console.clear()
    console.log(click);
    click += 1;
}
  
setInterval (printclick,1000);

for(var i=0;i<1000;i++){
    counter += 1;
}
console.log(counter); 