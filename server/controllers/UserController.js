const User = require("../models/User")
const bcrypt = require("bcryptjs");
const passport = require("passport")
const jwt = require("jsonwebtoken")
const { body, validationResult } = require("express-validator")

const registerUser = [
    body("username", "Error: username cannot be blank.")
        .trim()
        .isLength({ min: 1 }),
    body("password", "Error: password should be at least 8 characters.")
        .trim()
        .isLength({ min: 8 }),
    body("confirm-password", "Error: password does not match.")
        .trim(),
    body("email")
        .trim()
        .custom(async (email) => {
            try {
                const emailInUse = await User.findOne({ email: email });
                if (emailInUse) throw new Error("Error: email is already registered.")
            } catch (error) {
                throw new Error(`Error: ${error.message}`);
            }
        }),
    (req, res) => {
    console.log("Register post request");
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400).json()
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("Error: user already exists.")
    }

    const hashedPassword = await bcrypt.hash(password, process.env.SALT);

    const newUser = await User.create({
        username, 
        email, 
        password: hashedPassword
    })

    if (newUser) {
        res.status(201).json({
            _id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            token: generateToken(newUser.id)
        })
    }
}];

const loginUser = (req, res) => {
    console.log("Login post");
};

module.exports = { registerUser, loginUser };
