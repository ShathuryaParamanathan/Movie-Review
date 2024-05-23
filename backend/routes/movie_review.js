const express = require("express");
const router = express.Router();
const MovieReview = require("../Controller/movieReviewController");

router.route("/review").get(MovieReview.getAllReview);
router.route("/newReview").post(MovieReview.createReview);

module.exports = router;
