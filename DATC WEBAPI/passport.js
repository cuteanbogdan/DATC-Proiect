const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./schemas/User");
require("dotenv").config();
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.SECRETJWT;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      console.log("Searching for user ID:", jwt_payload.user.id);

      try {
        const user = await User.findById(new ObjectId(jwt_payload.user.id));
        console.log("Found user:", user);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    })
  );
};
