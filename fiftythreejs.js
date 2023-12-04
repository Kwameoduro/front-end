// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }        
    sleep() { this.energy += 10 }
    doSomethingFun() { this.energy -= 10 }
   
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor( name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() { this.xp += 10 }
}


// Task 3: Code an intern object, run methods
function intern() {
    let intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;

}
console.log(intern());

// Task 4: Code a manager object, methods
function manager() {
    let manager = new Worker ("Alice", 30, 120, 100, 30)
    manager.doSomethingFun();
    return manager;

}
console.log(manager());

/*Output:

Worker { name: 'Bob', age: 21, energy: 110, xp: 10, hourlyWage: 10 }
Worker { name: 'Alice', age: 30, energy: 110, xp: 100, hourlyWage: 30 }
*/