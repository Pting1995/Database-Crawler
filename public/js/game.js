

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
var chartDiv = $("#chart-div");
var inventory = $(".item-list");
// load sql data for character
// take you to the correct scenario based on your characters location_id
var characterId;

function Start() {
    // this data is the character data, grab their id
    $.get("/api/start").then(function (data) {
        characterId = data.id;
        var locationId = data.LocationId;
        characterRender(characterId);
        scenarioRender(locationId);
    });
}

// renders right column with character information
function characterRender(id) {
    chartDiv.empty();
    var newCanvas = $("<canvas>");
    newCanvas.attr("id", "myChart");
    chartDiv.append(newCanvas);
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
                    label: 'Character Stats',
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
        // find all items associated with this characters id in inventory

        // display them and their stats
    });
    inventory.empty();
    $.get("/api/inventory/" + characterId).then(function (inventoryData) {
        console.log(inventoryData);
        for(var i = 0; i < inventoryData.length; i++){
            console.log(inventoryData[i].ItemId);

            $.get("/api/item/" + inventoryData[i].ItemId).then(function(itemData) {
                console.log(inventoryData[0].ItemId);
                console.log(itemData);
                var newLi = $("<li>");
                var itemDesc = $("<p>");
                var itemName = $("<h5>");
                itemDesc.text(itemData.description);
                itemName.text(itemData.name);
                newLi.append(itemName);
                newLi.append(itemDesc);
                inventory.append(newLi);
            });
        }
    });
}

// renders left column with scenario based on scenario information in sql database
function scenarioRender(id) {
    $.get("/api/scenario/" + id).then(function (data) {
        sceneName.text(data.name);
        sceneImage.attr("src", data.img);
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
    $.get("/api/option/" + optionId).then(function (optionData) {
        $.get("/api/characters/" + characterId).then(function (characterData) {
            // IMPORTANT! IN THIS LINE THE NUMBER HAS TO BE THE NUMBER OF SCENARIOS SO THE GAME DOESN'T END EARLY
            if (characterData.strength >= optionData.str_req && characterData.intelligence >= optionData.int_req && characterData.dexterity >= optionData.dex_req && characterData.LocationId < 12) {
                // resolution text
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
                    // characterRender(info.id);
                    // replace options with continue
                    sceneText.text(optionData.resolution);
                    option1.addClass("continue");
                    option1.removeClass("option");
                    option1.text("CLICK TO CONTINUE");
                    option2.addClass("continue");
                    option2.text("CLICK TO CONTINUE");
                    option2.removeClass("option");
                    option3.addClass("continue");
                    option3.text("CLICK TO CONTINUE");
                    option3.removeClass("option");
                    // find location associated with option
                    $.get("/api/scenario/" + optionData.LocationId).then(function (locationData) {
                        // find item id associated with that boss
                        // if it is not NULL
                        if (locationData.ItemId !== null) {
                            var itemInfo = { itemid: locationData.ItemId, characterid: characterData.id };
                            // add it to inventory with its id and character id
                            $.post("/api/additem", itemInfo);
                            // find data for that item
                            // add its stats to character stats
                            $.get("/api/item/" + locationData.ItemId).then(function (itemData) {
                                $.get("/api/characters/" + characterId).then(function (characterData) {
                                    // IMPORTANT! IN THIS LINE THE NUMBER HAS TO BE THE NUMBER OF SCENARIOS SO THE GAME DOESN'T END EARLY
                                    if (characterData.strength >= optionData.str_req && characterData.intelligence >= optionData.int_req && characterData.dexterity >= optionData.dex_req && characterData.LocationId < 12) {
                                        // resolution text
                                        // increment stats
                                        var info = {
                                            id: characterData.id,
                                            newStr: characterData.strength + itemData.strength,
                                            newInt: characterData.intelligence + itemData.intelligence,
                                            newDex: characterData.dexterity + itemData.dexterity,
                                            newLoc: characterData.LocationId
                                        };
                                        $.ajax({
                                            method: "PUT",
                                            url: "/api/update/character",
                                            data: info
                                        });
                                    }
                                });
                            });
                        }
                    });
                });


                // get item
                //      find location associated with option
                //      find item id associated with that boss
                //      if it is not NULL
                //      add it to inventory with its id and character id


            }
            else if (characterData.strength >= optionData.str_req && characterData.intelligence >= optionData.int_req && characterData.dexterity >= optionData.dex_req) {
                // take to ending screen
                var info = {
                    id: characterData.id,
                    death_message: "This character escaped!"
                };
                // succeed!
                $.ajax({
                    method: "PUT",
                    url: "/api/kill/character",
                    data: info
                }).then(function () {
                    sceneText.text(optionData.resolution);
                    option1.addClass("win");
                    option1.text("CLICK TO CONTINUE");
                    option2.addClass("win");
                    option2.text("CLICK TO CONTINUE");
                    option3.addClass("win");
                    option3.text("CLICK TO CONTINUE");
                });
            }
            else {
                var info = {
                    id: characterData.id,
                    death_message: optionData.failure
                };
                console.log(optionData.failure);
                // die
                $.ajax({
                    method: "PUT",
                    url: "/api/kill/character",
                    data: info
                }).then(function () {
                    // death.html
                    sceneText.text(optionData.failure);
                    option1.addClass("lose");
                    option1.text("CLICK TO CONTINUE");
                    option2.addClass("lose");
                    option2.text("CLICK TO CONTINUE");
                    option3.addClass("lose");
                    option3.text("CLICK TO CONTINUE");
                });

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
    option1.addClass("option");
    option2.addClass("option");
    option3.addClass("option");
    Start();
});

$(document).on("click", ".win", function (event) {
    window.location.replace("/ending");
});

$(document).on("click", ".lose", function (event) {
    window.location.replace("/death");
});

