// function SumFromFile(n){
// var sum = 0;
// for(var i = 0;i<n;i++){
//     sum += i;
// }

// console.log(sum);

// }


var fs = require('fs');



fs.readFile('test.txt', function (err, data) {
    if (err) 
        throw err;

    else{
        n = data;
    }
});

    var sum = 0;
    for(var i = 0;i<100;i++){
        sum += i;
    }
    console.log(sum);
    

    
