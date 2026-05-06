class User {
    constructor(name) {
        this.name = name;
    }
    logIn() {
        console.log(`${this.name} has logged in.`);
    }
}
 
class Admin extends User {
    constructor(name, role) {
        super(name); // call the parent class constructor
        this.role = role;
    }
    logIn() {
        super.logIn(); // call the parent class method
        console.log(`${this.name} has admin privileges as a ${this.role}.`);
    }
}
 
const user1 = new User("Alice");
const admin1 = new Admin("Bob", "Super Admin");
 
user1.logIn(); // Alice has logged in.
admin1.logIn(); // Bob has logged in. Bob has admin privileges as a Super Admin.


/////////////////////////////
// Example
////////////////////////////


class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Dog class inherits Animal class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // calling parent constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

const dog1 = new Dog("Tommy", "Labrador");

dog1.sound(); // Tommy makes a sound.
dog1.bark();  // Tommy is barking.

