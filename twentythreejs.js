var greet = "Hello, ";
var place = "World"

console.log(greet.length);
// output: 7

console.group(greet.charAt(0));
// output: H

console.log("Wo".concat("rl").concat("d")); 
// output: 'World'

console.log("ho-ho-ho".indexOf('h')); // output: 0
console.log("ho-ho-ho".indexOf('o')); // output: 1
console.log("ho-ho-ho".indexOf('-')); // output: 2

console.log(greet.toUpperCase()); // output : "HELLO, "
console.log(greet.toLowerCase()); // output : "hello, "