//class

class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    //static function //
    static myType() {
        console.log("Animal");
    }

    // function
    saying() {
        console.log("hi there, you have choosen " + this.name + " and it speaks " + this.speaks );
    }
}

let dog = new Animal("Dog", 4, "bhow-bhow"); //create objects
let cat = new Animal("Cat", 4 , "meow meow");

cat.saying();
dog.saying();

console.log(Animal.myType());