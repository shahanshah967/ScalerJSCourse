let number = [1, 2, 3, 4, 10]

let sum = number.reduce((funcAcc, item) => {
    let updatedSum = funcAcc + item
    return updatedSum

}, 0)

console.log(sum);

let product = number.reduce((funcAcc, item) => {
    let updatedProduct = funcAcc * item
    return updatedProduct
}, 1)

console.log(product)