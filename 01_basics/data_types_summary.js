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


//******************************************************************

//Note : All primitive data types i.e String, Number, Boolearn, null, undefined, Symbol(used for unique ids), BigInt get stored in Stacks and note that the refence is not to the actual entity but its copy p.s  look into the video for easier understanding
//Non primitive data types i.e Objects,arrays and functions get stored in heaps and their refernces are to actual entities not copies hence changing  a single entity value affects all the varaiables its referred to

let myName="Birajak"//string i.e primitive data type gets stored in stack

let anotherName=myName//now myName and anotherName  are being stored in stack and they are linked to each other but anotherName is linked to myName's copy not the actual thing so changes in it  will not affect both , well we will see now
anotherName="tatan"

console.log(myName)//gives output as Birajak
console.log(anotherName)//gives output as tatan

//this happens bcoz the value of  the original variable myName remains same, when we are linking myName with anothername and making changes we are not changing the original value of myName, a duplicate of myName is being created and is being linked to anothername thus the original value remains same
//note this happens in case of primitive data types involving the use of stack



//non primitive data type example

//objects are a non primitve data type and use heaps instead, here the data is getting linked to the actual entity not its copy hence change in 1 value results in change of all referred variabes

let userOne={
    email:"user@gg.com",
    upi : "user@sbi"
}

let userTwo = userOne

userTwo.email="hahaboi@gmial.com"//this is the format to access entity of an object

console.log(userOne.email) //gives hahaboi@gmial.com
console.log(userTwo.email)//gives hahaboi@gmial.com
//here objects are a non primitive data type and they use heaps and their refernce are to actual entites not their copies hence change occurs to all the linked or referred varibles

