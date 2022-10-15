const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    image: {
        type: String,
        default:
            "https://images.unsplash.com/photo-1659609556402-d5d1f3a90499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
    },
    datetime: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    published: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Post", postSchema);
