const express = require("express");
const connectToDB = require("./config/db");
const cors = require("cors");
const expressValidator = require("express-validator");
const passport = require("passport");
require("dotenv").config();
require("./config/passport");

// App
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(expressValidator);
app.use(cors());

// Routes
const userRoutes = require("./routes/UserRoutes");
const postRoutes = require("./routes/PostRoutes");
const commentRoutes = require("./routes/CommentRoutes");

app.get("/", (req, res) => {
    res.status(200).send("Home page");
});
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/post/:postid/comments", commentRoutes);

// DB Connection
connectToDB();

// Server initialiation
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});
