const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;
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
            const user = await User.findOne({ email });
            console.log(user);
            if (!user) {
                return done(null, false);
            }

            const isPasswordCorrect = await bcrypt.compare(
                password,
                user.password
            );

            if (!isPasswordCorrect) {
                return done(null, false, { message: "Invalid password." });
            }

            return done(null, user);
        } catch (error) {
            return done(error);
        }
    })
);

passport.use(
    new JwtStrategy(options, async (jwtPayload, done) => {
        try {
            const user = await User.findOne({ id: jwtPayload.id });

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(error);
        }
    })
);

module.exports = passport;
