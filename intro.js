var Homeless = Homeless || {};

Homeless.IntroState = {

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

        this.style = { font: "10px Arial", 
                      fill: "#CC0000"
                     };

        this.introText = [
        "Introduce your topic.",
        "Provide a brief overview and establish its ", 
        "importance (hint: statistics help).", 
        "Research Methods:",
        "Tell us how you went about doing your work.  Tell the story (Findings)",
        "What’s going on? How did we get here?  Why is this happening? ",
        "Sociological Application",
        "Introduce your theory and two sociological",
        "concepts and how this explains or applies to what you learned. ",
        "Call to Action - This is your finale. ",
        "Give us an example of someone who is doing something good. Tell people what you want", 
        "them to know, do, or support.",
        "References",
        "List of all sources used", 
        "(please use either APA or MLA).", 
        "Make sure you organize these alphabetically."
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
            console.log("info One State");
            console.log(Homeless.game.global);
            //this.state.start("infoTwo");
            this.game.state.start("choicesToMake", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);

            //this.fade("PlayGame");
        }, this);
    },
};