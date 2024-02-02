const express = require("express");
const app = express();

app.get("/healthcheckup", function(req,res){
    
    const kidneyid = req.query.kidneyid;
    const password = req.query.password;
    const username = req.query.username;

    if(username !== "admin" && password !== "12345"){
        res.status(403).json({
            msg : "Invalid Credientials",
        });
        return;
    }

    if(kidneyid!== "1" && kidneyid !== "2"){
        res.status(411).json({
            msg: "Wrong inputs",
        });
        return;
    }

    res.send("You are healthy");
});

app.listen(3001, () => {
    console.log("App is running at 3001")
});
