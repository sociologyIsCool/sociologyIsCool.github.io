

var Homeless = Homeless || {};

Homeless.sheltersTextChoiceState = {

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

        this.style = { font: "15px Arial", 
                      // fill: "#CC0000"
                        fill: "#ffffff"
                     };



        // coins : 0,
        // countUntilJail: 0,
        // record : false,
        // gotAlcohol : false,
        // childThere : true,
        // beggingText : true,
        // goBackToEx : true,
        // retreatism : true,
        // changePlease : true,
        
       

        this.introText = [
            "Sorry, Shelter Is Full. \nExplore options and comback later but",
            "try not to get into trouble",
            "\n\n",
            "Amount of money made So Far: $" + Homeless.game.global.coins.toFixed(2) + " \n\n",
            //"Do you have a Criminal Record: " + Homeless.game.global.record + " \n",
            //"Son Saw Mom Get Hurt By EX: " + Homeless.game.global.goBackToEx + "\n" +
            //"Alcoholic: " + Homeless.game.global.gotAlcohol + "\n",

            "Programmed by Travis H. 2017",
            "Music By Rebel Souljahz -\"People in the Street\"",
        ];



        this.line = [];
        this.wordIndex = 0;
        this.lineIndex = 0;
        this.wordDelay = 220;
        this.lineDelay = 200;

        // text.anchor.set(0.5);
        // text.alpha = 0.1;

        // this.game.add.tween(text).to( { alpha: 1 }, 2000, "Linear", true);
        this.introWords = this.game.add.text(this.game.width/2, this.game.height/2, "", this.style);
        this.introWords = this.game.add.text(10, 30, "", this.style);


        this.nextLine();
        this.showScore();

    },

    update: function() {
       
    },



    showScore: function(){
         console.log(
            "coins: " + Homeless.game.global.coins + "\n" +
            "record: " + Homeless.game.global.record + "\n" +
            "kept child: " + Homeless.game.global.childThere + "\n" +
            "went back to Ex: " + Homeless.game.global.goBackToEx + "\n" +
            "drank beer: " + Homeless.game.global.gotAlcohol + "\n"
        );
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