const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const SECRET = process.env.JWT_SECRET;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET,
};

passport.use(
    new LocalStrategy({ session: false }, async (email, password, done) => {
        try {
            const user = await User.findOne({ email }).select("+password");

            if (!user) {
                return done(null, false);
            }
            const isPasswordCorrect = await bcrypt.compare(
                password,
                user.password
            );

            if (isPasswordCorrect) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(error);
        }
    })
);
