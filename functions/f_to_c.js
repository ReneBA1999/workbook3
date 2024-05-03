"use strict"

function convertFtoC(f) {

let celsius = (f - 32) * 5/9;

console.log("The temperature in Celsius is:", Math.ceil(celsius) ,"degrees Celsius");
}

convertFtoC(0);

let currentTemp = 0;
let celsiusTemp = convertFtoC(currentTemp);

function convertCtoF(c) {
    let farenheit = c * (9/5) + 32;
    console.log("The temperature in farenheit is:", Math.ceil(farenheit) ,"degrees farenheit")
}

convertCtoF(100)