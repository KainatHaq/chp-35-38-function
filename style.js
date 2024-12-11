
//Functions
// Q#1. Write a function that displays current date & time in your
// browser.

function displayCurrentDateTime() {
    
    let currentDateTime = new Date();

    document.write("Current Date and Time: " + currentDateTime + "<br><br>");
}
displayCurrentDateTime();



// Q#2. Write a function that takes first & last name and then it
// greets the user using his full name.


function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName;

    // Greet the user using their full name
    document.write("Hello, " + fullName + "! Welcome!<br>");
}

greetUser("Kaiant", "Haq");

// Q#3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function addTwoNumbers() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    let sum = num1 + num2;

    document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + "<br><br>");
}
addTwoNumbers();


// Q#4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculator(num1, num2, operator) {
    let result;

    // Perform operation based on the operator
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else {
        result = "Invalid operator!";
    }

    document.write("Result of " + num1 + " " + operator + " " + num2 + " = " + result + "<br><br>");
}

// Example: calling the function with two numbers and an operator
calculator(10, 5, "+");  
calculator(10, 5, "-");  
calculator(10, 5, "*"); 
calculator(10, 5, "/");  


//Q#5 Function to square the number entered by the user
function squareNumber() {
   
    let num = parseFloat(prompt("Enter a number to square:"));

    let squared = num * num;

    document.write("The square of " + num + " is: " + squared + "<br><br>");
}
squareNumber();

// Q#6. Write a function that computes factorial of a number.

function factorial() {
    
    let num = parseInt(prompt("Enter a number to calculate its factorial:"));

    let result = 1;

    if (num < 0) {
        document.write("Factorial is not defined for negative numbers.<br>");
    } else {
       
        for (let i = 1; i <= num; i++) {
            result *= i;  
        }

        document.write("The factorial of " + num + " is: " + result + "<br><br>");
    }
}
factorial();

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function displayCounting() {
    
    let startNum = parseInt(prompt("Enter the start number:"));
    let endNum = parseInt(prompt("Enter the end number:"));

    for (let i = startNum; i <= endNum; i++) {
        document.write(i + "<br><br>");
    }
}

displayCounting();

// Q#8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

function calculateHypotenuse() {
    let base = parseFloat(prompt("Enter the base of the triangle:"));
    let perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));

    function calculateSquare(num) {
        return num * num;  
    }
    let baseSquare = calculateSquare(base);
    let perpendicularSquare = calculateSquare(perpendicular);

    let hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);


    document.write("The hypotenuse of the triangle is: " + hypotenuse + "<br><br>");
}

calculateHypotenuse();


// Q#9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function calculateArea(width, height) {
   
    let area = width * height;

    
    document.write("The area of the rectangle is: " + area + "<br><br>");
}

calculateArea(5, 10);

let rectangleWidth = 7;
let rectangleHeight = 12;
calculateArea(rectangleWidth, rectangleHeight); 

//Q# 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?

function isPalindrome(str) {
    let lowerCaseStr = str.toLowerCase();

    let reversedStr = lowerCaseStr.split("").reverse().join("");

    if (lowerCaseStr === reversedStr) {
        document.write(str + " is a palindrome.<br>");
    } else {
        document.write(str + " is not a palindrome.<br><br>");
    }
}


isPalindrome("madam");  
isPalindrome("hello");  


//Q# 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.


function capitalizeWords(str) {
   
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    let capitalizedStr = words.join(" ");

    document.write("Original string: " + str + "<br>");
    document.write("Capitalized string: " + capitalizedStr + "<br><br>");
}

capitalizeWords("the quick brown fox");



// Q#12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.


function findLongestWord(str) {
   
    let words = str.split(" ");

   
    let longestWord = "";

    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];  
        }
    }

    document.write("The longest word in the string is: " + longestWord + "<br><br>");
}

findLongestWord("Web Development Tutorial");


// Q#13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'


function countOccurrences(str, letter) {
    
    let count = 0;

   
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) { 
            count++; 
        }
    }

    
    document.write("The letter '" + letter + "' appears " + count + " times in the string '" + str + "'.<br><br>");
}

countOccurrences("JSResourceS.com", "o");


// Q#14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;  
    document.write("The circumference is " + circumference.toFixed(2) + "<br>"); 
}

function calcArea(radius) {
    let area = Math.PI * Math.pow(radius, 2); 
    document.write("The area is " + area.toFixed(2) + "<br>"); 
}

let radius = parseFloat(prompt("Enter the radius of the circle:")); 
calcCircumference(radius);
calcArea(radius);

