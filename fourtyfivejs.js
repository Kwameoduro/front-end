const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

// output
/*
0. kiwi
1. mango
2. apple
3. pear

*/

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

// output
/*
0. onion
1. garlic
2. potato

*/

