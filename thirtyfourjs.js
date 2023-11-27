function meal(animal){
    animal.food = animal.food + 10;
}
var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);

// output: 30


function two(){
    return 2;
}
function one(){
    return 1;
}
function calculate(initialValue, incrementValue){
    return initialValue() + incrementValue() + incrementValue();
}
console.log(calculate(two, one));

// output : 4