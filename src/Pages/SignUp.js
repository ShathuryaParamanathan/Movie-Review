import React, { useState } from "react";
import { Typography, Grid, TextField, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import signupImage from "../Assets/signup.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({}); // State to hold form validation errors
  const [serverError, setServerError] = useState(""); // State to hold server error message

  const navigate = useNavigate();

  const validForm = () => {
    const newErrors = {};

    // Personal Information Validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.trim().length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(""); // Reset server error message
    if (validForm()) {
      try {
        const response = await axios.post("http://localhost:5000/user/signup", {
          name,
          email,
          password,
        });

        if (response.status === 200) {
          navigate("/signin");
        }
      } catch (error) {
        // Update server error message based on the error response
        if (error.response && error.response.data && error.response.data.message) {
          setServerError(error.response.data.message);
        } else {
          setServerError("An unexpected error occurred.");
        }
      }
    } else {
      setServerError("Form validation failed");
    }
  };

  return (
    <Grid container sx={{ display: "flex" }}>
      <Grid item xs={6}>
        <Box
          bgcolor="#fff"
          p={2}
          width={"600px"}
          border={"2px solid black"}
          margin={"100px 100px"}
          sx={{
            borderRadius: 2,
            boxShadow: 2,
            "&:hover": {
              boxShadow: 3,
            },
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            SignUp
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              required
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Email"
              fullWidth
              required
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Password"
              fullWidth
              required
              variant="standard"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Confirm Password"
              fullWidth
              required
              variant="standard"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              sx={{ marginBottom: 2 }}
            />
            {serverError && (
              <Typography color="error" sx={{ marginBottom: 2 }}>
                {serverError}
              </Typography>
            )}
            <Button type="submit" variant="contained" sx={{ marginRight: 1 }}>
              SignUp
            </Button>
            <Link to="/signin">
              <Button variant="contained">SignIn</Button>
            </Link>
          </form>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={signupImage} alt="SignUp" width={"400px"} />
      </Grid>
    </Grid>
  );
};

export default SignUp;
