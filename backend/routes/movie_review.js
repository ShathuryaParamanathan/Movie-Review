const express = require("express");
const router = express.Router();
const MovieReview = require("../Controller/movieReviewController");

router.route("/").get(MovieReview.getAllReview);

module.exports = router;
