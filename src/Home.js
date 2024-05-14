import React from 'react';
import { Typography, Box } from '@mui/material';
import Feed from './Component/Feed';

const Home = ({ posts }) => {
  return (
    <Box p={2}>
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <Typography variant="body1" sx={{ marginTop: '2rem' }}>
          No Posts to display
        </Typography>
      )}
    </Box>
  );
};

export default Home;
