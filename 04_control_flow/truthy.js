// Falsy Value 

// false , 0 , -0 , "", undefined , null , BigInt 0n ,NaN

//  Truthy Value

//  true, "0" , " " , "false" , [] , {} function(){}


// const userEmail = ""
// const userEmail = " "
// const userEmail = []


// if(userEmail){
//     console.log("Value is True");
// } else{
//     console.log("Value is false");
// }

// if(userEmail.length == 0){
//     console.log("Array exist");
// }

// const Obj = {}
// if(Object.keys(Obj).length == 0){
//     console.log("Object is empty");
// }




// Nullish Coalescing Operator (??): null undefined

let val1;
 val1 = 5 ?? 10
 val1 = null ?? 15
 val1 = undefined ?? 20
 val1 = null ?? 25 ?? 30
 val1 = undefined ?? 30 ?? 35

//  console.log(val1);



//  Terniary Operators

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("Price is less than 80") : console.log("Price is more than 80");