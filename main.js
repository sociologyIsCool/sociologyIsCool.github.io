
var Homeless = Homeless || {};

//python -m SimpleHTTPServer 9000

//Homeless.dimensions = Homeless.getGameLandscapeDimensions(700,414);

//create a new Phaser.Game object and assign it to our custom Homeless.game property.
// then add our states to the game property.
 Homeless.game = new Phaser.Game(700, 380, Phaser.AUTO);
// Homeless.game = new Phaser.Game(1000, 550, Phaser.AUTO);


Homeless.game.global = {
 coins : 0,
 countUntilJail: 0,
 record : false,
 // if compassionateDisruption is false can't finish game.
 compassionateDisruption: false,
 gotAlcohol : false,
 childThere : true,
 // if begging text is false the info scene after the begging for change will not show.
 beggingText : true,
 goBackToEx : false,
 retreatism : false,
 // if change please is false can't finish game
 changePlease : false,
}

Homeless.game.state.add("Boot", Homeless.BootState);
Homeless.game.state.add("Preload", Homeless.PreloadState);
Homeless.game.state.add("titleScreen", Homeless.titleScreenState);
Homeless.game.state.add("infoOne", Homeless.infoOneState);
Homeless.game.state.add("infoTwo", Homeless.infoTwoState);
Homeless.game.state.add("infoThree", Homeless.infoThreeState);
Homeless.game.state.add("choicesToMake", Homeless.choicesToMake);
Homeless.game.state.add("jail", Homeless.JailState);
Homeless.game.state.add("dead", Homeless.deadState);
Homeless.game.state.add("Game", Homeless.GameState);
Homeless.game.state.add("Intro", Homeless.IntroState);
Homeless.game.state.add("mainIntro", Homeless.mainIntroState);
Homeless.game.state.add("mainIntroTwo", Homeless.mainIntroTwoState);
Homeless.game.state.add("mainIntroThree", Homeless.mainIntroThreeState);
Homeless.game.state.add("sheltersTextChoice", Homeless.sheltersTextChoiceState);
Homeless.game.state.add("sheltersTextOneChoice", Homeless.sheltersTextChoiceOneState);

Homeless.game.state.add("goBackToExOneState", Homeless.goBackToExOneState);
Homeless.game.state.add("goBackToExTwoState", Homeless.goBackToExTwoState);
Homeless.game.state.add("goBackToExThreeState", Homeless.goBackToExThreeState);

Homeless.game.state.add("jailTextOne", Homeless.JailTextOneState);
Homeless.game.state.add("compassionateDisruption", Homeless.compassionateDisruptionState);
Homeless.game.state.add("misconceptions", Homeless.introMisconceptionsState);
Homeless.game.state.add("misconceptionsTwo", Homeless.introMisconceptionsTwoState);






// Homeless.game.state.add("Win", Homeless.winScreenState);

//start our boot state
Homeless.game.state.start("Boot");


