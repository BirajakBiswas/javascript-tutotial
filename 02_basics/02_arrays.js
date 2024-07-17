const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//retuns false 
console.log(Array.from("Hitesh"))//creates array using each individual letter from Hitesh
console.log(Array.from({name: "hitesh"})) // interesting case , remember that we need to specify whether we want to create an arry of keys or values in case of objects, since we did not specify which one to make array of, it will return empty array []


//to create arrrays from set of differnt elemnents
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));