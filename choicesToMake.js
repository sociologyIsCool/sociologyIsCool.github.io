var Homeless = Homeless || {};

Homeless.choicesToMake = {

    init: function() {
        this.game.stage.backgroundColor = "#00000";
    },
    create: function() {

        // gets players name.
        this.initializedName =localStorage.getItem("playerName");

        // Homeless.game.global.coins = Homeless.game.global.coins+4;

        this.click = this.game.add.audio('click');
        this.game.time.events.loop(Phaser.Timer.SECOND*6, this.kidTalkingToMommy, this);
        this.game.time.events.loop(Phaser.Timer.SECOND*5, this.mommyTalking, this);




        this.style = { 
            font: "bold 30px Arial", 
            fill: "#CC0000", 
            align: "center" 
        };

         this.styleKid = { 
            font: "14px Arial", 
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

        this.styleBeer = { 
            font: "bold 30px Arial", 
            fill: "#CC0000", 
            align: "center",
            stroke:'#000000',
            strokeThickness: 8,    
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

        // Compassionate Disruption.
        var blueBoxHeight = 1.7;
        var blueButtonSixPositionX = this.game.width/2+150;
        var blueButtonSixPositionY = this.game.height/10;
        this.blueButtonSix = this.game.add.button(blueButtonSixPositionX, blueButtonSixPositionY, "blueButton", this.compassionateDisruption, this);
        this.blueButtonSix.anchor.set(0.5);
        this.blueButtonSix.alpha = 0.2;
        this.blueButtonSix.scale.setTo(4.0, blueBoxHeight);
        this.blueButtonSix.inputEnabled = true;
        var blueButtonSixText = "COMPASSIONATE \n DISRUPTION???";     
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
        this.blueButtonThree = this.game.add.button(blueButtonThreePositionX, blueButtonThreePositionY, "blueButton", this.canYouGetIntoShelter, this);
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
    
        this.isChildThere();

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


    },


    update: function() {

        var thereIsANewName = true;
        this.getNames = this.checkName();
        if(this.initializedName != this.getNames && thereIsANewName){
            this.initializedName = this.getNames;
            this.amountOfMoney.destroy();
            this.loadStartingTextAndMoney();
            thereIsANewName = false;
        } 

        this.mouseOverButton();

        if(Homeless.game.global.childThere == true){
            this.childRunning();
            if(this.kidText){
                this.kidText.x = Math.floor(this.kid.x + this.kid.width / 2-40);
                this.kidText.y = Math.floor(this.kid.y + this.kid.height / 2-100);
            }
        }
    },

    checkName: function(){
        this.getname = localStorage.getItem("playerName");
        return this.getname;
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


    mommyTalking: function(){

        this.momHelpPls = ["What am I going to do",
                           "I love you son",
                           "my poor baby",
                          ];

        this.momRandomHelpPls = Phaser.ArrayUtils.getRandomItem(this.momHelpPls);

        this.momTextStyle = { font: "20px Arial", 
                              fill: "#ffffff", 
                              // wordWrap: true, 
                              align: "center", 
                              stroke: '#000000',
                              strokeThickness: 5,
                            };

        this.momText = this.game.add.text(this.game.width/2,this.game.height/2-140,this.momRandomHelpPls,this.momTextStyle);
        this.momText.anchor.set(0.5);
        this.momText.alpha = 0.9;
        this.momPls = this.game.add.tween(this.momText).to({alpha:1}, 3000, "Linear", true);
        this.momPls.onComplete.add(function(){this.momText.destroy();},this); 

    },


    kidTalkingToMommy: function(){
        if(Homeless.game.global.childThere == true){

             this.helpPls = ["I Love u Mommy!",
                             "I'm hungry...",
                             "ewww a bug!",
                             "It's ok mommy!",
                             "Everything will \n be ok!",
                             "I love u Mommy!"
                            ];

            this.randomHelpPls = Phaser.ArrayUtils.getRandomItem(this.helpPls);
            var style = { font: "20px Arial",
                          fill: "CC0000",
                          align: "center",
                          stroke: '#000000',
                          strokeThickness: 5,
                          fill: '#DCDCDC'
                        };

            this.kidTextStyle = { font: "20px Arial", 
                                  fill: "#ffffff", 
                                  // wordWrap: true, 
                                  align: "center", 
                                  stroke: '#000000',
                                  strokeThickness: 5,
                                };

            this.kidText = this.game.add.text(0,0,this.randomHelpPls,this.kidTextStyle)
            this.kidText.anchor.set(0.5);
            this.kidText.alpha = 0.9;

            this.pls = this.game.add.tween(this.kidText).to({alpha:1}, 3000, "Linear", true);
            this.pls.onComplete.add(function(){this.kidText.destroy();},this); 
        }


    },


    isChildThere: function(){
        if(Homeless.game.global.childThere == true){
            //create kid.
            this.kid = this.add.sprite(20, this.game.height/2+65, 'kid', 5);
            this.kid.anchor.setTo(0.5);
            this.kid.animations.add("kid", [0, 1, 2, 3, 4, 5], 7, true);
            this.game.physics.arcade.enable(this.kid);
            this.kid.body.velocity.x = 10;
            this.kid.body.allowGravity = false;
            this.kid.scale.setTo(1.2,1.2);


       
        } else {
            console.log("child taken away");
            this.textOnScreenWidth = this.game.height-35;
            this.takenAway = this.add.text(this.game.width/2, this.textOnScreenWidth+30, "Kid Got Taken Away", this.styleKid);
            this.takenAway.anchor.set(0.5);
        }
    },

    childRunning: function(){
         if(this.kid.body.x >= 500){
            console.log(this.kid.body.x);
            this.kid.scale.setTo(-1.2,1.2);
            this.kid.body.velocity.x = -80;
            this.kid.play("kid");
        }
        else if(this.kid.body.x <= 70){
           
            this.kid.scale.setTo(1.2,1.2);
            this.kid.body.velocity.x = this.kid.body.velocity.x += 2;
            this.kid.play("kid");
        }
    },


    loadStartingTextAndMoney: function(){
        this.textOnScreenWidth = this.game.height-35;
        this.amountOfMoney = this.add.text(this.game.width/2, this.textOnScreenWidth, localStorage.getItem("playerName") + " has: $" + Homeless.game.global.coins.toFixed(2), this.style);
        this.amountOfMoney.anchor.set(0.5);
    },


    exBoyFriend: function(){
        Homeless.game.global.goBackToEx = true;
        this.click.play();
        this.game.state.start("goBackToExOneState", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
        console.log("clicking exbofriendButton");
    },

    buyAlcohol: function(){
        Homeless.game.global.retreatism = true;
        this.click.play();
        if(Homeless.game.global.gotAlcohol == false && Homeless.game.global.coins >=2) {
            console.log(Homeless.game.global.record);
            Homeless.game.global.gotAlcohol = true;
            Homeless.game.global.coins -= 2.00;
            this.game.state.start("dead", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);

        } 
        else if(Homeless.game.global.coins <= 0) {
            console.log("you bought beer");
            console.log(Homeless.game.global.record);

            // var blueButtonOnePositionX = this.game.width/2-150;
            // var blueButtonOnePositionY = this.game.height/2-140;
            // this.beerPic = this.game.add.sprite(blueButtonOnePositionX, blueButtonOnePositionY+40, "beer");
            // this.beerPic.anchor.set(0.5);
            // this.beerPic.scale.set(0.23);

            var blueButtonOnePositionX = this.game.width/2-150;
            var blueButtonOnePositionY = this.game.height/2-140;
            this.beerPic = this.add.text(blueButtonOnePositionX, blueButtonOnePositionY+90, "NO MONEY!!!",this.styleBeer);
            this.beerPic.anchor.set(0.5);
            // this.beerPic.alpha = 0.2;
            // this.beerPic.scale.set(0.23);
            // this.beerPic.inputEnabled = true;

            this.beerPic.alpha = 1;
            this.game.add.tween(this.beerPic).to( { alpha: 0 }, 2000, "Linear", true);

            // this.amountOfMoney.destroy();
            // this.amountOfMoney = this.add.text(this.game.width/2,  this.textOnScreenWidth, "you have: $" + Homeless.game.global.coins.toFixed(2), this.style);
            // this.amountOfMoney.anchor.set(0.5);
            // console.log(Homeless.game.global.coins);
        }
    },

    compassionateDisruption: function(){
        Homeless.game.global.compassionateDisruption = true;
        this.click.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log("compassionate Disruption button clicked!");
            console.log(Homeless.game.global.compassionateDisruption);
            this.game.state.start("compassionateDisruption", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
            //this.fade("PlayGame");
        }, this);       
    },

    illegal: function(){
        this.click.play();
        if(Homeless.game.global.record == false) {
            Homeless.game.global.coins += 10.00;
            Homeless.game.global.countUntilJail = Homeless.game.global.countUntilJail+1;
            console.log("you got money");
            console.log("your record: " + Homeless.game.global.record);
            console.log("amount of clicks to jail time: " + Homeless.game.global.countUntilJail);

            this.amountOfMoney.destroy();
            this.amountOfMoney = this.add.text(this.game.width/2, this.textOnScreenWidth, localStorage.getItem("playerName") + " has: $" + Homeless.game.global.coins.toFixed(2), this.style);
            this.amountOfMoney.anchor.set(0.5);
            console.log(Homeless.game.global.coins);      
        } 

        if(Homeless.game.global.countUntilJail >= 3){
            console.log("you got caught by the police! now you have a record.");
            Homeless.game.global.record = true;
            this.game.state.start("jail", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
        }
    },

    canYouGetIntoShelter: function(){

            
            // coins : 0,
            // countUntilJail: 0,
            // record : false,
            // compassionateDisruption: false,
            // gotAlcohol : false,
            // childThere : true,
            // // if begging text is false the info scene after the begging for change will not show.
            // beggingText : true,
            // goBackToEx : false,
            // retreatism : false,
            // changePlease : false,

        if(Homeless.game.global.changePlease == true && Homeless.game.global.compassionateDisruption == true){
            this.shelterGotIn();
        } else {
            this.shelter();
        }
    },

    shelter: function(){
        this.click.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log("shelter button clicked!");
            console.log("change please is: "+ Homeless.game.global.changePlease);
            console.log("compassionate disruption is: "+ Homeless.game.global.compassionateDisruption);

            this.game.state.start("sheltersTextChoice", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
            //this.fade("PlayGame");
        }, this);        
    },

    shelterGotIn: function(){
        this.click.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log("shelter button clicked!");
            console.log("change please is: "+ Homeless.game.global.changePlease);
            console.log("compassionate disruption is: "+ Homeless.game.global.compassionateDisruption);
            this.game.state.start("sheltersTextOneChoice", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
            //this.fade("PlayGame");
        }, this);        
    },

    startGame: function() {
        Homeless.game.global.changePlease = true;
        this.click.play();
        // var cheer = this.game.add.audio("cheer");
        // cheer.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log("info One State");
            console.log(Homeless.game.global);
            // Homeless.game.global.coins = 0;
            this.game.state.start("Game", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
            //this.fade("PlayGame");
        }, this);
    },
};