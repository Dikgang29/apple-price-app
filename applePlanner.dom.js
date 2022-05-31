const boxCostElem = document.querySelector('.boxCost');
const numberOfApplesElem = document.querySelector('.numberOfApples');
const applesInPackElem = document.querySelector('.applesInPack');
const profitElem = document.querySelector('.profit');
const numberOfPacketsElem = document.querySelector('.numberOfPackets');
const calculateBtnElem = document.querySelector('.calculateBtn')

const appleDom = SettingsApple();
 


// function costBox(){
//     appleDom.appleBoxCost(boxCostElem.value);
//     console.log(appleDom.getBoxCost());
    
// }
calculateBtnElem.addEventListener('click', function(){
    appleDom.appleBoxCost(boxCostElem.value);
    
    // console.log(appleDom.getBoxCost());
    appleDom.appleInBox(numberOfApplesElem.value);
    appleDom.getBoxCost();
    console.log(appleDom.getBoxCost());

    appleDom.applesPerPack(applesInPackElem.value);
    appleDom.getApplesInBox();
    console.log(appleDom.getApplesInBox())


    // appleDom.applesProfit(profitElem.value);

    numberOfApplesElem.innerHTML = appleDom.applesCost();
    console.log(appleDom.applesCost());

});