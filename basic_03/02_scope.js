// let a = 30;
// const b = 50;
var c = 500;

if (true){
    let a = 30;
    const b = 50;
    var c = 100;
    // console.log("inner",a)
    // console.log("inner",b)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const userName = "Pramod"

    function two() {
        const website = "chrome"
        console.log(userName)
        // console.log(website)
    }
    // console.log(website)
    two()
}

// one()


if(true) {
    const userName = "Pramod"
    if(userName === "Pramod"){
        const website = " Youtube"
        // console.log(userName + website)
    }
    // console.log(website)
}
// console.log(userName)

// **************Intersting***************
// console.log(addOneNumber(1))
function addOneNumber (num) {
    return num + 1
}
// console.log(addOneNumber(1))
// console.log(addTwoNumber(2))
const addTwoNumber = function(num) {
    return num + 2
}
// console.log(addTwoNumber(2))

