$(document).ready(function () {
  var loginForm = $("form.login");
  var logInUser = $("username-log-in");
  var logInPass = $("password-log-in");
  var signUpForm = $("form.sign-up")
  var signUpUser = $("username-sign-up");
  var signUpPass = $("password-sign-up");

  loginForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      username: logInUser.val().trim(),
      password: logInPass.val().trim()
    };

    // checks if username and password exist
    if (!userData.username || !userData.password) {
      return;
    }

    // clears form
    loginUser(userData.username, userData.password);
    usernameInput.val("");
    passwordInput.val("");
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
});
