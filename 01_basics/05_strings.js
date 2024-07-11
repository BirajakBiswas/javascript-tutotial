const name="Birajak"
const bodycount= 3

// console.log(name + bodycount + " yes boi") //THIS method of writing a string is avoided

// new way to write string

console.log(`Hello my name is ${name} and my bodycount is less than ${bodycount}`)

//ways to write string
const gameName= new String('fc24 iis trash')

console.log(gameName[7])//displays the text as per the provided index
console.log(gameName.__proto__)//it displays {} i.e it is specifying the data type of a string as an object
console.log(gameName.length)

console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))//used to find what character lies at the specified index for the variable
console.log(gameName.indexOf('i'))//it gives the index value of the 1st 'i' it encounters
 
//substring

const newString= gameName.substring(0,7)//this will display the characters fromm index values 0 to n-1 where n here is 7 thus characters from index values 0 to 6
const newString1= gameName.substring(7,0)//this will display the characters fromm index values 0 to n-1 where n here is 7 thus characters from index values 0 to 6
console.log(newString)
console.log(newString1)//both display the same thing hence for substring WE CAN SAY that  gameName.substring(x,y) and gameName.substring(y,x) where x and y are our desired index ranges will yield the same result

const newString2= gameName.substring(10,-8)//when we give -x at starting its nothing, ultimately values are taken from 0 only
console.log(newString2)//it displays fc24 iis t from String('fc24 iis trash'), i.e it is ommitting itself and displaying all the values in its left side , basically for easier understanding just consider (10,-8) as (-8,10), they are the same thing only


//gameName= new String('fc24 iis trash')
const anotherString1=gameName.slice(-10,7)//so basically in slicing negative values are taken from right to left side and if we have in (-x,y) fromat then, 1stly we will see from begin from right side and then for y value we will do from left to right side and the common part remaining upto y-1 part is displayed
console.log(anotherString1) //displays _ii ,underscore represents a single space



const gameName1= new String('birajak is')

//slicing in strings
const anotherString2=gameName1.slice(-10,7)
console.log(anotherString2) 

//some more operations using string

const newString3="               niffa  is_  "
console.log(newString3)
console.log(newString3.trim())

const url="www.mahagandu.com/22"

console.log(url.replace('22','lessgonijja'))//replacing desired character

console.log(gameName.split(' '))//note that gameName is 'fc24 iis trash' and here i have asked Javascript to split gameName on basis of ' ' i.e the spaces between the characters
//if we try to split the string on basis of a character that doesnt exist in the string for e.g using & as a means to split gameName but '&' doesnt exist in the string so the output does not split just returns the original string


