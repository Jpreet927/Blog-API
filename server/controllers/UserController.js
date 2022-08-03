const User = require("../models/User")
const bcrypt = require("bcryptjs");

const registerUser = (req, res) => {
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
};

const loginUser = (req, res) => {
    console.log("Login post");
};

module.exports = { registerUser, loginUser };
