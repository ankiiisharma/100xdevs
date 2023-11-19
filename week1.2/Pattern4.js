// *****
// ****
// ***
// **
// *


function StaryPattern4(n){
    str=""
    for(var i=n;i>=n;i--){
        for(var j=0;j<=i;j++){
            str = str + "*";
        }
        str += "\n"
    }
    console.log(str)
}


var n = 5;
StaryPattern4(n);