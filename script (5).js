/*
JavaScript Assignment Solutions
Author: [Your Name]
Date: [Current Date]
*/

// PART A: LOOPS
console.log("=== PART A: LOOPS ===");

// Q1: Print numbers 1 to 10 using loop
console.log("\n1. Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Q2: Multiplication table with user input
console.log("\n2. Multiplication Table");
// Taking input using prompt (for browser)
let number = parseInt(prompt("Enter a number for multiplication table:") || "5");
console.log(`Multiplication table of ${number}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
}

// Q3: Prime number check with user input
console.log("\n3. Prime Number Check");
let checkNum = parseInt(prompt("Enter a number to check if it's prime:") || "17");
let isPrime = true;

if (checkNum > 1) {
    for (let i = 2; i <= Math.sqrt(checkNum); i++) {
        if (checkNum % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(`${checkNum} is ${isPrime ? 'prime' : 'not prime'}`);
} else {
    console.log(`${checkNum} is not prime`);
}

// PART B: FUNCTIONS
console.log("\n=== PART B: FUNCTIONS ===");

// Q5: Square function
function square(x) {
    return x * x;
}
let squareInput = parseInt(prompt("Enter a number to find its square:") || "8");
console.log(`\n5. Square of ${squareInput}:`, square(squareInput));

// Q6: Arithmetic operations function
function calculate(a, b) {
    return {
        sum: a + b,
        difference: a - b,
        product: a * b
    };
}
let num1 = parseInt(prompt("Enter first number for calculations:") || "15");
let num2 = parseInt(prompt("Enter second number for calculations:") || "3");
let calc = calculate(num1, num2);
console.log("\n6. Calculations:");
console.log(`Numbers: ${num1} and ${num2}`);
console.log("Sum:", calc.sum);
console.log("Difference:", calc.difference);
console.log("Product:", calc.product);

// PART C: COMBINED
console.log("\n=== PART C: COMBINED ===");

// Q7: Function to take 5 numbers and calculate average
function getAverage() {
    let nums = [];
    let sum = 0;
    
    console.log("\n7. Enter 5 numbers:");
    // Taking 5 inputs using loop
    for (let i = 1; i <= 5; i++) {
        let input = parseInt(prompt(`Enter number ${i}:`) || (i * 10));
        nums.push(input);
        sum += input;
    }
    
    console.log("Numbers:", nums);
    console.log("Total:", sum);
    console.log("Average:", sum / nums.length);
}
getAverage();

// Q8: Student grading system with user input
function assignGrade(marks) {
    if (marks >= 80) return "A";
    if (marks >= 60) return "B";
    if (marks >= 40) return "C";
    return "Fail";
}

console.log("\n8. Grading System:");
let studentMarks = parseInt(prompt("Enter student marks (0-100):") || "75");
console.log(`${studentMarks} marks → Grade:`, assignGrade(studentMarks));

// Additional test cases
console.log("\nAdditional test cases:");
console.log("85 marks → Grade:", assignGrade(85));
console.log("65 marks → Grade:", assignGrade(65));
console.log("45 marks → Grade:", assignGrade(45));
console.log("30 marks → Grade:", assignGrade(30));