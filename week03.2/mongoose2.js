const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://ankiiisharma:n8K8sAANnxwDZ1I2@userappnew.6pundvn.mongodb.net/")

const User = mongoose.model('Users',{name:String, email:String, password: String});

app.post("/signup", async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email:username});

    if(existingUser){
        return res.status(400).send("Username already Exists");
    }

    const user = new User({
        name : name,
        email : username,
        password : password
    });

    user.save()
      .then(() => {
        console.log("User saved successfully");
        mongoose.connection.close();
      })
      .catch(error => {
        console.error("Error saving user:", error);
        mongoose.connection.close();
      });
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
  

app.listen(3001, function(req,res){
    console.log("learning at 3001");
})