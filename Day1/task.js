// swapping

let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log(a); 
console.log(b); 

// Typechecker

function checkType(value) {
    if (typeof value === "number") {
        console.log("This is a number");
    } else if (typeof value === "string") {
        console.log("This is a string");
    }
}

checkType(100);
checkType("Hello");

// Initial creator

let fullName = "John Doe";

let names = fullName.split(" ");
let initials = names[0][0] + names[1][0];

console.log(initials); 

// Cleaner

let messy = " Javascript is fun ";

let clean = messy.trim().toLowerCase();

console.log(clean); 

// Grocery List

let cart = ["apple", "Banana", "graphes"];

cart.push("Milk");   
cart.unshift("Eggs");
cart.pop();           

console.log(cart);

// Value Finder

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.includes(30)); 

console.log(numbers.indexOf(50)); 