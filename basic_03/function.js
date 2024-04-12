function myName () {
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("M")
    console.log("O")
    console.log("D")
}
// myName()

function addTwoNumber (num1, num2) {
    // console.log(num1 + num2)

//    const  result = num1 + num2;
//     return result
return num1 + num2
}

// addTwoNumber(5,5)
// addTwoNumber(5,"5")

const result = addTwoNumber(3,7)

// console.log("result:",result)


// function loginUserMessage (userName ) {
function loginUserMessage (userName = "pramod" ) {
    // if(userName === undefined){
    if(!userName){
console.log("Please enter a username")
return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Pramod"))
// console.log(loginUserMessage())


// function priceAddToCart (...num1) {
function priceAddToCart (value1 , value2, ...num1) {
    return num1
}

// console.log(priceAddToCart(100,200,500))

const user = {
    username: "Pramod",
    price: 599
}

// function handleUser (anyObject) {
// console.log( `The username is  ${anyObject.username} and price of product is ${anyObject.price}`)
// }

// handleUser(user)
// handleUser({
//     username: "Pramod",
//     price: 599
// })


const newArray = [200,300,400]

function returnSecondValue (getArray) {
    return getArray[1]
}

console.log(returnSecondValue(newArray))