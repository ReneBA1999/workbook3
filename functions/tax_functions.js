"use strict"

function getSocSecTax(grossPay) {
 let tax = grossPay * .062;
 console.log(`The total Social Security tax amount for the gross pay amount of $${grossPay} is $${tax}.`);
}
getSocSecTax(1000)


function getMedicareTax(grossPay) {
    let tax = grossPay * .0145;
    console.log(`The total Medicare tax amount for the gross pay amount of $${grossPay} is $${tax}.`);
}
getMedicareTax(1000)


function getFederalTax(grossPay, withholdingCode){
   let fedTax
    let taxRate;
    if ( withholdingCode == 0) {
        taxRate = .23;
     fedTax = (grossPay * taxRate);
    }
    else if ( withholdingCode == 1) {
        taxRate = .21;
     fedTax = (grossPay * taxRate);
    }
    else if ( withholdingCode == 2) {
        taxRate = .195;
     fedTax = (grossPay * taxRate);
    }
    else if ( withholdingCode == 3) {
        taxRate = .185;
     fedTax = (grossPay * taxRate);
    }
    else if ( withholdingCode == 4) {
        taxRate = .18;
     fedTax = (grossPay * (taxRate-(2 * .005)));
    }
  else(){
console.log("Unknown inputs! Please try again")
  }


  console.log(`The total federal tax amount for the gross pay amount of $${grossPay} is $${fedTax}`)
}
getFederalTax(1000, 4)
    
