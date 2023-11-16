function fnPattern(NumberOfRows){
    for(var i = 0;i<NumberOfRows;i++){
        var stringtoprint = "";
        for(var j=0;j<i+1;j++){
            stringtoprint = stringtoprint + '*';
        }
        console.log(stringtoprint);
    }
}

var NumberOfRows = 3;
var pattern = fnPattern(NumberOfRows);
