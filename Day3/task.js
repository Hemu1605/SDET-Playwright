// #################Level 1: The Warm-up (forEach & map)######################


// ----------1. Logging Names------------
const names = ['Alice', 'Bob', 'Charlie'];

names.forEach(name => {
    console.log("Hello, " + name);
});

// --- Output---
// Hello, Alice
// Hello, Bob
// Hello, Charlie

// ---------------2.Temperature Conversion-------------
const celsius = [0, 10, 20, 30];

const fahrenheit = celsius.map(temp => temp * 1.8 + 32);

console.log(fahrenheit);

// ---Output---
// [32, 50, 68, 86]



// ######################## **Level 2: Data Filtering** #################


// ----------------3.Finding Adults--------------
const users = [
    { name: 'Li', age: 16 },
    { name: 'Dan', age: 22 },
    { name: 'Sarah', age: 17 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);

// ---Output---
// [ { name: 'Dan', age: 22 } ]

// ------------------- 4.String Lengths--------------------
const cars = ['aulto', 'Defender', 'Kia', 'Swift', 'Scorpio'];

function longStrings(arr) {
    return arr.filter(str => str.length > 5);
}

console.log(longStrings(cars));

// ---Output---
// ['Defender', 'Scorpio']


// ########################## **Level 3: The Power of Reduce** #######################

// -------------------------**5. Total Cost** ---------------------
const prices = [19.99, 5.50, 3.99, 25.00];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);

// ---Output---
// 54.48

// ------------------**6. Counting Occurrences**-----------------
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];

const appleCount = fruits.reduce((count, fruit) => {
    if (fruit === 'apple') {
        count++;
    }
    return count;
}, 0);

console.log(appleCount);

// ---Output---
// 3


// ########################### **Level 4: Advanced Scenarios** #######################
// ------------------**7. Array Transformation**---------------------
const numbers = [1, 2, 3, 4, 5, 6];

//even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);

// Square the even numbers
const squaredNumbers = evenNumbers.map(num => num * num);

console.log("Squared Even Numbers:", squaredNumbers);

// ---Output---
// Even Numbers: [2, 4, 6]
// Squared Even Numbers: [4, 16, 36]

// ----------------**8. Object Extraction**-------------------
const products = [
    { id: 1, title: 'Laptop' },
    { id: 2, title: 'Mouse' }
];

const titles = products.map(product => product.title);

console.log(titles);

// ---Output---
// ['Laptop', 'Mouse']

// ######################## **Level 5: Logic Challenges** ######################

// -------------------------**9. The Average**-----------------------
const scores = [80, 90, 70, 100];

const totalMarks = scores.reduce((sum, score) => sum + score, 0);

const average = totalMarks / scores.length;

console.log(average);

// ---Output---
// 85

// --------------**10. Flattening (The Bonus)**--------------
const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((acc, curr) => {
    return acc.concat(curr);
}, []);

console.log(flatArray);

// ---Output---
// [1, 2, 3, 4, 5, 6]