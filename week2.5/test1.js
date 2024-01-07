const express = require("express");
const app = express();
port = 3000;

function Sum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}

app.get('/', function (req, res) {
    const n = req.query.n;
    const sum = Sum(n);
    res.send(`Hello SIRRR, ANSWER IS : ${sum}`);
})

app.listen(port, () => {
    console.log(`App listeining at ${port}`);
})