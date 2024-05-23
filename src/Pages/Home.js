import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import Feed from "../Component/Feed";
import Nav from "../Component/Nav/Nav";

const Home = ({ posts }) => {
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Nav search={search} setSearch={setSearch} isLoggedIn={!isLoggedIn} />
      <Box p={2}>
        {posts.length ? (
          <Feed posts={posts} />
        ) : (
          <Typography variant="body1" sx={{ marginTop: "2rem" }}>
            No Posts to display
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Home;
