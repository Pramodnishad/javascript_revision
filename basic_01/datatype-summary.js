//******************* Primitive*******************/

//  These are call by value datatypes
//  7 Types of Primitive data type

//  String , Number , Boolean , Null ,  Undefined , Symbol, BigInt

const score = 100
const scoreValue = 100.2
const userLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol("123")

// console.log(id === anotherId)

const bigNumber = 3456978915n



//  Reference (Non Primitive)

// Array , Objects , Function

const heroes = ["shaktiman", "Doga", "Naagraj"]

let obj = {
    name: "Pramod",
    age: 25
}

const myDetail = function(){
    console.log("Hello World")
}

// console.log(typeof bigNumber)



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//  Memory Allocation

//  Stack (Primitive)   
//  Heap  (Non primitive)


let myYoutubeName = "pramodyoutube.com"

let anotherYoutubeName = myYoutubeName

anotherYoutubeName = "xyzyoutube.com"

// console.log(myYoutubeName)
// console.log(anotherYoutubeName)


let userOne = {
    name: "Pramod",
    age: 25
}

let userTwo = userOne

userTwo.name = "nishad"

console.log(userOne)
console.log(userTwo)