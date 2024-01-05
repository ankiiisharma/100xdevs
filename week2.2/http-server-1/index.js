const express = require("express");
const bodyParser = require("body-parser")

const app = express()
const port = 3000

app.use(bodyParser.json());


app.get('/', ( req, res) => {
    res.send( 'Hello World!' )
})
app.get('/about', ( req, res) => {
    res.send( 'About us' )
})

app.post('/', ( req, res) => {
    console.log(req.body);
    res.send( 'Hello World!' )
})

app.listen(port, () => {
    console.log(`Exampe app islisteing at port ${port}`)
})
 