import React from "react";
import { Typography, Card, CardContent, Grid, Button, Rating, IconButton } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Post = ({ post }) => {
  const handleLike = () => {
    // Implement like functionality here
  };

  const handleDislike = () => {
    // Implement dislike functionality here
  };

  return (
    <Card variant="outlined" sx={{ marginBottom: "1rem" ,borderRadius:"20px" ,width:"350px", height:"600px"}}>
      <CardContent>
        {post.imageSrc && (
          <img
            src={post.imageSrc}
            alt="Post"
            style={{ width: "300px", height: "300px", marginBottom: "1rem" }}
          />
        )}
        <Typography variant="h4" gutterBottom>
          {post.title}
        </Typography>
        <Rating value={post.rating}/>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {post.datetime}
        </Typography>
  
        <Typography variant="body1" paragraph>
          {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
        </Typography>
        <Grid >
          <IconButton onClick={handleLike}>
            <ThumbUpIcon />
          </IconButton>
          <IconButton onClick={handleDislike}>
            <ThumbDownIcon />
          </IconButton>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Post;
