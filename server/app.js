const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Home page");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});
