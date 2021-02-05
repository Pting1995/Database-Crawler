$(document).ready(function () {
  // Getting references to our form and inputs
  var loginForm = $("form.log-in");
  var usernameInput = $("input#username-input");
  var passwordInput = $("input#password-input");


  var signUpForm = $("form.signup");
  var usernameInput = $("input#username-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.password);
    usernameInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, password) {
    $.post("/api/login", {
      username: username,
      password: password
    })
      .then(function (data) {
        window.location.replace("/index");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});


// When the form is submitted, we validate there's a username and password entered
loginForm.on("submit", function (event) {
  event.preventDefault();
  var userData = {
    username: usernameInput.val().trim(),
    password: passwordInput.val().trim()
  };

  if (!userData.username || !userData.password) {
    return;
  }

  // If we have an email and password we run the loginUser function and clear the form
  loginUser(userData.username, userData.password);
  usernameInput.val("");
  passwordInput.val("");
});

// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
function loginUser(username, password) {
  $.post("/api/login", {
    username: username,
    password: password
  })
    .then(function () {
      window.location.replace("/members");
      // If there's an error, log the error
    })
    .catch(function (err) {
      console.log(err);
    });
}
