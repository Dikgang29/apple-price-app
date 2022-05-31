function SettingsApple(){
    //settings
    var marketBoxCost = 0;
    var numberOfApples = 0;
    var inPacket = 0;
    var profitPerPack = 0;

    // variables from calcuations
    var costPerApple = 0;
    var packsNumber = 0;

    function appleBoxCost(boxCost){
        marketBoxCost = boxCost;

    }
    function getBoxCost(){

        return marketBoxCost;
    }

    function appleInBox(applesNumber){
        numberOfApples = applesNumber;

    }

    function getApplesInBox(){
        return numberOfApples;

    }
    function applesPerPack(applesInpack){
        inPacket = applesInpack;


    }
    function getApplesPerPack(){

        return inPacket;
    }

    function applesProfit(packProfit){
        profitPerPack = packProfit;
    }
    function getApplesProfit(){

        return profitPerPack;
    }

    //calculations
    function applesCost(){
        // costPerApple = marketBoxCost/numberOfApples;
        costPerApple = getBoxCost()/getApplesInBox()
    }
    
    function getAppleCost(){
        return costPerApple;
    }
    function numeberOfPacks(){
return packsNumber = numberOfApples/inPacket;
    }



    return{

        appleBoxCost,
        getBoxCost,
        appleInBox,
        getApplesInBox,
        applesPerPack,
        getApplesPerPack,
        applesProfit,
        getApplesProfit,
        applesCost,
        getAppleCost,
        numeberOfPacks
    }
}