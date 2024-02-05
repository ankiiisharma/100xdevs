const express = require("express");
const z = require("zod");

const app = express();

app.use(express.json());

const kidneyschema = z.array(z.number());

app.post("/checkups", function(req, res) {
    const kidneyid = req.body.kidneyid;

    const validations = kidneyschema.safeParse(kidneyid);

    if (!validations.success) {
        return res.status(400).send(validations.error);
    }

    // Respond with the number of kidneys when validation is successful
    res.status(200).send(`You have ${kidneyid.length} kidneys`);
});

// Default route for 404 Not Found
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(3005, () => {
    console.log("App is listening at http://localhost:3005");
});
