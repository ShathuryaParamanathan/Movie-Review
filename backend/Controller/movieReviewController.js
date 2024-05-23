const MovieReview = require("../Model/MovieReviewModel");
const User = require("../Model/UserModel");
const bcrypt = require("bcrypt");

const getAllReview = async (req, res) => {
  try {
    const movieReview = await MovieReview.find();
    res.json(movieReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createReview = async (req, res) => {
  try {
    const review = new MovieReview({
      movieTitle: req.body.movieTitle,
      reviewContent: req.body.reviewContent,
      movieCategory: req.body.movieCategory,
      rating: req.body.rating,
      imageURL: req.imageURL,
    });
    const createdReview = await review.save();

    res.status(200).json({ reviewId: createdReview._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllReview,
  createReview,
};
