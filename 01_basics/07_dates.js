let myDate= new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())//every method gives the date in a differnt foramt

console.log(myDate.toLocaleString())
console.log(typeof myDate)//Date is an object data type

let myCreatedDate=new Date(2024,0,23)//note for JS, month starts from 0 ie 0 is considered as January, note this is the case when we use a single digit to display month basically at that time JS considers it as an ARRAY , for normally writing date in YY-MM-DD format we will refer the 1st month as 01 only
console.log(myCreatedDate.toLocaleString())

let myCreatedDate1=new Date("2024-07-28")//remember to use "" for writing date
console.log(myCreatedDate1.toLocaleString())//note that for some reason System was considering only YY-MM-DD format,not the indian DD-MM-YY format

//Timestamps are useful when comparing time values with very less variations like in case of polls as in example fastest finger fast
let myTimeStamp=Date.now()
console.log(myTimeStamp)


//myCreatedDate1=new Date("2024-07-28")
console.log(myCreatedDate1.getTime())//helps get Time value in miliseconds

//how to convert minisecond to second
console.log(Math.floor(Date.now()/1000))//Math.floor() is used to get an exact value

 let newDate=new Date()
 console.log(newDate)
 console.log(newDate.getMonth())
 console.log(newDate.getDay())

 newDate.toLocaleString('default',{
    weekday:"long"//THIS is done for customization use ctrl+space to select the type of object and its desired format you want

 })