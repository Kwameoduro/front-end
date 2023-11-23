function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

// output

/*
0 tomato!
100 orange
200 yellow
300 green
400 blue
500 purple
600 pink
*/