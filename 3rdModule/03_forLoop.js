var a = 'Hello World'

// The for loop

// for (var i = 0; i < 10; i++) {
//     console.log(a)
// }

// you have an array and have to square each element

var num = [2, 3, 4, 5, 6, 7, 8]
var squareArr = []
for (var i = 0; i < num.length; i++) {
    squareArr.push(num[i] * num[i])
}

console.log(squareArr)
