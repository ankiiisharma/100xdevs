const express = require("express");
const { userInfo } = require("os");
const app = express();
const port = 3000;

var users = [{
    name: "Ramukaka",
    kidneys: [{
        healthy: false
    }]
}];

app.get('/', function (req, res) {
    const Ramukakkidneys = users[0].kidneys;
    const nummberOfKidneys = Ramukakkidneys.length;
    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < Ramukakkidneys.length; i++) {
        if (Ramukakkidneys[i].healthy) {
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


app.use(express.json());

//post

app.post('/', function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "DONE!"
    })
})



//PUT

app.put('/', function (req, res) {
    for (let i = 0; i < users[0].kidneys.lenght; i++) {
        users[0].kidney[i].healthy = true;
    }
    res.json({

    });
})


//DELETE

function isThereAtleastOneUnhealthyKidney() {
    let atleastoneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastoneUnhealthyKidney = true;
        }
    }
    return atleastoneUnhealthyKidney;
}


app.delete('/', function (req, res) {

    if (isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({ msg: "done!" })
    }

    else {
        res.sendStatus(411).json({
            msg:"NO BAD KIDNEYS!!"
        });
    }
})


app.listen(port, () => {
    console.log(`App listening at ${port}`);
});  