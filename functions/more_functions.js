"use strict"

function displayMailingLabel(name, address, city, state, zip) {
    let display = "Name:" + name + "Address:" + address + "City:" + city + "State:" + state + "Zip:" + zip;
    console.log(display);
}

let name = " Rene B ";
let address = " 123 E elm street ";
let city = " Phoenix ";
let state = " Az ";
let zip = " 85008 ";

displayMailingLabel(name, address, city, state, zip);

function addNumbers(_num1, _num2){
let num1 = _num1;
let num2 = _num2;
let formula = (num1 + num2)
let answer = formula;
return (answer)
}

let sum = addNumbers(10,6);
console.log(sum);

function displayReceipt(totalDue, amountPaid){
    let changeDue = amountPaid - totalDue;
    let Due = totalDue - amountPaid;
    let calculation = ("Total Due: $" + totalDue.toFixed(2) + "  Amount Paid: $" + amountPaid.toFixed(2) + "  Change Due:  $" + changeDue.toFixed(2) + "  Due:  $ " + Due.toFixed(2))
    return calculation;

}  

let cal = displayReceipt(10, 20);
console.log(cal);
