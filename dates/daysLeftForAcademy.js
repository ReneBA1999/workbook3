"use strict"
function countDown(){
 let currentDate = new Date("May, 6, 2024");
let academyEnd = new Date("June, 28, 2024"); 

let msec_per_day = 1000 * 60 * 60 * 24; 
let elapsedMilliseconds = academyEnd.getTime() - currentDate.getTime(); 
let dayDiff = elapsedMilliseconds / msec_per_day; 
let numDays = Math.round(dayDiff); 
document.getElementById("daysLeft").innerHTML = `We have ${numDays} days left in learn to code academy`;
}





