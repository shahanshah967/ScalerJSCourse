let number = [1, 2, 3, 5, 15, 97, 98, 33, 45, 90, 46,]

//Traditional Method
// const evenNumArr = []
// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 !== 0) {
//         evenNumArr.push(number[i])
//     }
// }
// console.log(evenNumArr)
const evenNumber = number.filter((n) => {
    return n % 2 !== 0
})

// console.log(evenNumber);
const transactionsInRupee = [1000, 3000, 4000, 2000, -898, 3800, -4500]

const positiveTransaction = transactionsInRupee.filter((item) => {
    return item > 0
})
console.log(positiveTransaction);