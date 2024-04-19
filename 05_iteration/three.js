// forof loop

let myArray = [1,2,3,4,5]

for (const num of myArray) {
    // console.log(`numbers are ${num}`);
    
}

// let str = "Pramod"

// newStr = str.split("").reverse().join("")
// console.log(newStr);
// let myAra = ["Pramod","Kumar","Nishad"]
// newAra = myAra.reverse()
// console.log(newAra);


// ***********Map*********


const map = new Map()
map.set("In","India")
map.set("Fr","Fran")
map.set("UAE","Arab")

// console.log(map);

for (const[ keys,value] of map) {
    // console.log(`Key ${keys} and value of that is ${value}`);
}

// const data = {
//     "name":"Pramod",
//     "age":28,
//     "city":"Azamgarh"
// }

// for( const keys of data){
// console.log(keys);
// }                                    not allowed as on object because object is not iterable for of loop
