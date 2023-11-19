// *****
// *   *
// *   *
// *   *
// *****

function Fullline(n){
    str = "";
    for(var i=0;i<n;i++){
        str = str + "*";
    }    console.log(str);
}

function Partialline(n){
    str = "";
    str = str + "*";
    for(var i=0;i<n-2;i++){
        str = str + " ";
    }
    str = str + "*";
    console.log(str);
}

function Fullpattern(n){
    Fullline(n)
    for(var i=0;i<n-2;i++){
        Partialline(n)
    }
    Fullline(n)
}

Fullpattern(5);