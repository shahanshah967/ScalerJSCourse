var colors = {
    primary: 'Blue',
    secondary: 'Red',
    tertiary: 'White',
}

//syntax

for (var color in colors) {
    console.log(color + '=>' + colors[color])
}

var colorsArray = ['yellow', 'Green', 'Orange', 'Pink']

for (var color in colorsArray) {
    console.log(color + ' => ' + colorsArray[color])
}