function getTotal(a, b){
    return a + b;
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
console.log(total);

// output : 5


function getDistance(mph, h){
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance + " miles" );

// output : 120 miles


var virtualPet = {
    sleepy: true,
    nap: function(){
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy)
virtualPet.nap()
console.log(virtualPet.sleepy)

// output
// true
// false