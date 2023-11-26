var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

// output
/*
{ mileage: 98765, color: 'red' }

{
  mileage: 98765,
  color: 'red',
  turnTheKey: [Function (anonymous)],
  lightsOn: [Function (anonymous)]
}
The engine is running

The lights are on.

*/