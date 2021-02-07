// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const { Router } = require("express");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/member");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/login");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        username: req.user.username,
        id: req.user.id
      });
    }
    // getUserCharacter(req);
  });

  // app.get("/api/scenario", function (req, res) {
  //   db.locations.findOne({ where: { : req.user.username } }).then(function (dbUser) {

  //   });
  // })
















  app.put("/", (req, res) => {
    db.Character.update(
      {
        strength: req.body.strength

      },
      {
        intelligence: req.body.intelligence
      },

      {
        where: { id: req.body.id }
      }



    ).then(() => res.send())
  })
  // first find user id based on username
  // using user id find character associated with that user (where killedby is null)
  function getUserCharacter(req) {
    var newCharacter = { intelligence: 0, strength: 0, dexterity: 0, description: "none", UserId: 1 };
    db.Character.create(newCharacter).then(function (dbCharacter) {
      console.log(dbCharacter);
      db.User.findOne({ where: { username: req.user.username } }).then(function (dbUser) {
        db.Character.findOne({ where: { UserId: dbUser.id } }).then(function (dbCreated) {
          console.log(dbCreated);
        });
      });
    });
  }












};
