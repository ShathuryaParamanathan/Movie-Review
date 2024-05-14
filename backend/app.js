const express = require("express");
const app = express();
const cors = require("cors");
const review = require("./routes/movie_review.js");

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
app.use("/review", review);

module.exports = app;
