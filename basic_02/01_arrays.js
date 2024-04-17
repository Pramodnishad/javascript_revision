//  Array

const myArray = [1,2,3,4,5]
const myArray1 = ["Pramod" , "Ram" , "jay"]
const myArray2 = new Array(1,2,3,4)

// console.log(myArray.length)
// console.log(myArray2)
myArray.push(6,7,9,10)
// console.log(myArray)
myArray.pop()
// console.log(myArray)

myArray.unshift("Pramod")
// console.log(myArray)
myArray.shift()
// console.log(myArray)

// console.log(myArray.includes(5))

// console.log(myArray.indexOf(9))

const newArray = myArray.join()
// console.log( typeof newArray)


// slice and splice

const sliceArray = [1,2,3,4,5]
console.log("A",sliceArray)

const mynArray = sliceArray.slice(1,3)
console.log(mynArray)
console.log("B",sliceArray)

const mynArray1 = sliceArray.splice(1,3)
console.log("C",sliceArray)
console.log(mynArray1)