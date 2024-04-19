const myObj = {
    "name":"Pramod",
    "age":28,
    "city":"Azamgarh"
}

for(const keys in myObj){
    // console.log(`keys are ${keys} - ${myObj[keys]}`);
}

const programming = ["js","cpp","py"]
for(const key in programming){
    // console.log(programming[key]);
}

const map = new Map()
map.set("In","India")
map.set("Fr","Fran")
map.set("UAE","Arab")

for (const key in map) {
//    console.log(key);                 Not iterable
}

