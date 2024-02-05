const express = require("express");
const app = express();



app.get("health-checkup", userMiddleware, kidneyMiddleware, function(req,res){
    
    
})  