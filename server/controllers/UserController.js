const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const registerUser = [
    body("username", "Error: username cannot be blank.")
        .trim()
        .isLength({ min: 1 })
        .custom(async (username) => {
            try {
                const usernameInUse = await User.findOne({
                    username: username,
                });
                if (usernameInUse) {
                    throw new Error("Error: username is already registered.");
                }
            } catch (error) {
                throw new Error(`Error: ${error.message}`);
            }
        })
        .escape(),
    body("password", "Error: password should be at least 8 characters.")
        .trim()
        .isLength({ min: 8 })
        .escape(),
    body("confirm-password", "Error: password does not match.")
        .trim()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Error: password does not match.");
            }

            return true;
        })
        .escape(),
    body("email")
        .trim()
        .custom(async (email) => {
            try {
                const emailInUse = await User.findOne({ email: email });
                if (emailInUse) {
                    throw new Error("Error: email is already registered.");
                }
            } catch (error) {
                throw new Error(`Error: ${error.message}`);
            }
        })
        .escape(),

    async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(403).json({
                username: req.body.username,
                errors: errors.array(),
            });
        }

        const { username, email, password } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                username,
                email,
                password: hashedPassword,
            });

            await newUser.save();

            if (newUser) {
                let body = {
                    _id: newUser.id,
                    username: newUser.username,
                    admin: false,
                };
                const token = jwt.sign({ user: body }, process.env.JWT_SECRET, {
                    expiresIn: "30d",
                });

                res.status(200).json({
                    _id: newUser.id,
                    username: newUser.username,
                    email: newUser.email,
                    token,
                    message: "Successfully created user.",
                });
            }
        } catch (error) {
            return next(error);
        }
    },
];

const loginUser = [
    body("email").trim().escape(),
    body("password").trim().escape(),

    async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(403).json({
                errors: errors.array(),
            });
        }

        passport.authenticate(
            "local",
            { session: false },
            (err, user, info) => {
                if (err) return next(err);
                console.log(info);

                if (!user) {
                    return res.status(400).json({
                        message: "Error: User not found, invalid credentials.",
                        info: info,
                    });
                }

                req.login(user, { session: false }, (err) => {
                    if (err) {
                        res.status(403).json({
                            message: `Error: could not log in user (Passport) - ${err}`,
                        });
                    }
                });

                let body = {
                    _id: user.id,
                    username: user.username,
                    admin: user.isAdmin,
                    author: user.isAuthor,
                };
                const token = jwt.sign({ user: body }, process.env.JWT_SECRET, {
                    expiresIn: "30d",
                });

                return res.status(200).json({
                    token,
                    _id: user.id,
                    user,
                    message: "Successfully logged in.",
                });
            }
        )(req, res);
    },
];

const getUserProfile = (req, res) => {
    return res.status(200).json("User Profile Page");
};

const setAuthorRequest = async (req, res) => {
    try {
        if (req.body === "approve") {
            await User.findByIdAndUpdate(req.params.user, {
                isAuthor: true,
            });
            return res
                .status(200)
                .json({ message: "Author application was approved." });
        } else {
            return res
                .status(200)
                .json({ message: "Author application was denied." });
        }
    } catch (error) {
        return res.status(500).json({
            message: `Error: could not fulfill application review. ${error}`,
        });
    }
};

module.exports = { registerUser, loginUser, getUserProfile, setAuthorRequest };
