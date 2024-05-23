import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";

const NewPost = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [movieCategory, setMovieCategory] = useState("");
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(0);

  const handleMovieTitleChange = (e) => {
    setMovieTitle(e.target.value);
  };

  const handleReviewContentChange = (e) => {
    setReviewContent(e.target.value);
  };

  const handleMovieCategoryChange = (e) => {
    setMovieCategory(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  const handlePostSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/newReview",
        {
          movieTitle,
          reviewContent,
          movieCategory,
          rating,
          image,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error posting movie review:", error);
    }
  };
  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Write a Movie Review
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Movie Title"
            variant="outlined"
            value={movieTitle}
            onChange={handleMovieTitleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Review Content"
            multiline
            rows={4}
            variant="outlined"
            value={reviewContent}
            onChange={handleReviewContentChange}
          />
        </Grid>
        <Grid item xs={9}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="movie-category-label">Movie Category</InputLabel>
            <Select
              labelId="movie-category-label"
              id="movie-category"
              value={movieCategory}
              onChange={handleMovieCategoryChange}
              label="Movie Category"
            >
              <MenuItem value="">Select a category</MenuItem>
              <MenuItem value="Action">Action</MenuItem>
              <MenuItem value="Comedy">Comedy</MenuItem>
              <MenuItem value="Drama">Drama</MenuItem>
              <MenuItem value="Thriller">Thriller</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="rating-label">Rating</InputLabel>
            <Select
              labelId="rating-label"
              id="rating"
              value={rating}
              onChange={handleRatingChange}
              label="Rating"
            >
              <MenuItem value={0}>Select a rating</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              {image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={URL.createObjectURL(image)}
                  alt="Uploaded Image"
                  style={{ marginBottom: "1rem" }}
                />
              )}
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" component="span">
                  {image ? "Change Image" : "Upload Image"}
                </Button>
              </label>
              {image && (
                <Button
                  variant="outlined"
                  onClick={handleImageRemove}
                  style={{ marginLeft: "1rem" }}
                >
                  Remove Image
                </Button>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handlePostSubmit}
          >
            Post Review
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewPost;
