function SettingsApple(){
    
    var marketBoxCost = 0
    function appleBoxCost(boxCost){
        marketBoxCost = boxCost;

    }
    function getBoxCost(){

        return marketBoxCost;
    }
    
    return{

        appleBoxCost,
        getBoxCost
    }
}