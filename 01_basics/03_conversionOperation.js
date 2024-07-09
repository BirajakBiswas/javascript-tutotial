let score=33

console.log(typeof score)
console.log(typeof(score))

let valueInNumber=Number(score)//this Number()thing converts the variable into anumber data type despite it being some other form of data type
console.log(typeof valueInNumber)

//case2

let rank="2abc"

console.log(typeof rank)
console.log(typeof(rank))

let valueInNumber2=Number(rank) //this Number()thing converts the variable into anumber data type despite it being some other form of data type
console.log(typeof valueInNumber2) //despite rank being a string since inside "",as it is being converted into number in the above line of code it returns its type as number
console.log(valueInNumber2)  //generates NaN(Not a Number) since 2abc actually isnt fully a number but its getting converted to a number when we try to display it using console.log(), we get NaN, JavaScript is a bit chill 

//case3

let ranker=null // it will return 0 when we try to console.log() this

console.log(typeof ranker)
console.log(typeof(ranker))

let valueInNumber3=Number(ranker) //this Number()thing converts the variable into anumber data type despite it being some other form of data type
console.log(typeof valueInNumber3) //despite rank being a string since inside "",as it is being converted into number in the above line of code it returns its type as number
console.log(valueInNumber3)


//case 4

let x=undefined // it will return NaN when we try to console.log() this

console.log(typeof x)
console.log(typeof(x))

let valueInNumber4=Number(x) //this Number()thing converts the variable into anumber data type despite it being some other form of data type
console.log(typeof valueInNumber4) 
console.log(valueInNumber4)

//case5

let check=true// this is boolean for true=>1,false=>0 it will return 1 when we try to console.log() this

console.log(typeof check)
console.log(typeof(check))

let valueInNumber5=Number(check) //this Number()thing converts the variable into anumber data type despite it being some other form of data type
console.log(typeof valueInNumber5) 
console.log(valueInNumber5)

//case 6

let nameofstudent="Birajak"// it will return as string for type and when we try to convert this to a number , it does not happen and hence it returns NaN when we console.log(valueInNumber)as it actually is not converted to a number

console.log(typeof nameofstudent )
console.log(typeof(nameofstudent ))

let valueInNumber6=Number(nameofstudent) //this Number()thing converts the variable into anumber data type despite it being some other form of data type
console.log(typeof valueInNumber6) //despite rank being a string since inside "",as it is being converted into number in the above line of code it returns its type as number
console.log(valueInNumber6)







//short notes

//"33"=>33
//"33abc"=>NaN
// true=>1, False=>0


//checking how boolean works
let isLoggedIn = ""

let booleanisLoggedIn=Boolean(isLoggedIn)//Boolean is a predefined thing/data type here in JS
console.log(booleanisLoggedIn)//checking what output does it actually give  

//1=>true ; 0=>false
// "Birajak" i.e any string with actual value => true
//"" i.e empty string=>false

 let a=null

 let string_a=String(a) 
 console.log(string_a)//returns 32 in form of a string as we are converting it to a string
 console.log(typeof string_a)

// if we take a=32 we get 32 when we console.log() it and iots type is calso string
//for a="", i.e empty string then it remains empty when we try to display the value and the type remains string
//for a=undefined, we get undefined as output and type is string
//for a =null, null is displayed and type is string