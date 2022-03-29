// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
const textTotalAddBtn = document.querySelector(".addToBillBtn");

//fdf
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");

//create a variable that will keep track of the total bill
var textcallsTotal = 0;
var textsmsTotal = 0;
var texttotalCost = 0;

//add an event listener for when the add button is pressed
function textBillTotal() {
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (texttotalCost < 50) {
        if (billTypeEntered === "call") {
            textcallsTotal += 2.75
        }
        else if (billTypeEntered === "sms") {
            textsmsTotal += 0.75;
        }
    }
    else
        alert("You have reached the critical level")


    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = textcallsTotal.toFixed(2);
    smsTotalElem.innerHTML = textsmsTotal.toFixed(2);
    texttotalCost = textcallsTotal + textsmsTotal;
    totalCostElem.innerHTML = texttotalCost.toFixed(2);

    totalCostElem.classList.remove("danger");
    totalCostElem.classList.remove("warning");

    //color the total based on the criteria
    if (texttotalCost >= 50) {
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (texttotalCost >= 30) {
        totalCostElem.classList.add("warning");
    }
}
textTotalAddBtn.addEventListener('click', textBillTotal);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen