for (let i = 0; i <= 10; i++) {
  const elemnet = i;
  if (elemnet == 5) {
    // console.log("5 is lucky Number");
  }
  // console.log(elemnet);
}

for (let i = 0; i <= 10; i++) {
//   console.log(`Outer loop ${i}`);
  for (let a = 0; a <= 10; a++) {
    // console.log(`Inner loop ${a} and inner loop ${i}`);
  }
}

// for( let i = 1; i <= 20 ; i++){
// // console.log(`The Tabel for ${i}`);
// for(let a = 1; a <= 10; a++)
// // console.log(i + " * " + a + " = " + i*a);
// }

// for( let i = 5; i <= 5; i++) {
// for(let a = 1; a<=10; a++ ){
// console.log(i + "*" + a + " = " + i*a );
// }
// }

for(let i = 1; i<=1; i++){
let row = " ";
for(let a = 1; a<=10; a++){
   row += "*"
  // console.log(row);
}
}

let myArray = ["flash","batman","superman"]
for(let i=0; i < myArray.length; i++){
  const elemnet = myArray[i];
  // console.log(elemnet);
}

for(let i = 1; i<=50; i++){
  if(i ==10){
console.log(i);
break
  }
  // console.log(`value is ${i}`);
  // console.log(`value is ${i+1}`);
}

// for(let i = 1; i<=10; i++){
//   let row = ""
//   for(let a = 1; a<=10; a++){
//     row += "+"
//     if(i <= 2){

//       console.log(row);
//     }
//   }
// }

// for(let i = 1; i<=10; i++){
//   if(i ==5){
//     console.log(`Detected 5`);
//     break
//   }
//   console.log(`Value for i ${i}`);
// }
for(let i = 1; i<=10; i++){
  if(i ==5){
    console.log(`Detected 5`);
    continue
  }
  console.log(`Value for i ${i}`);
}