const a = true;
if (!a) {
    console.log("Green");
}else{
    console.log("Blue");
}

// ouput: Blue


var x = 2;
x += 5;
console.log(x);

// output: 7


var x = 10;

if(x > 10) {
    console.log("Apple");
}
else if(x > 5) {
    console.log("Pear");
}
else {
    console.log("Orange");
}


var result = 0;

var i = 0;
var limit = 3;
while (i < limit) {
    result += 2;
    i++
}
console.log(result);


var cat = {}
cat ["sound"] = "meow"
var catSound = "purr"
console.log(cat.sound)

// output: meow
