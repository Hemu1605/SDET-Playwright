////////////////////////////////////
//  1. Variables & Data Types
////////////////////////////////////


// 1. Swap two numbers without third variable

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);


// 2. Check data type

function checkType(value) {
    if (value === null) {
        console.log("null");
    } else {
        console.log(typeof value);
    }
}

checkType(10);
checkType("Hello");
checkType(true);
checkType(null);
checkType(undefined);

// 3. Celsius to Fahrenheit

let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;

console.log(fahrenheit);

// 4. Simple Calculator

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


// 5. Calculate Age

let birthYear = 2003;
let currentYear = 2026;

let age = currentYear - birthYear;

console.log(age);


////////////////////////////////////
//  2. Strings
////////////////////////////////////


// 1. Reverse a string

let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed);


// 2. Count vowels

let str = "javascript";
let count = 0;

for (let char of str.toLowerCase()) {
    if ("aeiou".includes(char)) {
        count++;
    }
}

console.log(count);


// 3. Palindrome String

let str = "madam";
let reversed = str.split("").reverse().join("");

console.log(str === reversed);


// 4. Capitalize first letter

let sentence = "hello world";

let result = sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(result);

// 5. Longest word
let sentence = "JavaScript is very powerful";

let words = sentence.split(" ");
let longest = "";

for (let word of words) {
    if (word.length > longest.length) {
        longest = word;
    }
}

console.log(longest);

////////////////////////////////////
//  3. Numbers & Math
////////////////////////////////////

// 1. Random number 1-100

console.log(Math.floor(Math.random() * 100) + 1);


// 2. Prime Number

let num = 7;
let prime = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        prime = false;
        break;
    }
}

console.log(prime);

// 3. Factorial

let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(factorial);


// 4. Fibonacci Series

let n = 10;
let a = 0;
let b = 1;

for (let i = 0; i < n; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}


// 5. Armstrong Number
let num = 153;
let sum = 0;
let temp = num;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}

console.log(sum === num);

////////////////////////////////////
//  4. Arrays
////////////////////////////////////

// 1. Largest and smallest number

let arr = [5, 2, 9, 1];

console.log(Math.max(...arr));
console.log(Math.min(...arr));


// 2. Remove duplicates

let arr = [1, 2, 2, 3, 4, 4];

let unique = [...new Set(arr)];

console.log(unique);


// 3. Sort without sort()

let arr = [5, 2, 8, 1];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);


// 4. Second largest number

let arr = [10, 20, 5, 40, 30];

arr.sort((a, b) => b - a);

console.log(arr[1]);


// 5. Merge arrays and remove duplicates

let a = [1, 2, 3];
let b = [3, 4, 5];

let merged = [...new Set([...a, ...b])];

console.log(merged);

////////////////////////////////////
//  5. Objects
////////////////////////////////////

// 1. Student object

const student = {
    name: "Hemraj",
    age: 22,
    course: "BTech"
};

for (let key in student) {
    console.log(key, student[key]);
}


// 2. Count keys

const obj = {
    a: 1,
    b: 2,
    c: 3
};

console.log(Object.keys(obj).length);


// 3. Merge objects

const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = { ...obj1, ...obj2 };

console.log(merged);


// 4. Object into array

const obj = {
    name: "Hemraj",
    age: 22
};

console.log(Object.entries(obj));


// 5. Shopping cart total

const cart = [
    { item: "Phone", price: 1000 },
    { item: "Mouse", price: 200 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(total);


////////////////////////////////////
//  6. Loops
////////////////////////////////////


// 1. Star Pyramid

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}


// 2. Tables 1-10

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 3. Sum of even numbers
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum);

// 4. Prime numbers 1-100

for (let num = 2; num <= 100; num++) {
    let prime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log(num);
    }
}

// 5. Number Guessing Game
let random = Math.floor(Math.random() * 10) + 1;
let guess = 5;

while (guess !== random) {
    console.log("Wrong Guess");
    break;
}

console.log("Correct Number:", random);


////////////////////////////////////
//  7. Functions
////////////////////////////////////

// 1. Greatest of three numbers

function greatest(a, b, c) {
    return Math.max(a, b, c);
}

console.log(greatest(10, 20, 30));


// 2. Number palindrome

function isPalindrome(num) {
    let reversed = Number(num.toString().split("").reverse().join(""));
    return num === reversed;
}

console.log(isPalindrome(121));



// 3. Currency conversion

function convertToINR(dollar) {
    return dollar * 83;
}

console.log(convertToINR(10));


// 4. Even numbers from array

function getEven(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(getEven([1,2,3,4,5,6]));


// 5. Calculator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


////////////////////////////////////
//  8. Scope & Hoisting
////////////////////////////////////

// 1. Hoisting Example

console.log(a);
var a = 10;

Output:
undefined


// 2. Block Scope

{
    let x = 10;
    console.log(x);
}


// 3. Closure Example

function outer() {
    let count = 0;

    return function inner() {
        count++;
        return count;
    }
}

const counter = outer();

console.log(counter());
console.log(counter());


// 4. Nested Functions

function outer() {
    let name = "Hemraj";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();


// 5. Incorrect Scoping

for (let i = 0; i < 3; i++) {
    console.log(i);
}

////////////////////////////////////
//  9. Callback Functions & setTimeout
////////////////////////////////////


// 1. Delayed Greeting

setTimeout(() => {
    console.log("Hello");
}, 2000);


// 2. Countdown Timer

let count = 5;

const timer = setInterval(() => {
    console.log(count);
    count--;

    if (count < 0) {
        clearInterval(timer);
    }
}, 1000);


// 3. Callback Calculator

function calculator(a, b, callback) {
    callback(a, b);
}

calculator(5, 10, (x, y) => {
    console.log(x + y);
});

// 4. Food Ordering Callback

function orderFood(callback) {
    console.log("Ordering Food...");

    setTimeout(() => {
        callback();
    }, 2000);
}

orderFood(() => {
    console.log("Food Delivered");
});


// 5. Sequential Execution

function first(callback) {
    console.log("First");
    callback();
}

function second() {
    console.log("Second");
}

first(second);

////////////////////////////////////
//  10. Arrow Functions
////////////////////////////////////


// 1. Normal to Arrow

const greet = name => console.log(name);


// 2. One - line Arrow

const square = x => x * x;

// 3. map() with Arrow

const nums = [1,2,3];

const doubled = nums.map(x => x * 2);

console.log(doubled);


// 4. Even/Odd Checker

const check = num => num % 2 === 0 ? "Even" : "Odd";

console.log(check(4));


// 5. Grade Calculator

const grade = marks => {
    if (marks >= 90) return "A";
    if (marks >= 75) return "B";
    return "C";
}

