// *
// **
// ***
// ****
// *****


function StaryPattern5(n){
    str = ""
    for(var i=1;i<=n;i++){
        for(var j=1;j<=i;j++){
            str = str + "*";
        }
        str += "\n";
    }
    console.log(str);
}


var n = 5;
StaryPattern5(n);