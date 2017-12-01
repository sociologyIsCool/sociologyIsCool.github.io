var Homeless = Homeless || {};

Homeless.compassionateDisruptionState = {

    init: function() {
        this.game.stage.backgroundColor = "#00000";
    },
    create: function() {
      
        var playButton = this.game.add.button(this.game.width-10, this.game.height, "infoButton", this.startGame, this);
            playButton.anchor.set(1.);
            playButton.tint = 0xFCBE12;
            playButton.alpha = 0.5;
            playButton.scale.setTo(0.25,0.25);

        var homelessPoster = this.game.add.image(this.game.width, this.game.height/2+50, "homelessPoster");
            homelessPoster.anchor.set(1);
            homelessPoster.alpha = 0;
            homelessPoster.scale.setTo(0.7,0.8);

        var homelessPosterTween = this.game.add.tween(homelessPoster).to({alpha:1}, 3000, "Linear", true);

        this.style = { font: "17px Arial", 
                      // fill: "#CC0000"
                        fill: "#ffffff",
                        stroke: "#000000",
                        strokeThickness: 12
                      };

        this.introText = [
        "We cannot let the homeless ruin our economy",
        "and take over our city,” Caldwell wrote.\n",
        
        "Tell that to the Homeless parents who work",
        "full time jobs while their children",
        "do their homework by flashlight – in cars parked in",
        "Hawaii’s towns and cities.",

        "This is an example where the dominant group who holds", 
        "most power in society places its unfocused aggression",
        "onto the subordiante group in this case, it's the homeless.",

        ];

      
//Since the start of the year, IHS has received 65 referrals about homeless living in cars.



//Advocates for the homeless also say that people who live in their cars are always on the move -- parking at beach parks, shopping centers, churches and side streets. Many have jobs, which means it's even tougher to find them during working hours.

//Betty Dunn, who was parked at Ala Moana Beach Park on Thursday, became homeless two years ago, after leaving an abusive relationship. She was able to save up enough money to get a car in February.

//IHS workers found about a dozen people living in seven cars scattered throughout the park. The numbers rise at night.

//Although most of the people spotted living in their cars Thursday were singles or couples, families make up the majority of those that IHS helped over the past year. 



        // "THE CULTURE OF POVERTY"
        // "In a cash economy,",
        // "The dominant class asserts a set of values that prizes thrift,",
        // "and the accumulation of wealth and property, stresses the",
        // "possibility of upward mobility explains low economic status",
        // "as the result of individual personal inadequacy and inferiority.",
        // "   Where these conditions prevail the way of life that develops",
        // "among some of the poor is the culture of poverty.", 
        // "- Oscar Lewis"



        // , Those who have power,", 
        // "political influence, and economic resources see wealth as",
        // "something that is earned through education, hard work,",
        // "and dedication.", 
        // "Through a conflict theorists perspective, homeless women",
        // "lack motivation, are lazy, and uneducated.", 
        // "They just want someone to take care of them.",


        this.line = [];
        this.wordIndex = 0;
        this.lineIndex = 0;
        this.wordDelay = 120;
        this.lineDelay = 200;

        this.introWords = this.game.add.text(10, 10, "", this.style);
        this.introWords.lineSpacing = -10;



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