import React, { useState } from "react";
import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loginImage from "../Assets/login.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to hold error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/user/signin",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("successful login");
        navigate("/home");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <Grid container sx={{ display: "flex", margin: "20px" }}>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
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
            SignIn
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              required
              fullWidth
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Password"
              required
              fullWidth
              variant="standard"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            {error && (
              <Typography color="error" sx={{ marginBottom: 2 }}>
                {error}
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button type="submit" variant="contained">
                SignIn
              </Button>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button variant="contained" sx={{ marginLeft: "10px" }}>
                  SignUp
                </Button>
              </Link>
            </Box>
          </form>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={loginImage} alt="Login" width={"400px"} />
      </Grid>
    </Grid>
  );
};

export default SignIn;
