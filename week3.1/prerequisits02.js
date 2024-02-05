// const express = require("express");
// const app = express();

// let numberofrequests = 0;

// function CalculateRequests(req, res, next){
//     numberofrequests++;
//     console.log(numberofrequests);
//     next();
// }
 
// app.get("/health-checkup", CalculateRequests, function(req, res){

// });
// app.get("/health-checkup2", CalculateRequests, function(req, res){

// });

// app.listen(3002, () => {
//     console.log("App is listening at 3002")
// })


const express = require("express");
const zod = require("zod");
const app = express();
  
app.use(express.json());

const schema = zod.array(zod.number());

// ZOD SCHEMAS
// const schema = zod.objectUtil({
//     email: zod.string(),
//     password: z.string();
//     country: z.literal("IN").or(z.literal("US")),
//     kidneys: z.array(z.number())
// })



app.post("/checkups", function(req,res){ 
    const kidneys = req.body.kidneys;
    // const kidneyLength = kidneys.length;

    const response = schema.safeParse(kidneys)

    res.send({
        response
    })
    // res.send("you have " + kidneyLength + " kidneys");
});


// ///Gobal catches

// app.use(function(err, req, res, next){
//     res.json({
//         msg: "something is wrong!!"
//     }); 
// });


app.listen(3002, ()=>{
    console.log("app is listening at 3002");
})