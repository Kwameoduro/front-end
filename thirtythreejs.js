function addTwoNums(a, b){
    console.log(a + b);
}
function randomNum(){
    return Math.floor((Math.random() * 10) + 1);
}
function specifcNum(){
    return 42
};

var useRandom = true;
var getNumber;

if (useRandom){
    getNumber = randomNum
}
else {
    getNumber = specificNum
}
addTwoNums(getNumber(), getNumber()) // this calls two random numbers and add them.
addTwoNums(getNumber(), specifcNum()) // this calls one random number and adds it to the specific number.