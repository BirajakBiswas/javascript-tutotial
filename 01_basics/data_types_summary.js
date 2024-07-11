//  Primitive data type(call by value type)

//  7 types : String, Number, Boolearn, null, undefined, Symbol(used for unique ids), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;//automatically assigns undefined

const id = Symbol('123')
const anotherId = Symbol('123')//id and anotherId although have same values 123 since we have used Symbol they are treated differntly

console.log(id === anotherId);//returns false since differnt data types

const bigNumber = 3456543576654356754n// (use of n at last specifies that its a bigint)



// Non primitive data types(call by refernce)

// Array, Objects, Functions


//arrays
const heros = ["shaktiman", "naagraj", "doga"];//arrays they involve use of []


//objects  involve use of {}

let myObj = {                     //here this is an example of an object and myObj is the variable name
    name: "kangal",               //objects are in form of key value pairs  
    age: 22,
}


//functions 

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof id) //symbol
console.log(typeof anotherId)//symbol
console.log(typeof score)//number
console.log(typeof scoreValue)//number
console.log(typeof isLoggedIn)//boolean
console.log(typeof outsideTemp)//object since it is null
console.log(typeof userEmail)//undefined
console.log(typeof bigNumber)//bifInt
console.log(typeof heros)//object
console.log(typeof myObj)//objecet
console.log(typeof myFunction)//function
console.log(myFunction)

// https://262.ecma-international.org/5.1/#sec-11.4.3 
// this is a link to a material involving all this stuff in details