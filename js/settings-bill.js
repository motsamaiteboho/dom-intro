// get a reference to the sms or call radio buttons
var checkedRadBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
// get refences to all the settings fields
const callsTotalSet = document.querySelector(".callTotalSettings");
const smsTotalSet = document.querySelector(".smsTotalSettings");
const totalCostSet = document.querySelector(".totalSettings");
//get a reference to the add button
const radioSetAddBtn = document.querySelector(".radioSetAddBtn");
//get a reference to the 'Update settings' button
const updateSettings =document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the 'Update settings' button is pressed
var smsCost =0;
var callCost = 0;
var warningLevel = 0;
var criticalLevel = 0;
function updateCosts(){
    if(smsCostSetting.value !== "")
        smsCost = smsCostSetting.value;
    if(callCostSetting.value !== "")
        callCost = callCostSetting.value;
    if(warningLevelSetting.value !== "")
        warningLevel = warningLevelSetting.value;
    if(criticalLevelSetting.value !== "")
        criticalLevel = criticalLevelSetting.value;
}
updateSettings.addEventListener('click', updateCosts);
//add an event listener for when the add button is pressed
function setBillTotal(){
     // get the value entered in the billType radiobtn checked
    var billTypeEntered = "";
    if(checkedRadioBtn)
         billTypeEntered = checkedRadioBtn.value;
    // update the correct total
    if (billTypeEntered === "call"){
        if(callCost === 0)
            callsTotal += 2.75;
        else
            callsTotal += parseFloat(callCost);
    }
    else if (billTypeEntered === "sms"){
        if(smsCost === 0)
            smsTotal += 0.75;
        else
            smsTotal += parseFloat(callCost);
    }
    
    //update the totals that is displayed on the screen.
    callsTotalSet.innerHTML = callsTotal.toFixed(2);
    smsTotalSet.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostSet.innerHTML = totalCost.toFixed(2);

    
    totalCostSet.classList.remove("danger");
    totalCostSet.classList.remove("warning");
    //color the total based on the criteria
   
    if (criticalLevel=== 0 && warningLevel === 0){
        // adding the danger class will make the text red
        if (totalCost >= 50){
            // adding the danger class will make the text red
            totalCostSet.classList.add("danger");
        }
        else if (totalCost >= 30){
            totalCostSet.classList.add("warning");
        }
    }
    else if(criticalLevel !== 0 & warningLevel === 0)
    {
        if (totalCost >= criticalLevel){
            totalCostSet.classList.add("danger");
        }
    }
    else if(warningLevel !== 0 && criticalLevel == 0)
    {
        if (totalCost >= warningLevel){
            totalCostSet.classList.add("warning");
        }
    }
    else
    {
        if (totalCost >= warningLevel && totalCost < criticalLevel){
            totalCostSet.classList.add("warning");
        }
        else if (totalCost >= criticalLevel){
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