const userIsLoggedIn = true;

// if(2 != 3 ){
// console.log("Code is Executed")
// }
// if(2 === "2" ){
// console.log("Code is Executed")
// }
const temperature = 45;

// if( temperature > 50) {
// console.log("temperature is less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
//  < , > , >= , =< , != , === 

// const score = 200;

// if(score > 100) {
//     const power = "fly"
//     console.log(`user Power:${power}`);
// }

// console.log(`user Power:${power}`);

// const balence = 1000;
// if(balence > 500) console.log("test"),
// console.log("test2"),
// console.log("test3");                  not recomended


// const balence = 1000;

// if(balence < 500) {
//     console.log("Less than 500");
// } else if(balence < 750) {
//     console.log("Less than 750");
// }else if (balence < 950) {
//     console.log("Less than 950");
// }else {
//     console.log("Greater than or equal to  1000");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoggle = true;
const loggedInFromEmail = false;


if(userIsLoggedIn && debitCard && 2==2) {
    console.log("Login ");
}

if(loggedInFromGoggle || loggedInFromEmail) {
    console.log("Welcome to login");
}else {
    console.log("please login");
}
