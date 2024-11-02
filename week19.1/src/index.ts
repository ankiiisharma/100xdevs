import express from "express"

const app = express();

let reqCount = 0;

app.use(
    function middleware(req, res, next) {
        reqCount++;
        console.log(reqCount);
        next();
    }
)

app.get("/", (req, res) => {
    res.send(`Hello World! ${reqCount}`);
});

app.get("/requests", (req, res) => {
    res.json({
        requests: reqCount
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});