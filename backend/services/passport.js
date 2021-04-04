const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/User");

passport.serializeUser((user, done) => {
  // we take mongoose id of user and create a session for the user.
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

exports.useGoogleStrategy = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ google_id: profile.id });
        console.log(existingUser);
        if (existingUser) {
          // we have a user already exists
          done(null, existingUser);
        } else {
          // we are creating a new user.
          const user = new User({
            google_id: profile.id,
            name: profile.displayName,
          });
          await user.save();
          done(null, user);
        }
      }
    )
  );
};
