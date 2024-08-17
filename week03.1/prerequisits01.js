const express = require("express");
const app = express();

app.get("/health-checkup", function(req, res){

    const username = req.headers.username;
    const password = req.headers.password;
    const KidneyId = req.headers.KidneyId;
   
    if(username !== "admin" || password !== "admin"){
        res.status(400).json ({
            msg: "WRONG INPUTS!"
        });
        return;
    }
    
    else if(KidneyId !== "1" && KidneyId !== "2"){
        res.status(400).json({
            msg: "WRONG KIDNEYS!"
        });
        return;
    }

    else{
        res.json({
            msg: "KIDNIES are FINE!"
        });
    }
});

app.listen(3050 , ()=> {
    console.log(`App is running at 3050`);
});