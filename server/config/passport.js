const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

passport.use(
    new LocalStrategy(
        { usernameField: "email", passwordField: "password", session: false },
        async (email, password, done) => {
            try {
                const user = await User.findOne({ email });
                console.log(user);
                if (!user) {
                    return done(null, false, {
                        message: "Email not registered.",
                    });
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
        }
    )
);

passport.use(
    "user-auth",
    new JwtStrategy(options, async (jwtPayload, done) => {
        console.log(jwtPayload);
        try {
            const user = await User.findOne({ _id: jwtPayload.user._id });
            console.log(user);
            if (user) {
                console.log("passport auth: success");
                return done(null, user);
            } else {
                console.log("passport auth: failed");
                return done(null, false);
            }
        } catch (error) {
            console.log("rip");
            return done(error);
        }
    })
);

passport.use(
    "admin-auth",
    new JwtStrategy(options, async (jwtPayload, done) => {
        try {
            const user = await User.findOne({ id: jwtPayload.id });

            if (user.isAdmin) {
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
