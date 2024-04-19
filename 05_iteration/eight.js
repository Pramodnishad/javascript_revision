const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(acc , curVal){
//     console.log(`acc: ${acc} curVal: ${curVal}`);
// return acc + curVal
// },0)

const myTotal = myNums.reduce( (acc, curVal) =>acc + curVal ,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Java Course",
        price: 4999
    },
    {
        itemName: "React Native Course",
        price: 9999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price ,0)
console.log(priceToPay);