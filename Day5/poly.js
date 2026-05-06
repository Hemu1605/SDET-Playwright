class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}
 
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}
 
class Square extends Shape {
    draw() {
        console.log('Drawing a square');
    }
}
 
const shapes = [new Circle(), new Square()];
 
shapes.forEach(shape => shape.draw());



//////////////////
// Example
//////////////////

class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}

class Cow extends Animal {
    sound() {
        console.log("Cow moos");
    }
}

const animals = [
    new Dog(),
    new Cat(),
    new Cow()
];

animals.forEach(animal => animal.sound());


////////// Output
// Dog barks
// Cat meows
// Cow moos