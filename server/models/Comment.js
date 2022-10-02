const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Post",
        },
        datetime: {
            type: Date,
            required: true,
            default: Date.now(),
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Comment", commentSchema);
