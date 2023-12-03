const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// output : [ 'apple', 'pear', 'plum', 'blueberry', 'strawberry' ]


const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // output: {wings: 2, wheels: 4}


let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// output: [ 'onion', 'parsley', 'carrot', 'beetroot' ]


const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); // output: ['H', 'e', 'l', 'l', 'o']


