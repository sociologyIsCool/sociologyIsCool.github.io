var Homeless = Homeless || {};

Homeless.JailState = {

init: function() {
        //constants
        this.RUNNING_SPEED = 80;
        //remove kid.
        Homeless.game.global.childThere = false;
        //gravity
        this.game.physics.arcade.gravity.y = 1000;
        this.game.stage.backgroundColor = "#4488AA";
        // this.game.world.setBounds(0, 0, 1000, 600);
        //cursor keys for player movement
        this.cursors = this.game.input.keyboard.createCursorKeys();
    },
    
    create: function() {
    	var backgroundPic = this.game.add.image(this.game.width / 2, this.game.height / 5, "jail");
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

		// console.log(this.timer);

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

		// if(this.player.body.x >= this.game.width+40 ){
		// 	console.log("player over game.with/4");
		// 	this.player.body.x = this.game.width+40;
		// 	this.player.animations.stop();
		// } else if (this.player.body <= this.game.width/2-40){

		// 	this.player.body.x = this.game.width/2-40;
		// 	this.player.animations.stop();

		// }

	    if (this.cursors.up.isDown || this.player.customParams.mustBeg) {

	        console.log("beg"); 
	        this.player.customParams.mustBeg = false;
	        // this.game.events.(this.begForChange, this);
		}

	},

	loadLevel: function() {

		this.southParkPic = this.game.add.image(350, this.game.height-50, "southPark");
		this.southParkPic.anchor.set(0.5);
		this.southParkPic.scale.setTo(0.3,0.3);
	
		var style = { font: "bold 20px Arial",
					  fill: "CC0000",
					  align: "center"};

		this.updateUrMonies = this.add.text(this.game.width-50, this.game.height/2 +70, "Jail Time", style);
		this.updateUrMonies.anchor.set(0.5);
		// this.updateUrMonies.fixedToCamera = true;

		//southpark 
		this.game.time.events.loop(Phaser.Timer.SECOND*7.5, this.smackTalk, this);
		
		//create player.
		this.player = this.add.sprite(this.game.width/2, this.game.height-40, 'player', 5);
		this.player.anchor.setTo(0.5);
		this.player.animations.add("player", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 7, true);
		this.player.animations.add("playerJump", [6, 7], 7, true);

		this.game.physics.arcade.enable(this.player);
		this.player.body.allowGravity = false;
		//create a custom object for the player controls.
		this.player.customParams = {};
		this.player.body.collideWorldBounds = true;
		this.player.body.bounce.set(1, 0);
		this.player.scale.setTo(1.5, 1.5);

		//follow player with the camera.
		this.game.camera.follow(this.player);

		//guilt text
		this.game.time.events.loop(Phaser.Timer.SECOND*6, this.guilt, this);

	},

	updateCounter: function(){
		this.infoThreeDialogState();
	},


	guilt: function(){

		var helpPls = ["I have a record now...",
						"Didn't think \n it could get \n any worse...",
						"What am I going to do..."
					  ];

		// var circle = this.game.add.graphics(50, -100);
		//     circle.lineStyle(2, 0x979797, 1);
		//     circle.beginFill(0xFFFFFF, 1);
		//     circle.drawEllipse(200, 300, 80, 20);
		//     circle.anchor.set(0.5);
		//     circle.alpha = 0.9;
		//     circle.fixedToCamera = true;

		// var circleTween = this.game.add.tween(circle).to({alpha:1}, 3000, "Linear", true);
		// 	circleTween.onComplete.add(function(){circle.destroy();});

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
						"CRIMINAL!",
						"PROSTITUTE!"
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
        // var cheer = this.game.add.audio("cheer");
        // cheer.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log(Homeless.game.global);
            Homeless.game.global.countUntilJail = 1;
            this.game.state.start("choicesToMake", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
        }, this);
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

