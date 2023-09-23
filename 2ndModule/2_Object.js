// In Js object are key value Pair

var person = {
    firstName: 'Adam',
    secondName: 'Smith',
    age: 25,
    ownCar: false
}

// console.log(person)
//dot notation

// console.log(person.age)

//bracket notation

// console.log(person['firstName'])

var cap = {
    firstName: 'steve',
    lastName: 'Rogers'
    ,
    age: '102',
    friends: ['Bucky Barnes', 'Bruce Banner', 'TOny Stark'],
    isAvenger: true,
    address: {
        state: 'New York',
        city: {
            name: 'brooklyn',
            pincode: '123456',

        }

    }
}

console.group(cap.friends[0])
console.log(cap.address.city.name)

cap.isAvenger = false

console.log(cap.isAvenger)
cap.movies = ['age of ultron', 'civil war', 'first avenger']

console.log(cap);

delete cap.age
console.log(cap);