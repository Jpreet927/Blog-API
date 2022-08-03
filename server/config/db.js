const mongoose = require("mongoose");
require("dotenv").config();

const dbURI = process.env.MONGO_URI;

const connectToDB = async () => {
    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected to MongoDB database");
    });
};

module.exports = connectToDB;
