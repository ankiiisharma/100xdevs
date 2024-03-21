const mongoose = require("mongoose");



// mongodb+srv://user_01:admin@testcluster.ocbnhd1.mongodb.net/

mongoose.connect("mongodb+srv://user_01:admin@testcluster.ocbnhd1.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todo',todoSchema);