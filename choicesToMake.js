var Homeless = Homeless || {};

Homeless.choicesToMake = {

    init: function() {
        this.game.stage.backgroundColor = "#00000";
    },
    create: function() {
        Homeless.game.global.coins = Homeless.game.global.coins+4;

        this.style = { 
            font: "bold 30px Arial", 
            fill: "#CC0000", 
            align: "center" 
        };

        this.styleButtons = { 
            font: "bold 20px Arial", 
            fill: "#CC0000", 
            align: "center",
            stroke:'#000000',
            strokeThickness: 6,    
            fill: '#FFC300'  
        };

        // go back to EX button.
        var blueBoxHeight = 1.7;
        var blueButtonFivePositionX = this.game.width/2-150;
        var blueButtonFivePositionY = this.game.height/10;
        this.blueButtonFive = this.game.add.button(blueButtonFivePositionX, blueButtonFivePositionY, "blueButton", this.exBoyFriend, this);
        this.blueButtonFive.anchor.set(0.5);
        this.blueButtonFive.alpha = 0.2;
        this.blueButtonFive.scale.setTo(4.0, blueBoxHeight);
        this.blueButtonFive.inputEnabled = true;
        var blueButtonFiveText = "GO BACK TO EX";     
        var blueButtonFiveTextOnScreen = this.game.add.text(blueButtonFivePositionX, blueButtonFivePositionY, blueButtonFiveText, this.styleButtons);
        blueButtonFiveTextOnScreen.anchor.set(0.5);
        blueButtonFiveTextOnScreen.alpha = 0.1;
        blueButtonFiveTextOnScreen.lineSpacing = -15;
        this.game.add.tween(blueButtonFiveTextOnScreen).to( { alpha: 1 }, 2000, "Linear", true);

        // Sleep in a park.
        var blueBoxHeight = 1.7;
        var blueButtonSixPositionX = this.game.width/2+150;
        var blueButtonSixPositionY = this.game.height/10;
        this.blueButtonSix = this.game.add.button(blueButtonSixPositionX, blueButtonSixPositionY, "blueButton", this.sleepPark, this);
        this.blueButtonSix.anchor.set(0.5);
        this.blueButtonSix.alpha = 0.2;
        this.blueButtonSix.scale.setTo(4.0, blueBoxHeight);
        this.blueButtonSix.inputEnabled = true;
        var blueButtonSixText = "Affordable Housing???";     
        var blueButtonSixTextOnScreen = this.game.add.text(blueButtonSixPositionX, blueButtonSixPositionY, blueButtonSixText, this.styleButtons);
        blueButtonSixTextOnScreen.anchor.set(0.5);
        blueButtonSixTextOnScreen.alpha = 0.1;
        blueButtonSixTextOnScreen.lineSpacing = -15;
        this.game.add.tween(blueButtonSixTextOnScreen).to( { alpha: 1 }, 2000, "Linear", true);

        // retreatism button.
        var blueButtonOnePositionX = this.game.width/2-150;
        var blueButtonOnePositionY = this.game.height/2-50;
        this.blueButtonOne = this.game.add.button(blueButtonOnePositionX, blueButtonOnePositionY, "blueButton", this.buyAlcohol, this);
        this.blueButtonOne.anchor.set(0.5);
        this.blueButtonOne.alpha = 0.2;
        this.blueButtonOne.scale.setTo(4.0, blueBoxHeight);
        this.blueButtonOne.inputEnabled = true;
        var blueButtonOneText = "RETREATISM \n GET DRUNK \n - $2.00 ";     
        var blueButtonOneTextOnScreen = this.game.add.text(blueButtonOnePositionX, blueButtonOnePositionY, blueButtonOneText, this.styleButtons);
        blueButtonOneTextOnScreen.anchor.set(0.5);
        blueButtonOneTextOnScreen.alpha = 0.1;
        blueButtonOneTextOnScreen.lineSpacing = -15;
        this.game.add.tween(blueButtonOneTextOnScreen).to( { alpha: 1 }, 2000, "Linear", true);

        // innovation button.
        var blueButtonTwoPositionX = this.game.width/2+150;
        var blueButtonTwoPositionY = this.game.height/2-50;
        this.blueButtonTwo = this.game.add.button(blueButtonTwoPositionX, blueButtonTwoPositionY, "blueButton", this.illegal, this);
        this.blueButtonTwo.anchor.set(0.5);
        this.blueButtonTwo.alpha = 0.2;
        this.blueButtonTwo.scale.setTo(4.0, blueBoxHeight);
        this.blueButtonTwo.inputEnabled = true;
        var blueButtonTwoText = "INNOVATION \n DO SOMETHING \n ILLEGAL \n TO MAKE $$$";     
        var blueButtonTwoTextOnScreen = this.game.add.text(blueButtonTwoPositionX, blueButtonTwoPositionY+5, blueButtonTwoText, this.styleButtons);
        blueButtonTwoTextOnScreen.anchor.set(0.5);
        blueButtonTwoTextOnScreen.alpha = 0.1;
        blueButtonTwoTextOnScreen.lineSpacing = -15;
        this.game.add.tween(blueButtonTwoTextOnScreen).to( { alpha: 1 }, 2000, "Linear", true);

        // shelter button.
        var blueButtonThreePositionX = this.game.width/2+150;
        var blueButtonThreePositionY = this.game.height/2+50;
        this.blueButtonThree = this.game.add.button(blueButtonThreePositionX, blueButtonThreePositionY, "blueButton", this.shelter, this);
        this.blueButtonThree.anchor.set(0.5);
        this.blueButtonThree.alpha = 0.2;
        this.blueButtonThree.scale.setTo(4.0, blueBoxHeight);
        this.blueButtonThree.inputEnabled = true;
        var blueButtonThreeText = "GO TO A WOMAN'S \n SHELTER.";     
        var blueButtonThreeTextOnScreen = this.game.add.text(blueButtonThreePositionX, blueButtonThreePositionY+5, blueButtonThreeText, this.styleButtons);
        blueButtonThreeTextOnScreen.anchor.set(0.5);
        blueButtonThreeTextOnScreen.alpha = 0.1;
        blueButtonThreeTextOnScreen.lineSpacing = -15;
        this.game.add.tween(blueButtonThreeTextOnScreen).to( { alpha: 1 }, 2000, "Linear", true);
       
        // beg for change button.
        var blueButtonFourPositionX = this.game.width/2-150;
        var blueButtonFourPositionY = this.game.height/2+50;
        this.blueButtonFour = this.game.add.button(blueButtonFourPositionX, blueButtonFourPositionY, "blueButton", this.startGame, this);
        this.blueButtonFour.anchor.set(0.5);
        this.blueButtonFour.alpha = 0.2;
        this.blueButtonFour.scale.setTo(4.0, blueBoxHeight);
        this.blueButtonFour.inputEnabled = true;
        var blueButtonFourText = "CHANGE PLEASE?";     
        var blueButtonFourTextOnScreen = this.game.add.text(blueButtonFourPositionX, blueButtonFourPositionY+5, blueButtonFourText, this.styleButtons);
        blueButtonFourTextOnScreen.anchor.set(0.5);
        blueButtonFourTextOnScreen.alpha = 0.1;
        blueButtonFourTextOnScreen.lineSpacing = -15;
        this.game.add.tween(blueButtonFourTextOnScreen).to( { alpha: 1 }, 2000, "Linear", true);
    

        //create player.
        this.player = this.add.sprite(this.game.width/2, this.game.height / 2, 'player', 7);
        this.player.anchor.setTo(0.5);
        this.player.animations.add("player", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 7, true);
        this.game.physics.arcade.enable(this.player);
        this.player.body.velocity.x = 0;
        this.player.body.allowGravity = false;
        this.player.scale.setTo(1.7);

        this.player.play("player");



        this.loadStartingTextAndMoney();

        // var infoThreeText = "what do want to do? \n "                            

        // var text = this.game.add.text(this.game.width/2, this.game.height-400, infoThreeText, this.style);
        // text.anchor.set(0.5);
        // text.alpha = 0.1;

        // this.game.add.tween(text).to( { alpha: 1 }, 2000, "Linear", true);
    },

    update: function() {

        this.mouseOverButton();
       
    },

    mouseOverButton: function(){
        if (this.blueButtonOne.input.pointerOver())
        {
            this.blueButtonOne.alpha = 1;
            this.player.scale.setTo(-1.7, 1.7);
        } else {
            this.blueButtonOne.alpha = 0.5;
        }
        if (this.blueButtonTwo.input.pointerOver())
        {
            this.blueButtonTwo.alpha = 1;
            this.player.scale.setTo(1.7, 1.7);

        } else {
            this.blueButtonTwo.alpha = 0.5;
        }
         if (this.blueButtonThree.input.pointerOver())
        {
            this.blueButtonThree.alpha = 1;
            this.player.scale.setTo(1.7, 1.7);

        } else {
            this.blueButtonThree.alpha = 0.5;
        }
         if (this.blueButtonFour.input.pointerOver())
        {
            this.blueButtonFour.alpha = 1;
            this.player.scale.setTo(-1.7, 1.7);
        } else {
            this.blueButtonFour.alpha = 0.5;
        }
         if (this.blueButtonFive.input.pointerOver())
        {
            this.blueButtonFive.alpha = 1;
            this.player.scale.setTo(-1.7, 1.7);
        } else {
            this.blueButtonFive.alpha = 0.5;
        }
        if (this.blueButtonSix.input.pointerOver())
        {
            this.blueButtonSix.alpha = 1;
            this.player.scale.setTo(1.7, 1.7);

        } else {
            this.blueButtonSix.alpha = 0.5;
        }
    },

    loadStartingTextAndMoney: function(){
        this.textOnScreenWidth = this.game.height-35;
        this.amountOfMoney = this.add.text(this.game.width/2, this.textOnScreenWidth, "you have: $" + Homeless.game.global.coins.toFixed(2), this.style);
        this.amountOfMoney.anchor.set(0.5);
    },


    exBoyFriend: function(){
        this.game.state.start("goBackToExOneState", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
        console.log("clicking exbofriendButton");
    },


    buyAlcohol: function(){
        if(Homeless.game.global.coins <= 0.00) {
            console.log("not enough money to buy beer");
            console.log(Homeless.game.global.record);
            this.game.state.start("dead", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);

        } else {
            Homeless.game.global.coins -= 2.00;
            console.log("you bought beer");
            console.log(Homeless.game.global.record);

            var blueButtonOnePositionX = this.game.width/2-150;
            var blueButtonOnePositionY = this.game.height/2-140;
            this.beerPic = this.game.add.sprite(blueButtonOnePositionX, blueButtonOnePositionY+40, "beer");
            this.beerPic.anchor.set(0.5);
            // this.beerPic.alpha = 0.2;
            this.beerPic.scale.set(0.23);
            // this.beerPic.inputEnabled = true;

            this.beerPic.anchor.set(0.5);
            this.beerPic.alpha = 1;
            this.game.add.tween(this.beerPic).to( { alpha: 0 }, 2000, "Linear", true);

            this.amountOfMoney.destroy();
            this.amountOfMoney = this.add.text(this.game.width/2,  this.textOnScreenWidth, "you have: $" + Homeless.game.global.coins.toFixed(2), this.style);
            this.amountOfMoney.anchor.set(0.5);
            console.log(Homeless.game.global.coins);
        }
    },

    illegal: function(){
        if(Homeless.game.global.record == false) {
            Homeless.game.global.coins += 10.00;
            Homeless.game.global.countUntilJail = Homeless.game.global.countUntilJail+1;
            console.log("you got money");
            console.log("your record: " + Homeless.game.global.record);
            console.log("amount of clicks to jail time: " + Homeless.game.global.countUntilJail);

            this.amountOfMoney.destroy();
            this.amountOfMoney = this.add.text(this.game.width/2, this.textOnScreenWidth, "you have: $" + Homeless.game.global.coins.toFixed(2), this.style);
            this.amountOfMoney.anchor.set(0.5);
            console.log(Homeless.game.global.coins);      
        } 

        if(Homeless.game.global.countUntilJail >= 3){
            console.log("you got caught by the police! now you have a record.");
            Homeless.game.global.record = true;
            this.game.state.start("jail", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
        }
    },


    shelter: function(){
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log("shelter button clicked!");
            console.log(Homeless.game.global);
            this.game.state.start("sheltersTextChoice", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
            //this.fade("PlayGame");
        }, this);        
    },

    startGame: function() {
        // var cheer = this.game.add.audio("cheer");
        // cheer.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log("info One State");
            console.log(Homeless.game.global);
            this.game.state.start("Game", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
            //this.fade("PlayGame");
        }, this);
    },
};