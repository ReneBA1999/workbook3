"use strict"

let name = "Brenda Kaye";
let space = name.indexOf(" ");
console.log(space);

let first = name.substring(0, 6);
let last = name.substring(7);
let oneWordName = "cher";
let threeWordName = "Dana Lynn Wyatt";


// Function to parse and display the first and last name
function parseAndDisplayName(name) {
    // Find the position of the space
    let space = name.indexOf(" ");
    let space3 = threeWordName.indexOf(" ");

    // Extract the first and last names
    let oneWordName = oneWordName.substring(0);
    let firstName = name.substring(0, space);
    let lastName = name.substring(space + 1);
    let threeWordName = threeWordName.substring(0, space3, 6 , space3,);
    
    // Display the full name, first name, a nd last name
    console.log(`Just the name:, ${oneWordName}`);
    console.log(`Name:", ${name}`);
    console.log(`First name:, ${firstName}`);
    console.log(`Last name:, ${lastName}`);
    console.log(`Three word name:, ${threeWordName}`);
}

// Test the function with different names
parseAndDisplayName("cher");



// let fullName =
// console.log(`Name: ${name}`);
// console.log(`First Name: ${first}`);
// console.log(`Last Name: ${last}`);

// function parseAndDisplayName() {
//     let fullName =
//     console.log(`Name: ${name}`);
//     console.log(`First Name: ${first}`);
//     console.log(`Last Name: ${last}`);
//    return fullName;
// // }

// function parseAndDisplayName(name) {
//  if (name = "Brenda Kaye") {
//     console.log(`Name: ${name}`);
//     console.log(`First Name: ${first}`);
//     console.log(`Last Name: ${last}`);
//  }
//  else if(oneWordName = "Cher") {
//     let wrong = " Not a valid name";
//     console.log(wrong);
//   return wrong;
//  } else {
//     let error = "invalid input";
//     console.log(error);
//   return error;
//  }

// }

