const express = require("express");
const {
    registerUser,
    loginUser,
    getUserProfile,
    setAuthorRequest,
} = require("../controllers/UserController");
const passport = require("passport");
const router = express.Router();

// @desc     Register a user
// @route    POST /api/users/register
// @access   Public
router.post("/register", registerUser);

// @desc     Login a user
// @route    POST /api/users/login
// @access   Public
router.post("/login", loginUser);

// @desc     Fetch a users profile info
// @route    POST /api/users/profile
// @access   Private
router.get(
    "/profile",
    passport.authenticate("user-auth", { session: false }),
    getUserProfile
);

// @desc     Change a users permissions to "Author"
// @route    POST /api/users/:user/application
// @access   Private (admin only)
router.put(
    "/:user/application",
    passport.authenticate("admin-auth", { session: false }),
    setAuthorRequest
);

module.exports = router;
