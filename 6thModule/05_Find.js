const transactionsInRupee = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let firstWithdrawal = transactionsInRupee.find((n) => {
    return n < 0
})
console.log(`first withdrawal => `, firstWithdrawal);

//findIndex

let firstWithdrawalIndex = transactionsInRupee.findIndex((n) => {
    return n < 0
})

console.log(`first withdrawal index => `, firstWithdrawalIndex)
