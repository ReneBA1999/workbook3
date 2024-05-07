"use strict"

let bDay = new Date("1999-08-26");
let seven = new Date(bDay);

seven.setDate(seven.getDate() +7);

console.log(bDay.toDateString());
console.log(seven.toDateString());