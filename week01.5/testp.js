// 
var x = new Promise(function(resolve){
    setTimeout(function(){ resolve("foo"); },1000)
});

function CallBack(){
    console.log(x);
}

console.log(x);
x.then(CallBack);  