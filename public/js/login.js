$(document).ready(function () {

  var loginForm = $("button#btn-login");
  var logInUsername = $("input#username-log-in");
  var logInPass = $("input#password-log-in");

  var signUpForm = $("button#btn-signup");
  var signUpUsername = $("input#username-sign-up");
  var signUpPass = $("input#password-sign-up");

  loginForm.on("click", function (event) {
    event.preventDefault();
    var userData = {
      username: logInUsername.val().trim(),
      password: logInPass.val().trim()
    };
    console.log(userData)

    // checks if username and password exist
    if (!userData.username || !userData.password) {
      return;
    }

    // clears form
    loginUser(userData.username, userData.password);
    logInUsername.val("");
    logInPass.val("");
  });

  // loginUser function posts to "api/login" route and if successful, redirects us the the index.html
  function loginUser(username, password) {
    $.post("/api/login", {
      username: username,
      password: password
    })
      .then(function () {
        window.location.replace("/index");
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  signUpForm.on("click", function (event) {
    event.preventDefault();
    var userData = {
      username: signUpUsername.val().trim(),
      password: signUpPass.val().trim()
    };
    console.log(userData)

    // checks if username is taken?
    if (userData.username) {
      return;
    }

    // clears form
    signUpUser(userData.username, userData.password);
    signUpUsername.val("");
    signUpPass.val("");
  });

  function signUpUser(username, password) {
    $.post("/api/login", {
      username: username,
      password: password
    })
      .then(function(data) {
        window.location.replace("/index");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
