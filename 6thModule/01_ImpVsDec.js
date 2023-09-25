//Imperative Way  of writing a code

// const a = 4

// let isEven;

// const aSquare = a * a

// if (aSquare % 2 == 0) {
//     isEven = true
// }
// else {
//     isEven = false
// }

// console.log(isEven)

//Declarative way of writing code

const checkForSquare = (x) => (x * x % 2 === 0 ? true : false)
console.log(checkForSquare(4))