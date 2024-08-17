interface User{
    firstName: string,
    lastName: string,
    age: number,
    email ?: string
}

import { string } from "zod";

function isLegal(user:User){
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}


isLegal({
    firstName: "string",
    lastName : "string",
    age: 20,
    // email: "a;fkjdk"
})

