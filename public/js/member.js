$(document).ready(function () {
    var cont = $("#continue-char");
    var restart = $("#make-char");
    
    cont.on("click", function (event) {
        window.location.replace("/game.js");
    });
    restart.on("click", function (event) {
        window.location.replace("/game.js");
    })
});
