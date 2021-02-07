

// all
//      image on the right
//      character description below image

// training
//      scenario description
//      location description
//      three options for how you train
//          slightly different outcomes for skill improvements
//          ie: If interacting with cat:
//              Do you want to play with the cat? (increases dex by 5)
//              Do you want to talk to the cat? (Increases int by 2)
//              Do you want to throw the cat? (Increases str by 3)

// challenges/bosses
//      scenario description
//      location description
//      three options
//          success depends on the option chosen and the players stats
//      if the player beats the boss they get an item that improves their stats
//          once the player has collected every item they win the game

// Minotaur
//      fight head on (requires 20 str)
//      trick the minotaur (requires 10 int)
//      outmaneuver the minotaur (requires 13 dex)

// big row
//      left column
//          scenario specific images
//          scenario specific descriptions and options
//      right column
//          character picture and character description

var characterDescription = $(".character-description");
var sceneName = $("#scene-type");
var sceneImage = $(".scene-image");
var sceneText = $("#scene-text");
var option1 = $("#option1");
var option2 = $("#option2");
var option3 = $("#option3");
// load sql data for character
// take you to the correct scenario based on your characters location_id

function Start() {
    // function call for load scenario
    $.get("/api/start").then(function (data) {

    })
}

// renders right column with character information
function characterRender() {
    $.get("/api/characters").then(function (data) {

        characterDescription.text(data.description);
        // data.strength
        // data.intelligence
        // data.dexterity
        //chart goes here
    })
}

// renders left column with scenario based on scenario information in sql database
function scenarioRender(id) {
    $.get("/api/scenario/" + id).then(function (data) {
        sceneName.text(data.name);
        sceneImage.attr("src", data.picture);
        sceneText.text(data.description);
        option1.text(data.option1);
        option2.text(data.option2);
        option3.text(data.option3);
    });
}

scenarioRender(1);

// function to render death screen
// shows what character was killed by
// shows stats, explains death
//      ie: you weren't strong enough to fight the minotaur head on
function renderDeath() {

}

// replace left column with a description of how you won the scenario
// describe the item the player acquired (maybe image?)
function renderWin() {

    // go to next scenario
}

// Congrats! You escaped the dungeon!
// renders stats and whatnot on left of screen
function renderEscape() {

}

// on clicks for answers
//      training/interactions
//          somehow increment the character stats based on user choice
//          function call to go to next scenario
//      challenges/bosses
//          if player is successful add item to their inventory
//              if player unsuccessful character dies, player is taken to death screen
//          function call to go to next scenario

