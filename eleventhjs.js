for (var i = 1; i <= 10; i++) {
    if(i == 1) {
        console.log("Gold medal")
    } else if (i == 2) {
        console.log("Silver medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    } else {
        //this block will run if no condition matches
        console.log(i)
    }
}

// output
/*
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10
*/


for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}

// output

/*
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10

*/

var i = 1;

if(i == 0 && i == 1) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }
  // output
  // Goodbye

  for (i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("Hello");
    }
}