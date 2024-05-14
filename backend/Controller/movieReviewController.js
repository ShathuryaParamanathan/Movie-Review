const MovieReview = require("../Model/MovieReviewModel");
const bcrypt = require("bcrypt");

const getAllReview = async (req, res) => {
  try {

    console.log("hi");
    const movieReview = await MovieReview.find();
    res.json(movieReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// const createReview = async (req, res) => {
//     try {
//       const sellers = await MovieReview.find();
//       res.json(sellers);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };

module.exports = {
    getAllReview,
    // createReview,
  };