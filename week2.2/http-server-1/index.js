const express = require("express");
const app = express()
const port = 3000

app.get("/xyz", function(req, res) {
    res.json({
        name: "Ankit",
        age: 21
    })
})

app.get('/', ( req, res) =>{.

    res.send( '<b> Hello There! <b>' )
    
})

// app.listen(port, function(){
//     console.log(`Exampe is listening on ${port}`)
// }) 


app.listen(port, () => {
    console.log(`Exampe app islisteing at port ${port}`)
})
