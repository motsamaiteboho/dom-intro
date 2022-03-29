
//get a reference to the add button
const textradioBillAddBtn = document.querySelector(".radioBillAddBtn");

//fdf
const callsTotalElement = document.querySelector(".callTotalTwo");
const smsTotalElement = document.querySelector(".smsTotalTwo");
const totalCostElement = document.querySelector(".totalTwo");

//create a variable that will keep track of the total bill
var radiCallsTotal = 0;
var radiSmsTotal = 0;
var radiTotalCost = 0;
//add an event listener for when the add button is pressed
function radiBillTotal() {
    // get a reference to the sms or call radio buttons
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    // get the value entered in the billType radiobtn checked
    if (checkedRadioBtn) {
        var billTypeEntered = checkedRadioBtn.value;
        // update the correct total
        if (radiTotalCost < 50) {
            if (billTypeEntered === "call") {
                radiCallsTotal += 2.75
            }
            else if (billTypeEntered === "sms") {
                radiSmsTotal += 0.75;
            }
        }
        else
            alert("You have reached the critical level")
    }

    //update the totals that is displayed on the screen.
    callsTotalElement.innerHTML = radiCallsTotal.toFixed(2);
    smsTotalElement.innerHTML = radiSmsTotal.toFixed(2);
    radiTotalCost = radiCallsTotal + radiSmsTotal;
    totalCostElement.innerHTML = radiTotalCost.toFixed(2);

    totalCostElement.classList.remove("danger");
    totalCostElement.classList.remove("warning");

    //color the total based on the criteria
    if (radiTotalCost >= 50) {
        // adding the danger class will make the text red
        totalCostElement.classList.add("danger");
    }
    else if (radiTotalCost >= 30) {
        totalCostElement.classList.add("warning");
    }
}
textradioBillAddBtn.addEventListener('click', radiBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen