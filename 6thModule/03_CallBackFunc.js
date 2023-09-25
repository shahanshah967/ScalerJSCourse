// function printFirstName(firstName, cb) {
//     console.log(firstName);
//     cb('rogers')
// }


// function printLastName(lastName) {
//     console.log(lastName);
// }

// printFirstName('Ansari', printLastName)  // callBack

const isEven = (n) => {
    return n % 2 == 0
}

let printResult = (evenFn, num) => {
    const isNumEven = evenFn(num)
    console.log(`The number ${num} is even ${isNumEven}`);
}

printResult(isEven, 163)