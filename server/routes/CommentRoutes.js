const express = require("express");
const passport = require("passport");
const {
    createComment,
    getAllComments,
    deleteComment,
} = require("../controllers/CommentController");

const router = express.Router();

// @desc     Create a comment
// @route    POST /api/posts/:postid/comments
// @access   Public
router.post("/posts/:postid/comments", createComment);

// @desc     Get all comments
// @route    POST /api/posts/:postid/comments
// @access   Public
router.get("/posts/:postid/comments", getAllComments);

// @desc     Delete a comment
// @route    POST /api/posts/:postid/comments/:commentid
// @access   Private (authors, admins)
router.delete(
    "/posts/:postid/comments/:commentid",
    passport.authenticate("user-auth", { session: false }),
    deleteComment
);

module.exports = router;
