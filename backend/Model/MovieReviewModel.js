const mongoose = require('mongoose');

const movieReviewSchema = new mongoose.Schema({
  movieTitle: {
    type: String,
    required: true
  },
  reviewContent: {
    type: String,
    required: true
  },
  movieCategory: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  imageURL: {
    type: String
  }
});

const MovieReview = mongoose.model('MovieReview', movieReviewSchema);

module.exports = MovieReview;
