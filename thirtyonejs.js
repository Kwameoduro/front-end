function example(){
    console.log("line one");
    console.log("line two");
    console.log("line three")
}
example()

// output: 
// line one 
// line two 
// line three


let counter = 3;
function example1(){
    console.log(counter);
    counter = counter - 1;
    if (counter === 0) return;
    example1();
}
example1();


// output: 
/* 
3
2
1
*/