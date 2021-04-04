const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get("/", passport.authenticate("google", { scope: ["profile"] }));

router.get("/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/surveys");
});

router.get("/me", (req, res) => {
  const { user } = req;
  if (user) {
    return res.send({ success: true, user });
  }

  res.send({ success: false, message: "Pls login" });
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

module.exports = router;
