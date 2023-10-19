const express = require("express");
const passport = require("passport");
const router = express.Router();
const {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost,
    publishPost,
    unpublishPost,
    getPostByAuthor,
} = require("../controllers/PostController");

// @desc     Create a post
// @route    POST /api/posts/
// @access   Private (authors, admins)
router.post(
    "/",
    passport.authenticate("user-auth", { session: false }),
    createPost
);

// @desc     Get all posts
// @route    GET /api/posts/
// @access   Public
router.get("/", getAllPosts);

// @desc     Get a single post
// @route    GET /api/posts/:postid
// @access   Public
router.get("/:postid", getPost);

// @desc     Get all posts by author
// @route    GET /api/posts/author/:authorid
// @access   Public
router.get("/author/:authorid", getPostByAuthor);

// @desc     Update a post
// @route    PUT /api/posts/:postid
// @access   Private (authors, admins)
router.put(
    "/:postid",
    passport.authenticate("user-auth", { session: false }),
    updatePost
);

// @desc     Register a user
// @route    DELETE /api/posts/:postid
// @access   Private (authors, admins)
router.delete(
    "/:postid",
    passport.authenticate("user-auth", { session: false }),
    deletePost
);

// @desc     Publish a post
// @route    POST /api/users/publish
// @access   Private (admins)
router.put(
    "/:postid/publish",
    passport.authenticate("user-auth", { session: false }),
    publishPost
);

// @desc     Unpublish a post
// @route    POST /api/users/unpublish
// @access   Private (admins)
router.put(
    "/:postid/publish",
    passport.authenticate("user-auth", { session: false }),
    unpublishPost
);

module.exports = router;
