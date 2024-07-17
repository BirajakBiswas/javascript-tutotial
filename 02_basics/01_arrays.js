//arrays
//arrays are object data type written within []

//documentation on Arrays:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//array supports strings,numbers,boolean etc

const myArr=[0,2,3,4,5,6,7,8,62]
const myCars=["Zen","Alto"]

const  myArr2=new Array(1,2,4,12)//other way to we=rite array by directly using Array() from predefined dict
console.log(myArr2[1])//[1] is the index number of the element we want to console.log() 


//array methods

myArr2.push(2)//will push the element at last
myArr2.push(42)//will push the element at last

myArr2.pop()//pops out the last element which here is 42

console.log(myArr2)


myArr.unshift(22)//will introduce the given value at the 1st position and therby results in shifting of all other elements
myArr.shift()//removes the 1st element,consider this as pop but for the 1st element of the array


console.log(myArr.includes(4))
console.log(myArr.includes(221))//retuns true or false as an answer  
console.log(myArr.indexOf(3))//returns index value 2
console.log(myArr.indexOf(26))//returns index value -1, this suggesting that this value doesnt exist in the array

//join function is used to convert array of elements to a string

const newArr=myArr.join()//this join() command converts myArr to a string
console.log(newArr)//displays array of elements in form of string
console.log(typeof newArr)


//slicing and splicing in arrays

//const myArr=[0,2,3,4,5,6,7,8,62]

console.log("Default Array ",myArr)//note myArr is the reference array for both slicing and splicing examples

const myNewArray1=myArr.slice(1,5)//here 1,5 is the index number of the elements we want to get sliced 
console.log("Sliced portion is",myNewArray1)//note that the element at index value 5 does not get sliced only 1,2,3,4 indexed elements get sliced


console.log("Array after Slicing ",myArr )//original array remains same does not get altered

const myNewArray2=myArr.splice(1,5)//in case of splicing all elements belonging to index values 1,2,3,4,5 get spliced 
console.log("Spliced portion is",myNewArray2)

console.log("Array after splicing",myArr )//Notice how the Original Array i.e myArr gets altered in case of splcing, the elements which do not get spliced remain in the original Array but the spliced elements are not displayed they get seperated

//DIFFERNCE BETWEEN SLICING AND SPLICING
//Slicing does not alter the original refernce array
//splicing on the other hand seperates out spliced elements thus altering the original array




