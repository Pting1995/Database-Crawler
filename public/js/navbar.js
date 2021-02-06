$(document).ready(function () {
    var login = $("btn-login-dir")
    var logout = $("btn-logout")

    login.on("click", function (event) {
        window.location.replace("/login")
    })
    
});