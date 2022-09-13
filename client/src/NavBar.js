import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ButtonAppBar({ loggedIn, logoutUser, currentUser }) {
  
  const loggedOutLinks = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button>
              <Link to="/">Home</Link>
            </Button>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Co-opper
            </Typography>
            <Button>
              <Link to="/signup">Sign Up</Link>
            </Button>
            <Button>
              <Link to="/login">Login</Link>
            </Button>
            <button onClick={handleLogout}>Log out</button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
  };

  const loggedInLinks = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button>
              <Link to="/">Home</Link>
            </Button>
            <Button>
              <Link to="/gameslist">Games</Link>
            </Button>
            <Button>
              <Link to="/mygames">My Games</Link>
            </Button>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Co-opper
            </Typography>
            <Button>
              <Link to="/signup">Sign Up</Link>
            </Button>
            <Button>
              <Link to="/login">Login</Link>
            </Button>
            <button onClick={handleLogout}>Log out</button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

  return <div>{loggedIn ? loggedInLinks() : loggedOutLinks()}</div>;
}
