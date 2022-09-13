const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const registerUser = [
    body("username", "Error: username cannot be blank.")
        .trim()
        .isLength({ min: 1 })
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
                if (emailInUse)
                    throw new Error("Error: email is already registered.");
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
            const hashedPassword = await bcrypt.hash(
                password,
                process.env.SALT
            );
            const newUser = new User({
                username,
                email,
                password: hashedPassword,
            });

            await newUser.save();

            if (newUser) {
                const token = jwt.sign(
                    { sub: newUser.id },
                    process.env.JWT_SECRET,
                    { expiresIn: "2h" }
                );

                res.status(201).json({
                    _id: newUser.id,
                    username: newUser.username,
                    email: newUser.email,
                    token,
                    message: "Sucessfully created user.",
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

        passport.authenticate("local", { session: false }, (err, user) => {
            if (err) return next(err);

            if (!user) {
                return res.status(400).json({
                    message: "Error: Invalid credentials.",
                });
            }

            const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });

            return res.status(201).json({
                token,
                _id: user.id,
                username: user.username,
            });
        })(req, res);
    },
];

module.exports = { registerUser, loginUser };
