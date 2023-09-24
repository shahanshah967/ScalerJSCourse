let arr = ['Hi', 'I', , 'am', 'Ansari',]


// let [a, b, c, d, e] = arr

// console.log(c);

//Destructuring object

let myObj = {
    name: 'Black Adam',
    age: 24,
    gender: 'MF',
    address: {
        country: 'England',
        city: 'London'
    }
}

let { name: n, age: a, gender: g, address: { country, city } } = myObj
console.log(n)
console.log(a)
console.log(g)
// console.log(address);
console.log(country);
console.log(city);