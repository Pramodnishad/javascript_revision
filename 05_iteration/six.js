// const coding = ["js","ruby","java","py"]


// const values = coding.forEach((item)=>{
// console.log(item);
// return item
// })
// console.log(values);


//  So conclusion is that foreach do not return anything , 
// if we want to store in any variable then it will be a problem


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((nums)=> nums>4 
// )
// const newNums = myNums.filter((nums)=> {
//    return nums > 4
// } 
// )
// const newNums = []
// myNums.forEach((nums)=>{
// if(nums > 4){
// newNums.push(nums)
// }
// })
// console.log(newNums);
const  books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBook = books.filter( (item)=>item.genre === "Non-Fiction")
//   const userBook = books.filter((item)=>{
//    item.genre === "History"
//    return item
//    console.log(userBook);
//   })
const userBook = books.filter( (item) =>{
  return  item.publish >=1995 && item.genre === "History"
})
console.log(userBook);
  