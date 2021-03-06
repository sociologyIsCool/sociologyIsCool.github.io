var Homeless = Homeless || {};

Homeless.GameState = {

init: function() {
        //constants
        this.RUNNING_SPEED = 80;
        this.JUMPING_SPEED = 500;
        this.BOUNCING_SPEED = 150;

        this.chaChing = this.game.add.audio('chaChing');

        //gravity
        // this.game.physics.arcade.gravity.y = 1000;
        this.game.stage.backgroundColor = "#4488AA";
        this.game.world.setBounds(0, 0, 770, 513);

        //cursor keys for player movement
        this.cursors = this.game.input.keyboard.createCursorKeys();
    },
    
    create: function() {
    	var backgroundPic = this.game.add.image(0, 0, "chinaTown");
        backgroundPic.anchor.set(0.5);
        this.playerAlive = true;

	    //  Create our Timer
	    this.timer = this.game.time.create(false);

	    //  TimerEvent, after 20 seconds game will go to next scene.
	    // infoThree.js
	    this.timer.loop(20000, this.updateCounter, this);

	    //  Start the timer running - this is important!
	    //  It won't start automatically, allowing you to hook it to button events and the like.
	    this.timer.start();

        // this.playerHasHat = false;
        // this.game.bgMusic = this.game.add.audio("coolHipHop");
        // this.game.bgMusic.loopFull(1);
        // this.squeek = this.game.add.audio("squeekSound");
        // this.ouch = this.game.add.audio("ouch");
        // this.meow = this.game.add.audio("meow");
        // this.cheer = this.game.add.audio("cheer");
        // this.boing = this.game.add.audio("boing");

        //load current level method.
        this.loadLevel();

        //this.createOnscreenControls();
        this.createOnscreenControls();
    },

	update: function(){

	    this.player.body.velocity.x = 0;

		if (this.cursors.left.isDown || this.player.customParams.isMovingLeft) {
		    this.player.body.velocity.x = -this.RUNNING_SPEED;
		    this.player.scale.setTo(-1.5, 1.5);
		    this.player.play("player");
		} else if (this.cursors.right.isDown || this.player.customParams.isMovingRight) {
		    this.player.body.velocity.x = this.RUNNING_SPEED;
		    this.player.scale.setTo(1.5, 1.5);
		    this.player.play("player");
		} else {
		    this.player.animations.stop();
		    this.player.frame = 5;
		}
	},

	loadLevel: function() {

		this.southParkPic = this.game.add.image(350, this.game.height, "southPark");
		this.southParkPic.anchor.set(0.5);
		this.southParkPic.scale.setTo(0.3,0.3);

		//dollar
		this.dollar = this.add.sprite(this.game.rnd.integerInRange(20,this.game.width), this.game.height - 80, "dollar");
		    this.dollar.anchor.set(0.5);
		    this.dollar.scale.set(0.07);
		    this.dollar.inputEnabled = true;
		    this.dollar.useHandCursor = true;

		//ten dollar
		this.tenDollar = this.add.sprite(this.game.rnd.integerInRange(20,this.game.width), this.game.height, "dollar");
		    this.tenDollar.anchor.set(0.5);
		    this.tenDollar.scale.set(0.07);
		    this.tenDollar.inputEnabled = true;
		    this.tenDollar.useHandCursor = true;

		this.quarter = this.add.sprite(this.game.rnd.integerInRange(20,this.game.width), this.game.height-100, "quarter");
			this.quarter.anchor.set(0.5);
			this.quarter.scale.set(0.09);
			this.quarter.inputEnabled = true;
			this.quarter.useHandCursor = true;

		this.quarterTwo = this.add.sprite(this.game.rnd.integerInRange(20,this.game.width), this.game.height-200, "quarter");
			this.quarterTwo.anchor.set(0.5);
			this.quarterTwo.scale.set(0.09);
			this.quarterTwo.inputEnabled = true;
			this.quarterTwo.useHandCursor = true;

		this.style = {  font: "bold 30px Arial", 
			            fill: "#CC0000", 
			            align: "center",
			            stroke:'#000000',
			            strokeThickness: 3,    
			            fill: '#FFC300'  };

		this.updateUrMonies = this.add.text(this.game.width/2, 40, "Find Change", this.style);
		this.updateUrMonies.anchor.set(0.5);
		this.updateUrMonies.fixedToCamera = true;

		//southpark 
		this.game.time.events.loop(Phaser.Timer.SECOND*7.5, this.smackTalk, this);

		
		//create player.
		this.player = this.add.sprite(this.game.width/2, this.game.height+20, 'player', 5);
		this.player.anchor.setTo(0.5);
		this.player.animations.add("player", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 7, true);
		this.player.animations.add("playerJump", [6, 7], 7, true);

		this.game.physics.arcade.enable(this.player);
		this.player.body.allowGravity = false;
		//create a custom object for the player controls.
		this.player.customParams = {};
		this.player.body.collideWorldBounds = true;
		this.player.body.bounce.set(1, 0);
		//follow player with the camera.
		this.game.camera.follow(this.player);
		this.player.scale.setTo(-1.5, 1.5);

		//beg text
		this.game.time.events.loop(Phaser.Timer.SECOND*6, this.begForChange, this);

		//destroy dollar and coins.
		this.dollar.events.onInputDown.add(this.destroyDollar, this);
		this.tenDollar.events.onInputDown.add(this.destroyTenDollar, this);
		this.quarter.events.onInputDown.add(this.destroyQuarter, this);
		this.quarterTwo.events.onInputDown.add(this.destroyQuarterTwo, this);

	},

	updateCounter: function(){
		this.infoThreeDialogState();
	},

	destroyDollar: function(){
		this.chaChing.play();
		this.dollar.destroy();
		this.updateUrMonies.destroy();

        Homeless.game.global.coins = Homeless.game.global.coins + 1;
        console.log(Homeless.game.global.coins);

        this.updateUrMonies = this.add.text(this.game.width/2, this.game.height - 80, "Change: $" + Homeless.game.global.coins.toFixed(2), this.style);
		this.updateUrMonies.anchor.set(0.5);
	    this.updateUrMonies.fixedToCamera = true;
	},

	destroyTenDollar: function(style){
		this.chaChing.play();
		this.tenDollar.destroy();
		this.updateUrMonies.destroy();

        Homeless.game.global.coins = Homeless.game.global.coins + 1.00;
        console.log(Homeless.game.global.coins);

        this.updateUrMonies = this.add.text(this.game.width/2, this.game.height - 80, "Change: $" + Homeless.game.global.coins.toFixed(2), this.style);
		this.updateUrMonies.anchor.set(0.5);
	    this.updateUrMonies.fixedToCamera = true;
	},

	destroyQuarter: function(style){
        this.chaChing.play();
		this.quarter.destroy();
		this.updateUrMonies.destroy();

        Homeless.game.global.coins = Homeless.game.global.coins + 0.25;
        console.log(Homeless.game.global.coins);

        this.updateUrMonies = this.add.text(this.game.width/2, this.game.height - 80, "Change: $" + Homeless.game.global.coins.toFixed(2), this.style);
		this.updateUrMonies.anchor.set(0.5);
	    this.updateUrMonies.fixedToCamera = true;
	},

	destroyQuarterTwo: function(style){
        this.chaChing.play();
		this.quarterTwo.destroy();
		this.updateUrMonies.destroy();

        Homeless.game.global.coins = Homeless.game.global.coins + 0.25;
        console.log(Homeless.game.global.coins);

        this.updateUrMonies = this.add.text(this.game.width/2, this.game.height - 80, "Change: $" + Homeless.game.global.coins.toFixed(2), this.style);
		this.updateUrMonies.anchor.set(0.5);
	    this.updateUrMonies.fixedToCamera = true;
	},

	begForChange: function(){

		var helpPls = ["People are so mean...",
						"People Are Treating \n Me Like I'm \n Invisible...",
						"Nobody wants to \n hire me...",
						"People think i'm trash...",
						"Change \n Please...",
						"Some People are so \n Cold...",
						"Change \n Please...",
						"There's no hope...",
						"Change \n Please...",
						"Change please...",
						"I used to be just \n like you people...",
						"I had a job \n until I got Laid off...",
						"Nobody Cares...",
						"Nobody wants to \n hire me..."
					  ];


		var randomHelpPls = Phaser.ArrayUtils.getRandomItem(helpPls);
		var style = { font: "20px Arial",
					  fill: "CC0000",
					  align: "center",
					  stroke: '#000000',
					  strokeThickness: 5,
					  fill: '#DCDCDC'
					};

		var askForHelp = this.game.add.text(this.game.width/2-120, this.game.height - 210, randomHelpPls, style);
			askForHelp.anchor.set(0.5);
			askForHelp.alpha = 0.9;
			askForHelp.fixedToCamera = true;

		var plsHelpTween = this.game.add.tween(askForHelp).to({alpha:1}, 3000, "Linear", true);
			plsHelpTween.onComplete.add(function(){askForHelp.destroy();});	
	},

	smackTalk: function(){

		var meanStuff = [
						 "LAZY BUM",
						 "DRUG \n ADDICT", 
						 "BUM!",
						 "She Must be \n CRAZY.",
						 "Eww, A Bum.", 
						 "BEGGAR.", 
						 "Ewwww, \n She Stinks!", 
						 "She Must be \n On DRUGS",
						 "UNEDUCATED \n TRASH!",
						 "Get A Job.",
						 "Get A Job.",
						 "Sad..."
						];

		var randomMeanStuff = Phaser.ArrayUtils.getRandomItem(meanStuff);

		var style = { font: "bold 60px Arial", 
	                  fill: "#CC0000", 
	                  align: "center",
	                  stroke:'#000000',
	                  strokeThickness: 6,    
	                  fill: '#43d637' 
	              	};

	    var smackText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, randomMeanStuff, style);
		    smackText.anchor.set(0.5);
		    smackText.alpha = 0.5;

	    var craptalk = this.game.add.tween(smackText).to({ alpha: 1 }, 2000, "Linear", true);
	    	craptalk.onComplete.add(function(){smackText.destroy();});
	},


	infoThreeDialogState: function() {


		// Homeless.game.global = {
		// 		 coins : 0,
		// 		 countUntilJail: 0,
		// 		 record : false,
		// 		 gotAlcohol : false,
		// 		 childThere : true,
		// 		 beggingText : true

		// 		}


        if(Homeless.game.global.beggingText == true){
	        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
	            console.log("info One State");
	            console.log(Homeless.game.global);
	            //this.state.start("infoTwo");
	            Homeless.game.global.beggingText = false;
	            this.game.state.start("infoThree", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
	            //this.fade("PlayGame");
	        }, this);
    	}else{
    		 this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
	            console.log("info One State");
	            console.log(Homeless.game.global);
	            //this.state.start("infoTwo");
	            this.game.state.start("choicesToMake", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
	            //this.fade("PlayGame");
	        }, this);

    	}
    },

	createOnscreenControls: function() {

		//buttons and camera
	    this.leftArrow = this.add.button(80, this.game.height - 80, 'arrowButton');
	    this.leftArrow.scale.x = -1;
	    this.rightArrow = this.add.button(100, this.game.height - 80, 'arrowButton');
	    //this.actionButton = this.add.button(this.game.width - 100, this.game.height - 75, 'actionButton');
	    this.leftArrow.alpha = 0.7;
	    this.rightArrow.alpha = 0.7;
	    //this.actionButton.alpha = 1;
	    this.leftArrow.fixedToCamera = true;
	    this.rightArrow.fixedToCamera = true;
	    //this.actionButton.fixedToCamera = true;

	    //beg
	    // this.actionButton.events.onInputDown.add(function() {
	    //     this.player.customParams.mustBeg = true;
	    // }, this);

	    // this.actionButton.events.onInputUp.add(function() {
	    //     this.player.customParams.mustBeg = false;
	    // }, this);

	    // this.actionButton.events.onInputOver.add(function() {
	    //     this.player.customParams.mustBeg = true;
	    // }, this);

	    // this.actionButton.events.onInputOut.add(function() {
	    //     this.player.customParams.mustBeg = false;
	    // }, this);

	    //left
	    this.leftArrow.events.onInputDown.add(function() {
	        this.player.customParams.isMovingLeft = true;
	        	        console.log("left");

	    }, this);

	    this.leftArrow.events.onInputUp.add(function() {
	        this.player.customParams.isMovingLeft = false;
	    }, this);

	    this.leftArrow.events.onInputOver.add(function() {
	        this.player.customParams.isMovingLeft = true;
	    }, this);

	    this.leftArrow.events.onInputOut.add(function() {
	        this.player.customParams.isMovingLeft = false;
	    }, this);

	    //right
	    this.rightArrow.events.onInputDown.add(function() {
	        this.player.customParams.isMovingRight = true;
	    }, this);

	    this.rightArrow.events.onInputUp.add(function() {
	        this.player.customParams.isMovingRight = false;
	    }, this);

	    this.rightArrow.events.onInputOver.add(function() {
	        this.player.customParams.isMovingRight = true;
	    }, this);

	    this.rightArrow.events.onInputOut.add(function() {
	        this.player.customParams.isMovingRight = false;
	    }, this);
	}



};

