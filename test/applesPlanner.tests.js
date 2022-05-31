describe('The Apples Price Planner function' , function(){
    it('should show be able to enter how much a box of apples costs e.g R50' , function(){

        let appleSettings = SettingsApple()
        appleSettings.appleBoxCost(50);


        assert.equal(50, appleSettings.getBoxCost());

        assert.deepEqual([2,2],[2,2]);
    });

});