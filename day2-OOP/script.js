console.log("Connected yo.");

class Animal {
    constructor(name,age,diet,type) {
    this.name = name;
    this.age = age;
    this.diet= diet;
    this.type=type;
    }
    greeting(){
        console.log("hello")
    }
    greeting2(){
        console.log("hello")
    }
}

const Skittles = new Animal("Skittles", 2, "fish", 'cat');

const roger = new Animal("Roger", 5, "bones","dog");
console.log(Skittles.greeting());
const cat ={
    name:"john", 
    lastName: "snowden"

}

// const cat={name:"john", lastName: "snowden"}
// const cat={name:"john", lastName: "snowden"}
// const cat={name:"john", lastName: "snowden"}

console.log(cat)

class Vehicle {
    constructor(model,manufacturer, yearOfManufaturer, colour) {
        this.model= model;
        this.manufacturey= manufacturer;
        this.year =yearOfManufaturer;
        this.colour= colour;   
        this.whell=this.whell || 4; // it is a constant is not in the contructor
    }  
    colourPrint(){
        console.log("print as green")
        return `The colour is ${this.colour}`;
    }
}

const myCar = new Vehicle("Ranger","Ford",1955, "blue")
const elonsCar = new Vehicle("Modelx","Tesla",2024,"Black");


console.log(myCar,elonsCar.colourPrint());

//Fuller Example

class City {
    constructor(name,traveled){
        this.name = name;
        this.traveled = traveled;
    }

    travel(){
        this.traveled = true;
    }
}

class CoastalCity extends City{
    constructor(name,traveled,coastLineLength){
        //this.name = name;
        //this.traveled = traveled;
        //intead use twice I can use "super" Keyword
        super(name,traveled);
        this.coastLineLength = coastLineLength;
    }
visitBeach(){
    console.log(`The coast line is ${this.coastLineLength}km long.`)

    // I add this method here just ass example, for modification, but I can directly use in the new objet.
        travel()
        this.traveled=true;
        console.log("The coast line is beautifull");
    }

}

//Constructor invocation

const tau = new CoastalCity("Tauranga",false,20);
// we can use the Method that come from Parent Class "travel" because is an extension ( I can replace to adding it in Chill Class as example cover.)
tau.travel() // prints " the coast line is beautiful"
console.log(tau);