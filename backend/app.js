const express = require("express");
const app = express();
const cors = require("cors");
const review = require("./routes/movie_review.js");
const user = require("./routes/user.js");

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
app.use("/", review);
app.use("/user", user);

module.exports = app;
