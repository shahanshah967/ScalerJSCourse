let arr = [
    { name: "A", age: 14, gender: "M" },
    { name: "B", age: 34, gender: "M" },
    { name: "C", age: 24, gender: "F" },
    { name: "D", age: 44, gender: "F" },
    { name: "E", age: 44, gender: "M" },
    { name: "F", age: 28, gender: "M" },
    { name: "G", age: 36, gender: "F" },
    { name: "H", age: 37, gender: "M" },
]

let males = arr.filter((obj) => {
    return obj.gender == "M"
}).map((item) => {

    return item.name
})

// console.log(males);

const transactionsInRupee = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let totalCalc = transactionsInRupee.filter((item) => {
    return item > 0
}).reduce((item, initial) => {
    let initialAmount = item + initial
    return initialAmount
}, 0)

console.log(totalCalc);

