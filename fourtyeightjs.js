const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

// output: 201 200

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)

// output: [ 'apples' ] not [ 'apples', 'pears' ]