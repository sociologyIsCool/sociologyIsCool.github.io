


var Homeless = Homeless || {};

Homeless.mainIntroTwoState = {

    init: function() {
        // this.game.stage.backgroundColor = "#00000";
        this.game.stage.backgroundColor = "#11111";

    },
    create: function() {

        console.log(localStorage.getItem("playerName"));

        this.game.time.events.loop(Phaser.Timer.SECOND*6, this.kidTalkingToMommy, this);
        this.game.time.events.loop(Phaser.Timer.SECOND*5, this.mommyTalking, this);
      
        var playButton = this.game.add.button(this.game.width-10, this.game.height, "infoButton", this.infoTwoDialogState, this);
            playButton.anchor.set(1.);
            playButton.tint = 0xFCBE12;
            playButton.alpha = 0.5;
            playButton.scale.setTo(0.25,0.25);


        // create child
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


        this.style = { font: "15px Arial", 
                      fill: "#ffffff"
                     };

        this.introText = [
            "This is " + localStorage.getItem("playerName"),
            "Things were getting bad in her relationship",
            "so she decided to take her son and leave.",
            "\nNow she's on the streets",

            "\nShe has no family to turn to", 

            "\nWhat is she going to do?"


        ];

            // "Although most issues relevant to homelessness affect both",
            // "men and women. \n\nHomeless women face unique circumstances",
            // "which are often overlooked when it comes to finding",
            // "permanent housing."


        this.line = [];
        this.wordIndex = 0;
        this.lineIndex = 0;
        this.wordDelay = 120;
        this.lineDelay = 200;


        // text.anchor.set(0.5);
        // text.alpha = 0.1;

        // this.game.add.tween(text).to( { alpha: 1 }, 2000, "Linear", true);
        this.introWords = this.game.add.text(10, 10, "", this.style);

        this.nextLine();


    },

    update: function() {

        if(Homeless.game.global.childThere == true){
            this.childRunning();
            if(this.kidText){
                this.kidText.x = Math.floor(this.kid.x + this.kid.width / 2-40);
                this.kidText.y = Math.floor(this.kid.y + this.kid.height / 2-100);
            }
        }
       
    },



    mommyTalking: function(){

        this.momHelpPls = ["What am I going to do",
                           "I love you son",
                           "My poor baby",
                           "Lets go son"
                          ];

        this.momRandomHelpPls = Phaser.ArrayUtils.getRandomItem(this.momHelpPls);

        this.momTextStyle = { font: "20px Arial", 
                              fill: "#ffffff", 
                              // wordWrap: true, 
                              align: "center", 
                              stroke: '#000000',
                              strokeThickness: 5,
                            };

        this.momText = this.game.add.text(this.game.width/2+40,this.game.height/2-140,this.momRandomHelpPls,this.momTextStyle);
        this.momText.anchor.set(0.5);
        this.momText.alpha = 0.9;
        this.momPls = this.game.add.tween(this.momText).to({alpha:1}, 3000, "Linear", true);
        this.momPls.onComplete.add(function(){this.momText.destroy();},this); 

    },







    kidTalkingToMommy: function(){
        if(Homeless.game.global.childThere == true){

             this.helpPls = ["I Love u Mommy!",
                             "I'm hungry...",
                             "Ewww a bug!",
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

    nextLine: function() {


        if (this.lineIndex === this.introText.length)
        {
            //  We're finished
            return;
        }

        //  Split the current line on spaces, so one word per array element
        this.line = this.introText[this.lineIndex].split(' ');

        //  Reset the word index to zero (the first word in the line)
        this.wordIndex = 0;

        //  Call the 'nextWord' function once for each word in the line (line.length)
        this.game.time.events.repeat(this.wordDelay, this.line.length, this.nextWord, this);

        //  Advance to the next line
        this.lineIndex++;

    },

    nextWord: function() {

        //  Add the next word onto the text string, followed by a space
        this.introWords.text = this.introWords.text.concat(this.line[this.wordIndex] + " ");

        //  Advance the word index to the next word in the line
        this.wordIndex++;

        //  Last word?
        if (this.wordIndex === this.line.length)
        {
            //  Add a carriage return
            this.introWords.text = this.introWords.text.concat("\n");

            //  Get the next line after the lineDelay amount of ms has elapsed
            this.game.time.events.add(this.lineDelay, this.nextLine, this);
        }

    },


    infoTwoDialogState: function() {
        // var cheer = this.game.add.audio("cheer");
        // cheer.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log(Homeless.game.global);
            //this.state.start("infoTwo");
            this.game.state.start("choicesToMake", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);

            //this.fade("PlayGame");
        }, this);
    },
};