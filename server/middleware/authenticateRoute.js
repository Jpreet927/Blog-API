const jwt = require("jsonwebtoken");
// const User = require("../models/User");

const authenticateRoute = (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
        } catch (err) {
            res.status(401);
            throw new Error("Error: Not Authorized, could not verify token.");
        }
    }

    if (!token) {
        return res
            .status(401)
            .json({ message: "Error: Not authorized, missing token." });
    }

    next();
};
