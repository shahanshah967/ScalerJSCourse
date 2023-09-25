// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const squareFunc = (n) => {
//     return n * n
// }
// let squaredArr = []

// for (let i = 0; i < arr.length; i++) {
//     squaredArr.push(squareFunc(arr[i]))
// }

// console.log(squaredArr);

// Map method
// const num = [1, 2, 3, 4, 5, 6, 7]

// const squaredNum = num.map((n) => {
//     return n * n
// })

// console.log(squaredNum)

const transactionsInRupee = [1000, 3000, 4000, 2000, -898, 3800, -4500]

const intrDollar = 80

// const transactionInDollar = transactionsInRupee.map((item) => {
//     return (item / intrDollar).toFixed(0)
// })

// console.log(transactionInDollar);

const transactionInDollar = transactionsInRupee.forEach((item) => {
    console.log((item / intrDollar).toFixed(0))
})

console.log(transactionInDollar)