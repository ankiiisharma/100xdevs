// if arr is an array  of numbers, return true else false.

//ZOD : let us create a schema with which we can validate our INPUTS.


const zod = require("zod");

function validate(arr) {
    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr);
    console.log(response.success);
}

validate(["11", 22, 33]); //false
validate([11, 22, 33]); //true
