var Homeless = Homeless || {};

Homeless.goBackToExTwoState = {

    init: function() {
        // this.game.stage.backgroundColor = "#00000";
        this.game.stage.backgroundColor = "#11111";

    },
    create: function() {
      
       var playButton = this.game.add.button(this.game.width-10, this.game.height, "infoButton", this.infoTwoDialogState, this);
            playButton.anchor.set(1);
            playButton.tint = 0xFCBE12;
            playButton.alpha = 0.5;
            playButton.scale.setTo(0.25,0.25);

        var domesticViolence = this.game.add.image(this.game.width/2, this.game.height/2+90, "kidWithPic");
            domesticViolence.anchor.set(0.5);
            domesticViolence.alpha = 0;
            domesticViolence.scale.setTo(0.7,0.7);


        var domesticViolenceTween = this.game.add.tween(domesticViolence).to({alpha:1}, 5000, "Linear", true);


        this.style = { font: "19px Arial", 
                      // fill: "#CC0000"
                        fill: "#ffffff"

                     };

        this.introText = [
        "A sizable portion of the welfare population experiences domestic violence",
        "at any given time.", 
        "many welfare recipients are at risk of homelessness or continued violence.",
        "In the absence of cash assistance, women who experience domestic violence",
        "may be at increased risk of homelessness or compelled to live with a",
        "former or current abuser in order to prevent homelessness."
        ];

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

        // var HUDTable = this.game.add.image(this.game.width / 2, 200, "femaleAndChildPopulation");
        // HUDTable.anchor.set(0.5);
        // HUDTable.scale.setTo(0.70,0.50);


        


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
         this.click = this.game.add.audio('click');
        this.click.play();
        // var cheer = this.game.add.audio("cheer");
        // cheer.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log(Homeless.game.global);
            //this.state.start("infoTwo");
            this.game.state.start("goBackToExThreeState", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);

            //this.fade("goBackToExThreeState");
        }, this);
    },
};