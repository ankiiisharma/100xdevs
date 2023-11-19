// *****
// *****
// *****
// *****
// *****


function row(n){
    str = "";
    for(var i=0;i<n;i++){
        str = str + "*";
    }
    console.log(str)
}


function Starpattern(n){
    for(var i=0;i<n;i++){
    row(n);
}
}

var n = 5;
Starpattern(n);