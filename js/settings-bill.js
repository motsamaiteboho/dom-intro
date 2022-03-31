
// get refences to all the settings fields
const callsTotalSet = document.querySelector(".callTotalSettings");
const smsTotalSet = document.querySelector(".smsTotalSettings");
const totalCostSet = document.querySelector(".totalSettings");
//get a reference to the add button
const radioSetAddBtn = document.querySelector(".radioSetAddBtn");
//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
var smsCost = 0;
var callCost = 0;
var warningLevel = 0;
var criticalLevel = 0;
// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;
//add an event listener for when the 'Update settings' button is pressed

function updateCosts() {
    const callCostSetting = document.querySelector(".callCostSetting");
    const smsCostSetting = document.querySelector(".smsCostSetting");
    const warningLevelSetting = document.querySelector(".warningLevelSetting");
    const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
    if (smsCostSetting.value !== "")
        smsCost = smsCostSetting.value;
    if (callCostSetting.value !== "")
        callCost = callCostSetting.value;
    if (warningLevelSetting.value !== "") {
        if (warningLevel !== warningLevelSetting.value) {
            if (totalCost == warningLevelSetting.value) {
                if(totalCostSet.classList.contains("danger"));
                    totalCostSet.classList.add("warning");
            }
            else {
                totalCostSet.classList.remove("danger");
                totalCostSet.classList.remove("warning");
            }

        }
        warningLevel = warningLevelSetting.value;

    }
    if (criticalLevelSetting.value !== "") {

        if (criticalLevelSetting.value > criticalLevel && criticalLevel !== 0) {
            if (totalCostSet.classList.contains("danger"))
                totalCostSet.classList.add("warning");
        }
        criticalLevel = criticalLevelSetting.value;
    }
}
updateSettings.addEventListener('click', updateCosts);
//add an event listener for when the add button is pressed
function setBillTotal() {
    // get a reference to the sms or call radio buttons
    var checkedRadBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    // get the value entered in the billType radiobtn checked
    if (checkedRadBtn) {
        var setbillTypeEntered = checkedRadBtn.value;
        // update the correct total
        if (totalCost < criticalLevel) {
            if (setbillTypeEntered === "call") {
                callsTotal += parseFloat(callCost);
            }
            else if (setbillTypeEntered === "sms") {
                smsTotal += parseFloat(smsCost);
            }
        }
        else {
            if (criticalLevel < warningLevel)
                alert("warning level cannot be greater than critical level");
            else
                alert("You have reached the critical level")
        }

    }

    //update the totals that is displayed on the screen.
    callsTotalSet.innerHTML = callsTotal.toFixed(2);
    smsTotalSet.innerHTML = smsTotal.toFixed(2);
    totalCost = callsTotal + smsTotal;
    totalCostSet.innerHTML = totalCost.toFixed(2);

    //color the total based on the criteria

    totalCostSet.classList.remove("danger");
    totalCostSet.classList.remove("warning");
    if (warningLevel === totalCost) {
        totalCostSet.classList.add("warning");
    }

    if (criticalLevel !== 0 & warningLevel === 0) {
        if (totalCost >= criticalLevel) {
            totalCostSet.classList.add("danger");
        }
    }
    else if (warningLevel !== 0 && criticalLevel == 0) {
        if (totalCost >= warningLevel) {
            totalCostSet.classList.add("warning");
        }
    }
    else {
        if (totalCost >= warningLevel && totalCost < criticalLevel) {
            totalCostSet.classList.add("warning");
        }
        else if (totalCost >= criticalLevel) {
            totalCostSet.classList.add("danger");
        }
    }
}
radioSetAddBtn.addEventListener('click', setBillTotal);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.