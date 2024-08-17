const express = require('express');
const app = express();

app.use(express.json());


app.post("/sum",(req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a+b;
    res.send(sum.toString());
});
  

app.listen(8080);