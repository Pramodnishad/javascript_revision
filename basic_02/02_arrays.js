const marvel_heros = ["thor","IronMan", "SpiderMan"]

const dc_horos = ["superman","flash","batman"]
// marvel_heros.push(dc_horos)
// console.log(marvel_heros)

// const all_heros = marvel_heros.concat(dc_horos)
// console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_horos]
// console.log(all_new_heros)


const another_array = [1,2,3,[4,5,5],7,[6,7,[4,5]]]

const usable_array = another_array.flat(Infinity)

// console.log(usable_array)

// console.log(Array.isArray("Pramod"))

// console.log(Array.from("Pramod"))

// console.log(Array.from({name:"Pramod"})) // Interesting 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 ,score3))

