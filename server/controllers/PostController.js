const Post = require("../models/Post");
const { getRandomImage } = require("../lib/unsplash");

const createPost = async (req, res) => {
    const { author, title, content, published } = req.body;

    try {
        const image = await getRandomImage();
        const post = new Post({
            title,
            content,
            author,
            published,
            image,
        });

        const newPost = await post.save();
        console.log("finished saving post");
        return res
            .status(200)
            .json({ message: "Successfully uploaded post", newPost });
    } catch (error) {
        return res.status(404).json({ message: "Could not upload post." });
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        if (!posts) {
            return res
                .status(404)
                .json({ message: "Error: Could not retrieve posts" });
        }
        return res.status(200).json({ message: "Retrieved posts", posts });
    } catch (error) {
        return res
            .status(404)
            .json({ message: "Error: Could not retrieve posts" });
    }
};

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: "Could not find post." });
        }

        return res.status(200).json({ post });
    } catch (error) {
        return res.status(404).json({ message: "Could not find post." });
    }
};

const updatePost = async (req, res) => {
    try {
        const { title, content, author, published } = req.body;
        await Post.findByIdAndUpdate(req.params.id, {
            title,
            content,
            author,
            published,
        });
        return res.status(200).json({ message: "Successfully updated post." });
    } catch (error) {
        return res.status(404).json({ message: "Could not update post." });
    }
};

const deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Successfully deleted post." });
    } catch (error) {
        return res.status(404).json({ message: "Could not delete post." });
    }
};

const publishPost = async (req, res) => {};

const unpublishPost = async (req, res) => {};

module.exports = {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost,
    publishPost,
    unpublishPost,
};
