function FindSumupto100(){
    let a = 0;
    for(let i=0;i<100;i++){
        a += i;
    }
    return a;
}


function findSum(){
    console.log(FindSumupto100(100));
}

setTimeout(findSum,1000)
console.log("Hello user, Ankit this side!")