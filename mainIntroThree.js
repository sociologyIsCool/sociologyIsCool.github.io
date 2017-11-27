var Homeless = Homeless || {};

Homeless.mainIntroThreeState = {

    init: function() {
        // this.game.stage.backgroundColor = "#00000";
        this.game.stage.backgroundColor = "#11111";

    },
    create: function() {
      
        var playButton = this.game.add.button(this.game.width / 2, this.game.height -50, "infoButton", this.infoTwoDialogState, this);
            playButton.anchor.set(0.5);
            playButton.tint = 0xFCBE12;
            playButton.alpha = 0.5;
            playButton.scale.setTo(0.25,0.25);

        this.style = { font: "19px Arial", 
                      // fill: "#CC0000"
                        fill: "#ffffff"

                     };

        this.introText = [
        "There is no single reason contributing to the homelessness",
        "of women in society. \n",

        "It is a multidimensional issue with a variety of underlying",
        "economic and social factors which demands response on ",
        "several fronts\n",
       
        "Domestic Violence, Poverty, Substance Abuse, Lack of Affordable Housing,",
        "and Mental Illness",
        "are a few of the social issues which factor into homelessness.",
        "By taking on a Symbolic Interactionaists perspective we can analyze",
        "the Social stigma and stereotypes which exists in a class based society ",
        "and the challenges woman may face when labeled as homeless."

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