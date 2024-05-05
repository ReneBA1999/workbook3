"use strict";
// function test1() {
//  let a = 10;
//  if (a > 5) {
//  a = 7;
//  }
//  console.log("a = " + a);
// }
// test1();

// function test2A() {
//  if (1 == 1) {
//  var a = 5;
//  }
//  console.log("a = " + a);
// }
// test2A();


// function test2B() {
//  if (1 == 1) {
//  let a = 5;
//  }
//  console.log("a = " + a);
// }
// test2B()


// let a = 4;
// function test3() {
//  a = 3;
//  console.log("a = " + a);
// }
// test3();
// console.log("a = " + a);

// let a = 4;
// function test4() {
//  let a = 7;
//  console.log("a = " + a);
// }
// test4();
// console.log("a = " + a);

// let a = 4;
// function test5() {
//  a = 7;
//  function again() {
//  let a = 8;
//  console.log("a = " + a); 
//  }
//  again();
//  console.log("a = " + a); 
// }
// test5();
// console.log("a = " + a)


// let a = 4;
// function test6() {
//  let a = 7;
//  function again() {
//  let a = 8;
//  console.log("a = " + a); 
//  }
//  again();
//  console.log("a = " + a); 
// }
// test6();
// console.log("a = " + a);

function stripHyphensFromSSN(ssn) {
    let firstPart = ssn.substring(0, 3);
    let secondPart = ssn.substring(4, 6);
    let thirdPart = ssn.substring(7);
    let ssnDigitString = firstPart + secondPart + thirdPart;
    return ssnDigitString;
   }
   // elsewhere
   let ssn = "123-45-6789";
   let ssnWithoutHyphens = stripHyphensFromSSN(ssn);
   console.log(ssnWithoutHyphens);
