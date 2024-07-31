// singleton (only when object created using contructor)
// object.create=>constructor method will be discussed later
// object literals

// creating object

// symbols

const mySym=Symbol("key1")

const JsUSer={
    name:"Birajak",
    "full name":"Birajak Biswas",
    [mySym]:"mykey1",
    RollNo:22,
    age:21,
    email:"birajkbiswas@frickmail"

}

console.log(JsUSer)
//how to access specific key values from objects
console.log(JsUSer.email)//this method gives the result but not preferable use the 2nd way
console.log(JsUSer["email"])//dont forget "" while using the name of the key in this formaonsole.log(JsUSer["age"])//dont forget "" while using the name of the key in this format
console.log(typeof JsUSer["name"] )
console.log(JsUSer["full name"])
console.log(typeof JsUSer.mySym)//although mySym is a Symbol as assigned above using this method returns typeof mySym as String which is incorrect
console.log(typeof JsUSer["mySym"])//now also returns string data type
console.log(typeof JsUSer[mySym])//now also returns string data type

//now how to make the data type as Symbol?
//Simply while writing mySYm in object write it inside [] i.e [mySym]


//How to change values in Object
JsUSer.email="birajak@frickingmail.com"
console.log(JsUSer["email"])
//Object.freeze(JsUSer)//used to freeze key value pairs i.e now values cannot be changed

JsUSer.email="birajak@f1.com"
console.log(JsUSer["email"])//displays the above email since it has been freezed
console.log(JsUSer)//we can see in terminal that mySym is displayed as Symbolthus we have successfuly created a symbol and used it as a key in an object

//How is Symbol used as key in object?
//Just define a value as Symbol then while using it in object as key write its name inside []


JsUSer.greeting=function(){
    console.log("hello Js user");//this is the thing which will be displaed when we console.log greeting function below

} 

JsUSer.greetingTwo=function(){
    console.log(`hello Js user, ${this.name}`);//we are refering a particular key from the object, this command helps in linking the rquired key from the object
//console.log(`hello Js user, ${this.RollNo}`) are more ways to do the same
    console.log(`hello Js user, ${this["email"]}`) //are more ways to do the same


}

console.log(JsUSer.greeting())//gives hello Js user
console.log(JsUSer.greetingTwo())//gives hello Js user,Birajak
console.log(JsUSer.greetingTwo())//gives hello Js user,Birajak

