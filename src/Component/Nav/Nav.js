import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';

const Nav = ({ search, setSearch, isLoggedIn }) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <Grid container alignItems="center" justifyContent="space-between" sx={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Grid item>
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="Search">Search Posts</label>
          <input
            id="search"
            type="text"
            placeholder="Search Posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </Grid>
      <Grid item>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', alignItems: 'center' }}>
          <li style={{ marginRight: '1rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <HomeIcon /> Home
            </Link>
          </li>
          <li style={{ marginRight: '1rem' }}>
            <Link to="/notification" style={{ textDecoration: 'none', color: 'inherit' }}>
              <NotificationsIcon /> Notification
            </Link>
          </li>
          <li style={{ marginRight: '1rem' }}>
            <Link to="/newPost" style={{ textDecoration: 'none', color: 'inherit' }}>
              <AddCircleIcon /> New Post
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Button variant="contained" startIcon={<PersonIcon />} >User</Button>
            </li>
          ) : (
            <Button variant="contained" startIcon={<PersonIcon />} onClick={handleSignIn}>Signin</Button>
          )}
        </ul>
      </Grid>
    </Grid>
  );
};

export default Nav;
