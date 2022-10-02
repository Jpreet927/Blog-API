const Comment = require("../models/Comment");

const createComment = async (req, res) => {
    const { message, name } = req.body;
    const postId = req.params.postid;

    const comment = new Comment({
        name,
        message,
        postId,
    });

    try {
        await comment.save();
        return res
            .status(200)
            .json({ message: "Successfully uploaded comment", comment });
    } catch (error) {
        return res.status(404).json({ message: "Could not upload comment." });
    }
};

const getAllComments = async (req, res) => {
    const postId = req.params.postid;

    try {
        const comments = await Comment.find({ postId: postId });
        if (!comments) {
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

const deleteComment = async (req, res) => {
    const postId = req.params.postid;

    try {
        await Comment.findByIdAndDelete(postId);
        return res
            .status(200)
            .json({ message: "Successfully deleted comment." });
    } catch (error) {
        return res.status(404).json({ message: "Could not delete comment." });
    }
};

module.exports = { createComment, getAllComments, deleteComment };
