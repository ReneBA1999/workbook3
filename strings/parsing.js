"use strict"

let name = "Brenda Kaye";
let space = name.indexOf(" ");
console.log(space);

let first = name.substring(0, 6);
let last = name.substring(7);

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
// }

// function parseAndDisplayName(name) {
//  if (name == "Brenda Kaye") {
//     console.log(`Name: ${name}`);
//     console.log(`First Name: ${first}`);
//     console.log(`Last Name: ${last}`);
//  }
//  else if(name != name) {
//     let wrong = " Not a valid name";
//     console.log(wrong);
//   return wrong;
//  } else {
//     let error = "invalid input";
//     console.log(error);
//   return error;
//  }

// }

// Function to parse and display the first and last name
function parseAndDisplayName(name) {
    // Find the position of the space
    let space = name.indexOf(" ");
  
   
    let firstName = name.substring(0, space);
    let lastName = name.substring(space + 1);
    
    console.log("Name:", name);
    console.log("First name:", firstName);
    console.log("Last name:", lastName);

}

// Test the function with different names
parseAndDisplayName("cher");
