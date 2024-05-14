import React from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material';

const Header = ({ title }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  title: "App"
};

export default Header;
