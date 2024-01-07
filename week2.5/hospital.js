const express = require("express");
const app = express();

var users = [{
    name : "Ramukaka",
    kidneys : [{
        healthy : false
    }]
}];

app.get('/', function(req, res){
    const Ramukakkidneys = users[0].kidneys;3
    const nummberOfKidneys = Ramukakkidneys.length;
    const numberOfHealthyKidneys = 0;

    for(let i=0;i<Ramukakkidneys.length;i++){
        if(Ramukakkidneys[i].healthy){
            numberOfHealthyKidneys += 1;
        }
    }
    const numberOfUnHealthyKidneys = nummberOfKidneys - numberOfHealthyKidneys;

    res.json({
        nummberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})

app.listen(3000);   