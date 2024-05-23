import React from 'react';
import '../Style/Intro.css'
import { Grid,Button } from '@mui/material';
import PersonIcon from "@mui/icons-material/Person";
import { Link } from 'react-router-dom';

const Intro = () => {     
   
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to MovieBuff!</h1>
        <p>Your ultimate destination for discovering and sharing movie reviews!</p>
        <Grid item>
            <Link to='/signin'>
        <Button
          variant="contained"
          startIcon={<PersonIcon />}
        >
          SignIn
        </Button>
        </Link>
      </Grid>
      </header>
     
    </div>
  )
}

export default Intro