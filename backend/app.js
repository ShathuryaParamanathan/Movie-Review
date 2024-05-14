const express = require("express");
const app = express();

const review = require("./routes/movie_review.js");

app.use(express.json());
app.use("/review", review);

module.exports = app;
