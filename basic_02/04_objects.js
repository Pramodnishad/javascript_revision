// const tinderUser = new Object()         Singleton object

 const tinderUser = {}                  // Non-Singleton object


 tinderUser.id = "12345"
 tinderUser.userName = "Pramod"
 tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email:"test@gmail.com",
    fullName:{
        firstName:"Pramod",
        lastName:"Nishad"
    },
    isLoggedIn:true
}

// console.log(regularUser)
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.firstName)


const obj1 = {1: "a" , 2:"b"}
const obj2 = {3: "c" , 4:"d"}
// const obj3 = {obj1 , obj2}
// const obj3 = {...obj1 , ...obj2}

// const obj3 = Object.assign(obj1 , obj2)
const obj3 = Object.assign({},obj1 , obj2)
// console.log(obj3)


const user = [
    {
        id:1,
        name:"Pramod",
        
    },
    {
        id:2,
        name:"Pramod",
        
    },
    {
        id:3,
        name:"Pramod",
        
    },

   
]
// console.log(user[2].id)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))
// console.log(tinderUser.includes("isLoggedIn"))
console.log(regularUser.hasOwnProperty("isLoggedIn"))