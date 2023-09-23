var scores = [60, 90, 80, 75]

//syntax

// for (var score of scores) {
//     console.log(score)
// }

//method - entries()

var colors = ['red', 'white', 'blue']

for (var [index, color] of colors.entries()) {
    console.log(index + ' -> ' + color)
}

var str = 'Scaler'

for (var c of str) {
    console.log(c)
}