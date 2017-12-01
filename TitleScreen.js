var Homeless = Homeless || {};

Homeless.titleScreenState = {

    init: function() {
        this.game.stage.backgroundColor = "#4488AA";
    },
    create: function() {

        this.playerAlive = true;
        var playerVelocity = 50;
        var titlePic = this.game.add.image(this.game.width / 2, this.game.height / 2, "superPKTitle");
            titlePic.anchor.set(0.5);

        var playButton = this.game.add.button(this.game.width / 2, this.game.height - 60, "playButton", this.startGame, this);
            playButton.anchor.set(0.5);
            playButton.tint = 0xFCBE12;

        //tween(target).to(properties, ease, autoStart, delay, repeat)
        var playButtonTween = this.game.add.tween(playButton).to({
            width: 220,
            height: 91
        }, 1500, "Linear", true, 0, -1);

        //yoyo method gives yoyo effect plays forward then reverses if set to true.
        //if yoyo method is set to false it will repeat without reversing.
        playButtonTween.yoyo(true);

         //create kid.
        this.kid = this.add.sprite(20, this.game.height-45, 'kid', 5);
        this.kid.anchor.setTo(0.5);
        this.kid.animations.add("kid", [0, 1, 2, 3, 4, 5], 7, true);
        this.game.physics.arcade.enable(this.kid);
        this.kid.body.velocity.x = 10;
        this.kid.body.allowGravity = false;
        this.kid.scale.setTo(1,1);

         //create player.
        this.player = this.add.sprite(50, this.game.height / 2 + 90, 'player', 5);
        this.player.anchor.setTo(0.5);
        this.player.animations.add("player", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 7, true);
        this.game.physics.arcade.enable(this.player);
        this.player.body.velocity.x = 50;
        this.player.body.allowGravity = false;
        this.player.scale.setTo(1.3,1.3);


        this.titleText();
    },

    update: function() {
        if(this.player.body.x >= 500){
            this.player.scale.setTo(-1.3,1.3);
            this.player.body.velocity.x = -50;
            this.player.play("player");
        }
        else if(this.player.body.x <= 90){
            this.player.scale.setTo(1.3,1.3);
            this.player.body.velocity.x = this.player.body.velocity.x += 2;
            this.player.play("player");
        }

         if(this.kid.body.x >= 500){
            this.kid.scale.setTo(-1,1);
            this.kid.body.velocity.x = -80;
            this.kid.play("kid");
        }
        else if(this.kid.body.x <= 70){
            this.kid.scale.setTo(1,1);
            this.kid.body.velocity.x = this.kid.body.velocity.x += 2;
            this.kid.play("kid");
        }

    },

  

    titleText: function(){

        var title = ["HOMELESSNESS!"];

        var randomMeanStuff = Phaser.ArrayUtils.getRandomItem(title);

        var style = { 
                      font: "bold 50px Arial", 
                      fill: "#CC0000", 
                      align: "center",
                      stroke:'#000000',
                      strokeThickness: 6,    
                      fill: '#FFC300' 
                    };

        var sign = this.game.add.text(this.game.width/2, this.game.world.height/2 -90, randomMeanStuff, style);
            sign.anchor.set(0.5);
            sign.setShadow(5, 5, 'rgba(0,0,0,0.5)', 15);
            sign.lineSpacing = -20;
            // sign.alpha = 0.5;

        var secondTitleText = ["Can You Escape it?"];

        var randomSecondText = Phaser.ArrayUtils.getRandomItem(secondTitleText);

        var styleForSecondText = {
                                  font: "bold 35px Arial", 
                                  fill: "#CC0000", 
                                  align: "center",
                                  stroke:'#000000',
                                  strokeThickness: 6,    
                                  fill: '#FFC300' 
                                };

        var secondTextTitle = this.game.add.text(this.game.width/2, this.game.world.height/2 - 30, randomSecondText, styleForSecondText);
            secondTextTitle.anchor.set(0.5);
            secondTextTitle.setShadow(5, 5, 'rgba(0,0,0,0.5)', 15);

        var alohaText = ["\"Oahu Edition\"", "\"Social Stratification!\""];
        var randomAlohaText = Phaser.ArrayUtils.getRandomItem(alohaText);

        var alohaText = this.game.add.text(this.game.width/2-150, this.game.height/2-150, randomAlohaText, styleForSecondText);

        // var playButton = this.game.add.button(this.game.width / 2, this.game.height - 150, "playButton", this.startGame, this);
            alohaText.anchor.set(0.5);
            alohaText.angle = -15;
            alohaText.tint = 0xFCBE12;

            //tween(target).to(properties, ease, autoStart, delay, repeat)
            var alohaTween = this.game.add.tween(alohaText).to({
                width: 220,
                height: 91
            }, 1500, "Linear", true, 0, -1);

            //yoyo method gives yoyo effect plays forward then reverses if set to true.
            //if yoyo method is set to false it will repeat without reversing.
            alohaTween.yoyo(true);
    },


    startGame: function() {
        // var cheer = this.game.add.audio("cheer");
        // cheer.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log("it werks");
            console.log(Homeless.game.global);
            // this.state.start("infoOne");
            this.game.state.start("choicesToMake", Phaser.Plugin.StateTransition.Out.SlideBottom, Phaser.Plugin.StateTransition.In.SlideBottom);
            //this.fade("PlayGame");
        }, this);
    },

};