function myFunc(theObject){
    theObject.make = "ToyoSta"
}

const mycar = {
    make: "Honda",
    model: "Accord",
    year: "2020"
};

console.log(mycar.make);
myFunc(mycar);
console.log(mycar.make);

// Honda
// Toyota