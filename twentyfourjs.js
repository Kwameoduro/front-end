var clothes = [];
clothes.push('gray t-shirt'); 
clothes.push('blue t-shirt'); 
clothes.push('yellow t-shirt'); 
clothes.push('slippers');
clothes.push('old jeans'); 
console.log(clothes)


clothes.pop();
console.log(clothes)

// output
/*
[ 'gray t-shirt', 
'blue t-shirt', 
'yellow t-shirt', 
'slippers' ]
*/


clothes.push('green scarf');
console.log(clothes)

// output 
/*[
  'gray t-shirt',
  'blue t-shirt',
  'yellow t-shirt',
  'slippers',
  'green scarf'
]
*/


console.log(clothes[2]);

// output
// yellow t-shirt



var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);

// output
/*
{ color: 'red', convertible: true }
*/