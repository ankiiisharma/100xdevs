// function Fibonacci(n,first,second){
//     console.log(first);
//     console.log(second);
//     var nextterm = first + second;
//     con
    
//     while()

// }

// var n = 5;
// var first = 0;
// var second = 1;
// var ans = Fibonacci(n,first,second);
// console.log(ans);

// // var n = 10;
// const n = ParseInt(prompt('Enter the last number:'));
// var n1 = 0;
// var n2 = 1;

// console.log(n1);
// console.log(n2);
// var nextterm = n1+n2;

// while(nextterm<n){
//     console.log(nextterm);
//     n1 = n2;
//     n2 = nextterm;
//     nextterm = n1 + n2;
// }


function FibonacciSequence(n,n1,n2){
    var nextterm;
    console.log(n1);
    console.log(n2);

    nextterm = n1 + n2;
    while(nextterm<=n){
        console.log(nextterm);

        n1 = n2;
        n2 = nextterm;
        nextterm = n1 + n2;
    }
}


var n = 10;
var n1 = 0;
var n2 = 1;

var ans = FibonacciSequence(n,n1,n2);
console.log(ans);