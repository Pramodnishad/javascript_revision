//  Singleton

// Object literals


const mySymbol = Symbol("key1")

const user = {
    name:"Pramod",
    "fullName": "Pramod Kumar Nishad",
    [mySymbol]:"key1",
    age:25,
    location:"Lucknow",
    email:"test@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

// console.log(user.email)
// console.log(user["email"])
// console.log(user.fullName)
// console.log(user["fullName"])
// console.log(typeof user[mySymbol])


// Object.freeze(user)
user.email = "pramod@test.com"

user.greeting = function  () {
console.log("Hello Pramod")
}
user.greeting2 = function  () {
console.log(`hello ${this.fullName}`)
}
console.log(user.greeting())
console.log(user.greeting2())
