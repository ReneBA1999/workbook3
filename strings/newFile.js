"use Strict"

// Mini Exercise: Using JavaScript String Methods

// Objective: Learn to manipulate strings using JavaScript string methods.

// Task:

// Declare two variables that store string values.
// Using these variables, construct and display the message: "Hi YEAR UP. LEARNING WEB DEVELOPMENT IS AWESOME".
// Apply the following string methods:
// Use toUpperCase() to convert relevant parts of the string to uppercase.

// Expected Output:
// The output should be a single string: "Hi YEAR UP. LEARNING WEB DEVELOPMENT IS AWESOME" with 'YEAR UP' and the message
//  about learning web development in uppercase, and no extra spaces before or after the main message.

let message1 = "          hi YEAR UP.";
let message2 = " learning web development is awesome. ";

 let message3 = message1 + message2;
 message3 = message3.trim();
 message3 = message3.toUpperCase();
 
 console.log(message3);

