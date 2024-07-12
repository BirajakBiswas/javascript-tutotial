const score =786
console.log(score)

const balance= new Number(122.69)//when we use new Number(100) then the ouput will displau the value alongside the data type as we specified it to be a number
console.log(balance)

//converting number to string


console.log(balance.toString().length)//this will 1st convert balance from Number data type to string data type and returns its length //toString is a method available in JS to convert Number to String
 
//note that in case of decimal point length also counts the decimal point 

console.log(balance.toFixed(1)) //toFixed is used in Ecom applications to determine how many decimals exist after the actual number here we gave 1 so it will have 1 decimal value

const otherNumber=99.44

console.log(otherNumber.toPrecision(3)) //not only decimal we can even get precise values for actual number too

const Hunderds=10000000
console.log(Hunderds.toLocaleString('en-IN')) //used to get in 10,00,000 format 'en-IN' specifeis the system to display in Indian format


// +++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++  

console.log(Math) //this opens the Math module

console.log(Math.abs(-22))//converts -ve to +ve
console.log(Math.round(4.8))
console.log(Math.ceil(4.8))
console.log(Math.floor(4.8))
console.log(Math.min(4,2,4,6,12,3))
console.log(Math.max(4.8,32,4,5,1,2,4))


console.log(Math.random()) //generates random number between 0 & 1
console.log((Math.random()*10) + 1)//this is done to get values more than 1 
console.log(Math.floor(Math.random()*10) + 1)//this is done to get values more than 1 and get whole numbers without decimal values Math.floor considers suppose 4.29222 as 4 


//now suppose we want the numbers within a desired range suppose 10 & 20

const min=10
const max=20

console.log(Math.floor(Math.random()*(max - min +1))) //this gives ouput as 3 , i.e not between 10 & 20 
console.log(Math.floor(Math.random()*(max - min +1))+min) //we just add min at last to ensure that the number is betwwneen 10 & 20