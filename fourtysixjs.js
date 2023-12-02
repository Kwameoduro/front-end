const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)

// output: [ 'speed', 100, 'color', 'yellow' ]

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");


console.log(bestBoxers);

// output
/*Map(3) {
  1 => 'The Champion',
  2 => 'The Runner-up',
  3 => 'The third place'
}
 */

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

// output: Set(3) { 'apple', 'pear', 'plum' }
