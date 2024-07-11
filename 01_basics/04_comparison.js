// for JavaScript == & => or <= are treated differntly 
console.log("22">2)//true
console.log("2"==2)//true
console.log("33">=33)//true
console.log(24<="23")//false all strings are getting converted to numbers for comparison
console.log(24<="25")//true


console.log(null>0)//false
console.log(null==0) //false
console.log(null>=0)//true since >= converts null to 0
//Note: For  Js, equality check == and comparison >,<,>=,<= work differntly
//Comparisons(<= or >=) convert null to a number treating it as 0. Thats why  for 3rd case i.e console.log(null>=0) is true and 1st case i.e console.log(null>0) is false

///=== strict operator , this not only compares values but also their data types
console.log("3"===3)//returns false since data types are differnt