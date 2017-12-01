var Homeless = Homeless || {};

Homeless.mainIntroState = {

    init: function() {
        // this.game.stage.backgroundColor = "#00000";
        this.game.stage.backgroundColor = "#11111";

    },
    create: function() {
      
       // var playButton = this.game.add.button(this.game.width / 2, this.game.height -50, "infoButton", this.infoTwoDialogState, this);
       var playButton = this.game.add.button(this.game.width-10, this.game.height, "infoButton", this.infoTwoDialogState, this);
            playButton.anchor.set(1.0);
            playButton.tint = 0xFCBE12;
            playButton.alpha = 0.5;
            playButton.scale.setTo(0.25,0.25);

        this.style = { font: "19px Arial", 
                      // fill: "#CC0000"
                        fill: "#ffffff"
                     };

        this.introText = [
            "According to the State of Hawaii's \"Point in Time\" Report",
            "Oahu saw an increase of 0.4 percent overall in the homeless",
            "population in 2017, we have the largest homeless population",
            "of the islands counting 4,959 people. Oahu also saw a 6 percent",
            "increase in the chronically homeless population and a 9 percent",
            "increase of homeless veterans."
        ];

        this.line = [];
        this.wordIndex = 0;
        this.lineIndex = 0;
        this.wordDelay = 120;
        this.lineDelay = 200;

        // text.anchor.set(0.5);
        // text.alpha = 0.1;

        // this.game.add.tween(text).to( { alpha: 1 }, 2000, "Linear", true);
        this.introWords = this.game.add.text(this.game.width/2, 55, "", this.style);
        this.introWords.anchor.set(0.5);

        this.nextLine();

        var HUDTable = this.game.add.image(this.game.width / 2, 230, "femaleAndChildPopulation");
        HUDTable.anchor.set(0.5);
        HUDTable.scale.setTo(0.70,0.70);

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

