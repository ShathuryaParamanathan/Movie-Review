import React from 'react';
import { Grid } from '@mui/material';
import Post from './Post';

const Feed = ({ posts }) => {
  return (
    <Grid container spacing={2} sx={{ height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "#6fa8f0", padding: "20px 40px" }}>
      {posts.map((post) => (
        <Grid item key={post.id} xs={12} md={4} sx={{ alignItems: "center", justifyContent: "center", margin: "10px" }}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Feed;
