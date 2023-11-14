function SumAll(StartIndex,endIndex){
    var sum = 0;
    for(var i=StartIndex;i<endIndex;i++){
        sum += i;
    }
    return sum;
}


var StartIndex = prompt('Enter Start');
var endIndex = 100;

var sum = SumAll(StartIndex,endIndex);
console.log(sum);
