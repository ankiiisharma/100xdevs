var click = 1;
 
function printclick(){
    console.clear()
    console.log(click);
    click += 1;
}

setInterval (printclick,1000);

