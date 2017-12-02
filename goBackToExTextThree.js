var Homeless = Homeless || {};

Homeless.goBackToExThreeState = {



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

        var domesticViolence = this.game.add.image(this.game.width/2, this.game.height/2+90, "domesticViolence");
            domesticViolence.anchor.set(0.5);
            domesticViolence.alpha = 0;
            domesticViolence.scale.setTo(0.7,0.8);

        var domesticViolenceTween = this.game.add.tween(domesticViolence).to({alpha:1}, 5000, "Linear", true);

        this.style = { font: "19px Arial", 
                        fill: "#ffffff"
                     };

        this.introText = [
            "The Cycle of Violence is tied to Families and Homelessness",
            "Among mothers with children experiencing homelessness,",
            "more than 80% had previously experienced domestic violence.\n",
            "Source: Aratani, Y. (2009) Homeless Children and Youth, Causes",
            "and Consequences. New York, NY: National Center for Children in Poverty."
        ];

        this.line = [];
        this.wordIndex = 0;
        this.lineIndex = 0;
        this.wordDelay = 120;
        this.lineDelay = 200;

        // this.game.add.tween(text).to( { alpha: 1 }, 2000, "Linear", true);
        this.introWords = this.game.add.text(10, 10, "", this.style);


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

    infoTwoDialogState: function() {
         this.click = this.game.add.audio('click');
        this.click.play();
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











