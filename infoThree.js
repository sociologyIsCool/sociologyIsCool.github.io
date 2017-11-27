var Homeless = Homeless || {};

Homeless.infoThreeState = {

    init: function() {
        this.game.stage.backgroundColor = "#00000";
    },
    create: function() {
      
        var playButton = this.game.add.button(this.game.width / 2, this.game.height - 50, "infoButton", this.startGame, this);
            playButton.anchor.set(0.5);
            playButton.tint = 0xFCBE12;
            playButton.alpha = 0.5;
            playButton.scale.setTo(0.25,0.25);

        // var blueButtonOne = this.game.add.button(this.game.width/2, this.game.height/2 -50, "blueButton", this.buyAlcohol, this);
        //     blueButtonOne.anchor.set(0.5);
        //     blueButtonOne.scale.setTo(1.4,1.2);

          //tween(target).to(properties, ease, autoStart, delay, repeat)
            // var blueButtonTween = this.game.add.tween(blueButtonOne).to({
            //     width: 220,
            //     height: 91
            // }, 1500, "Linear", true, 0, -1);

            //yoyo method gives yoyo effect plays forward then reverses if set to true.
            //if yoyo method is set to false it will repeat without reversing.
            // blueButtonTween.yoyo(true);


        // var typewriter = new Typewriter();
        //     typewriter.init(this.game, {
        //         x: 200,
        //         y: 40,
        //         fontFamily: "chillerBlack",
        //         fontSize: 28,
        //         maxWidth: 300,
        //         sound: reg.track,
        //         text: "In the times before pyramids, parthenon, atlantis or civilization, an already ancient evil existed, with the rise of the humans it saw an opportunity, to convert the nations of man into an image of it self, after all they were seen as weak and fragile. And so it started almost five thousand years ago to convert humans into the monstrosity it was. Soon after, civilizations were erased from history and memory and an undead monstrous army emerged."
        //     });
        //     typewriter.start();

        // RoundedRectangle(x, y, width, height, radius)
        // rectButton.anchor.set(0.5);


        // var amountOfMoney = this.add.text(this.game.width/2, this.game.height/2+90, "you managed to get: $" + Homeless.game.global.coins.toFixed(2), style);
        // amountOfMoney.anchor.set(0.5);

         this.style = { font: "15px Arial", 
                      // fill: "#CC0000"
                        fill: "#ffffff"

                     };

        this.introText = [
        "Conflict Theory",
        "in a capitalistic society, Those who have power,", 
        "political influence, and economic resources see wealth as",
        "something that is earned through education, hard work,",
        "and dedication.", 
        "Through a conflict theorists perspective, homeless women",
        "lack motivation, are lazy, and uneducated.", 
        "They just want someone to take care of them."
        ];

        this.line = [];
        this.wordIndex = 0;
        this.lineIndex = 0;
        this.wordDelay = 120;
        this.lineDelay = 200;

        this.introWords = this.game.add.text(10, 10, "", this.style);


        // this.text = this.game.add.text(this.game.width/2, this.game.height/2, infoThreeText, style);
        // text.anchor.set(0.5);
        // text.alpha = 0.1;

        // this.game.add.tween(text).to( { alpha: 1 }, 2000, "Linear", true);


        this.nextLine();

    },

    update: function() {

       
     

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


    startGame: function() {
        // var cheer = this.game.add.audio("cheer");
        // cheer.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log("info One State");
            console.log(Homeless.game.global);
            this.game.state.start("choicesToMake", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
            //this.fade("PlayGame");
        }, this);
    },
};