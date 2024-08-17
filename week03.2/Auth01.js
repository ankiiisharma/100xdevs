const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = "12345678";

const app = express();
app.use(express.json());


const USERS = [
                {
                    username : "user1@email.com",
                    password : "0000",
                    name : "User 1"
                },
                {
                    username : "user2@email.com",
                    password : "1111",
                    name : "User 2"
                },
                {
                    username : "user3@email.com",
                    password : "2222",
                    name : "User 3"
                }
];

function CheckUser(username, password){
    let UserExists = false;
    for(let i=0;i<USERS.length;i++){
        if(USERS[i].username===username && USERS[i].password===password){
            UserExists = true;
        }
    }
    return UserExists;
}


app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!CheckUser(username,password)){
        res.status(403).json({
            msg: "invalid User!"
        });
    }
    var token = jwt.sign({username:username}, jwtpassword);
        res.json({
            token,
        });
});

app.listen(3000,()=>{
    console.log("Listing at 3000");
})