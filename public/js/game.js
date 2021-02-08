

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
var option = $(".option");
var chartSpot = $("myChart");
var itemList = $(".item-list");
// load sql data for character
// take you to the correct scenario based on your characters location_id
var characterId;

function Start() {
    // this data is the character data, grab their id
    $.get("/api/start").then(function (data) {
        console.log(data, "-----------------------------------------------");
        characterId = data.id;
        var locationId = data.LocationId;
        characterRender(characterId);
        scenarioRender(locationId);
    });
}

// renders right column with character information
function characterRender(id) {
    $.get("/api/characters/" + id).then(function (data) {
        characterId = id;
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'pie',

            // The data for our dataset
            data: {
                labels: ['Strength', 'Intelligence', 'Dexterity'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: ['rgb(214, 40, 40)', 'rgb(46, 94, 170)', 'rgb(50, 160, 93)'],
                    borderColor: 'white',
                    data: [
                        data.strength,
                        data.intelligence,
                        data.dexterity

                    ]
                }]
            },

            // Configuration options go here
            options: {}
        });

        characterDescription.text(data.description);
        // data.strength
        // data.intelligence
        // data.dexterity
        //chart goes here
        // IMPORTANT RENDER A LIST OF ITEMS FOR THE CHARACTER
    });
}

// renders left column with scenario based on scenario information in sql database
function scenarioRender(id) {
    $.get("/api/scenario/" + id).then(function (data) {
        sceneName.text(data.name);
        sceneImage.attr("src", data.picture);
        sceneText.text(data.description);
    });
    $.get("/api/options/" + id).then(function (data) {
        option1.text(data[0].text);
        option1.attr("data-value", data[0].id);
        option2.text(data[1].text);
        option2.attr("data-value", data[1].id);
        option3.text(data[2].text);
        option3.attr("data-value", data[2].id);
    });
}

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

Start();

// needs to go and get the option and all of its data
// compare your stats to the required stats
// if you're good
//      update increment your stats appropriately
//      update increase location by one
//      if there is an item get appropriate item
//      then render resolution text in scenario description
//      replace the options with a continue button
// if you're bad
//      DIE
//      render die message in scenario description
$(document).on("click", ".option", function (event) {
    event.preventDefault();
    var optionId = $(this).attr("data-value");
    console.log(optionId);
    $.get("/api/option/" + optionId).then(function (optionData) {
        $.get("/api/characters/" + characterId).then(function (characterData) {
            if (characterData.strength >= optionData.str_req && characterData.intelligence >= optionData.int_req && characterData.dexterity >= optionData.dex_req) {
                // resolution text
                sceneText.text(optionData.resolution);
                // increment stats
                var info = {
                    id: characterData.id,
                    newStr: characterData.strength + optionData.str_gain,
                    newInt: characterData.intelligence + optionData.int_gain,
                    newDex: characterData.dexterity + optionData.dex_gain,
                    newLoc: characterData.LocationId + 1
                };
                $.ajax({
                    method: "PUT",
                    url: "/api/update/character",
                    data: info
                }).then(function () {
                    console.log("we are at the continue phase");
                    option1.attr("class", "continue");
                    option1.text("CLICK TO CONTINUE");
                    option2.attr("class", "continue");
                    option2.text("CLICK TO CONTINUE");
                    option3.attr("class", "continue");
                    option3.text("CLICK TO CONTINUE");
                });
                // get item
                // replace options with continue
            }
            else {
                // die
            }
        });
    });
});
function updateTodo(todo) {
    $.ajax({
        method: "PUT",
        url: "/api/todos",
        data: todo
    }).then(getTodos);
}

$(document).on("click", ".continue", function (event) {
    event.preventDefault();
    option1.attr("class", "option");
    option2.attr("class", "option");
    option3.attr("class", "option");
    Start();
});

// on clicks for answers
//      training/interactions
//          somehow increment the character stats based on user choice
//          function call to go to next scenario
//      challenges/bosses
//          if player is successful add item to their inventory
//              if player unsuccessful character dies, player is taken to death screen
//          function call to go to next scenario

