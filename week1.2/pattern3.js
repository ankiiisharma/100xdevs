// *
// **
// ***
// ****
// *****


function StaryPattern(n){
    str = "";
    for(var i=1;i<=n;i++){
        for(var j=0;j<i;j++){
            str = str + "*";
        }
        str += "\n";
    }
    console.log(str);
}

StaryPattern(5);