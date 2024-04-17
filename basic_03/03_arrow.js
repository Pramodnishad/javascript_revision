const user = {
    userName: "hitesh",
    price:99,

    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website`)
        // console.log(this)
    }

}
// console.log(this)
// user.welcomeMessage()
// user.userName = "Pramod"
// user.welcomeMessage()
// console.log(this)


// const chai = function() {
//     let userName = "Pramod"
//     console.log(this.userName)
// }
// chai()

const chai = () => {
    let username = "Pramod"
    // console.log(this.username)
    // console.log(username)
}
// chai()


// const addTwoNumber = (num1, num2) =>{
//     return num1 + num2
// }
// const addTwoNumber = (num1, num2) => num1 + num2
// const addTwoNumber = (num1, num2) => (num1 + num2)
const addTwoNumber = (num1, num2) => ({userName: "Pramod"})

console.log(addTwoNumber(3,5))