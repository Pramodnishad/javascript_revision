//  Date

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.getMonth())
// console.log(typeof myDate)

// let myCreatedData = new Date(2024, 0, 26)
// console.log(myCreatedData.toLocaleDateString())
let myCreatedData = new Date("10-4-2024")
// console.log(myCreatedData.toLocaleString())

let timeStamp = Date.now()

// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())

newDate.toLocaleString(
    'default',
    {
        weekday:"long"
    }
)
// console.log(newDate)