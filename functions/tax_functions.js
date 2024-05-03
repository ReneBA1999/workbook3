"use strict"

// function getSocSecTax(grossPay) {
//  let tax = grossPay * .062;
//  console.log(`The total Social Security tax amount for the gross pay amount of $${grossPay} is $${tax}.`);
// }
// //getSocSecTax(1000)


// function getMedicareTax(grossPay) {
//     let tax = grossPay * .0145;
//     console.log(`The total Medicare tax amount for the gross pay amount of $${grossPay} is $${tax}.`);
// }
// //getMedicareTax(1000);


// function getFederalTax(grossPay, withholdingCode){
//    let fedTax
//     let taxRate;
//     if ( withholdingCode == 0) {
//         taxRate = .23;
//      fedTax = (grossPay * taxRate);
//     }
//     else if ( withholdingCode == 1) {
//         taxRate = .21;
//      fedTax = (grossPay * taxRate);
//     }
//     else if ( withholdingCode == 2) {
//         taxRate = .195;
//      fedTax = (grossPay * taxRate);
//     }
//     else if ( withholdingCode == 3) {
//         taxRate = .185;
//      fedTax = (grossPay * taxRate);
//     }
//     else if ( withholdingCode >= 4) {
//         taxRate = .18;
//      fedTax = (grossPay * (taxRate-(2 * .005)));
//     }
//   else{
// console.log("Unknown whitholdingcode! Please try again")
//
//   }

//   if(grossPay > 0)
//   console.log(`The total federal tax amount for the gross pay amount of $${grossPay} is $${fedTax}`)
// }
// getFederalTax(100,-7)


function getFederalTax(grossPay, withholdingCode) {
    if (grossPay <= 0) {
        console.error("Invalid gross pay amount! Please enter a positive number.");
        return; // Exits the function if grossPay is not positive

    }
    if (withholdingCode === 0) {
        taxRate = 0.23;
    } else if (withholdingCode === 1) {
        taxRate = 0.21;
    } else if (withholdingCode === 2) {
        taxRate = 0.195;
    } else if (withholdingCode === 3) {
        taxRate = 0.185;
    } else if (withholdingCode >= 4) {
        taxRate = 0.18 - ((withholdingCode - 3) * 0.005);
    } else {
        console.log("Withold code is invallid");
        return;
    }

    let fedTax = grossPay * taxRate;
    console.log(`The total federal tax amount for the gross pay amount of $${grossPay} is $${fedTax.toFixed(2)}`);
}
    
getFederalTax(1000, -1)


//    let fedTax;
let taxRate;


switch (withholdingCode) {
    case 0:
        taxRate = 0.23;            
        break;
    case 1:
        taxRate = 0.21;

    default:
        break;}