// ******************************Conversion******************************************

// let score = 50;
// let score = null;
let score = undefined;
// let score = "50abc";

console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" =>33;
// "33abc" =>NaN;
// true =>1; false =>0


let isLoggedIn = 0;

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)

let someNumber = 100;
let stringNumber = String(someNumber)
console.log(typeof stringNumber)




// ******************************Operations******************************************

let value = 3;

let nagativeValue = -value

// console.log(nagativeValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)
let str1 = "hello"
let str2 = "Pramod"
let str3 = str1 + str2

// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log(1 + 2 +  "3")
// console.log("2" + 2 + 3)


console.log(+true)

num1 = num2 = num3 = 2+2

let gameCounter = 3;
++gameCounter
console.log(gameCounter)