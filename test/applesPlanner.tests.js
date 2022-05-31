describe('The Apples Price Planner function' , function(){
    it('should show be able to enter how much a box of apples costs e.g R50' , function(){

        let appleSettings = SettingsApple()
        appleSettings.appleBoxCost(50);


        assert.equal(50, appleSettings.getBoxCost());

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should show be able to enter how many apples in a box e.g 60' , function(){

        let appleSettings = SettingsApple()
        appleSettings.appleInBox(75);


        assert.equal(75, appleSettings.getApplesInBox());

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should show be able to enter how many apples she can sell in a pack e.g 5 per packet' , function(){

        let appleSettings = SettingsApple()
        appleSettings.applesPerPack(5);


        assert.equal(5, appleSettings.getApplesPerPack());

        // assert.deepEqual([2,2],[2,2]);
    });


    it('should show be able to enter how profit they would like to make e.g R3 profit per pack' , function(){

        let appleSettings = SettingsApple()
        appleSettings.applesProfit(3);


        assert.equal(3, appleSettings.getApplesProfit());

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should show be able to calculate the price per apple based on the cost price, if box is R50 then 10 apples cost R5' , function(){

        let appleSettings = SettingsApple()
        appleSettings.appleBoxCost(50);
        appleSettings.appleInBox(10);
        appleSettings.applesCost();



        assert.equal(5, appleSettings.getAppleCost());

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should show be able to calculate the price per apple based on the cost price, if box is R50 then 10 apples cost R5' , function(){

        let appleSettings = SettingsApple()
        appleSettings.appleBoxCost(100);
        appleSettings.appleInBox(5);
        appleSettings.applesCost();



        assert.equal(20, appleSettings.getAppleCost());

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should show be able to calculate the number of box that we can have in a packet eg. ' , function(){

        let appleSettings = SettingsApple();
        // appleSettings.appleBoxCost(1);
        appleSettings.appleInBox(20);
        // appleSettings.applesCost();
        appleSettings.applesPerPack(2)




        assert.equal(10, appleSettings.numeberOfPacks());

        // assert.deepEqual([2,2],[2,2]);
    });

});