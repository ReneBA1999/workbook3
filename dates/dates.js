"use strict"

// let d = new Date();
//  console.log(d);

// console.log(d.toString());

// console.log(d.toUTCString());
// console.log(d.toDateString());

// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());
// console.log(d.toLocaleString());

// let date1 = new Date(1934, 7, 12);
// console.log(date1);
// let date2 = new Date(1926, 6, 28, 10, 2, 0);
// console.log(date2);

// let d = new Date("2022-04-01T12:00:00Z");
// console.log(d);

//Creating dates in different ways

//  let date1 = new Date(1934, 7, 12);
//  console.log(date1);
//  let date2 = new Date(1926, 6, 28, 10, 2, 0);
//  console.log(date2);

//  let d = new Date("2022-04-01T12:00:00Z");
//   console.log(d);

//   let z = new Date("05/05/2024")
//   console.log(z);

  // When I create the date this way, it thinks I'm in GMT 
// and it uses a 1-based month
let t = new Date("2023-05-11");
// But when I print it out, the display adjusts for my 
// local time
console.log(t.toString()); 
 // displays 
 // Wed May 10 2023 19:00:00 GMT-0500 (Central Daylight Time)

 // When I create the date this way, it uses my local time zone
let d = new Date("05-11-2021");
console.log(d.toString()); 
 // displays 
 // Thu May 11 2023 00:00:00 GMT-0500 (Central Daylight Time)
