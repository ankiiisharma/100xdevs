const dog = {
    name: "Doggie",
    lesgs: 4,
    speak: "boh boh",
};
const cat = {
    name: "Cattie",
    lesgs: 4,
    speak: "meow meow",
};


function printStr(animal){
    console.log("animal " + animal["name"] +" " +"Speaks " + animal["speak"]);
}

printStr(dog);
printStr(cat);