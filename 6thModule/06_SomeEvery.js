//Some method

const transactionsInRupee = [-1000, -3000, -4000, -2000, -898, -3800, -4500]

let result = transactionsInRupee.some((n) => {
    return n > 0
})

console.log(result)


//Every

let everyResult = transactionsInRupee.every((n) => {
    return n < 0
})

console.log(everyResult);