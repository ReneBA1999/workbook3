"use strict"

window.onload = function() {
    let sameAddrChkBox = document.getElementById("sameAddress");
    sameAddrChkBox.onclick = onHideOrShowShippingDiv;
    // other events handlers connected here
   }
   function onHideOrShowShippingDiv() {
    let sameAddrChkBox = document.getElementById("sameAddress");
    let shippingDiv = document.getElementByid("shippingDiv");
    if (sameAddrChkBox.checked) {
    shippingDiv.style.display = "none";
    }
    else {
    shippingDiv.style.display = "block";
    }
   }