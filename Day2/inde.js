let a = "Hemraj";
let b = "Mahesh";
let c = "Manish";

// Concatenation
let d = "Hello "+ a + ", "+ b + "and" + c + "!";
// console.log(d)


// Template literals
let e = `Hello ${a}, ${b} and ${c}!`;
//console.log(e)

// Using template literals to get length
let f = `The length of a is ${a.length * 2}`;
// console.log(e);
// console.log(f);

function table(num) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        // console.log(num + " x " + i + " = " + (num * i)); // Using string concatenation
        result += `${num} x ${i} = ${num * i}\n`; // using templates literals
    }
    return result;
}
// console.log(table(5)); // Display the table for 5
// function sum(a, b) {
//     return a + b;
// }


// let sum1 = sum(5, 10);
// Arrow function for addition
let sum = (x, y) => x + y; 
console.log("Sum of 5 and 10:", sum(5, 10)); // 15



let arr = [1, 2, 3, 4, 5, "Hemu"];

// arr.filter(function(x) {
//     return typeof x === "number";
// }).map(function(y) {
//     return y * 2;
// }).forEach(function(abc) {
//     console.log("Element after * 2:", abc * 2);
// });


arr.filter(x => typeof x === "number").map(y => y * 2).forEach(abc => console.log("Element after * 2:", abc * 2));
console.log(arr.find(x => x === "Aaryan1")); 
// Arrow function is represented by =>