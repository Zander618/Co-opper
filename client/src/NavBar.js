import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default function ButtonAppBar({ loggedIn, logoutUser }) {
  const navigate = useNavigate()
  
  const loggedOutLinks = () => {
    return (
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static">
          <Toolbar>
          <Typography noWrap>
            <Link
              to="/"
              style={{
                mr: 4,
                variant: "h4",
                color: "white",
                padding: 10,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Home
            </Link>
          </Typography>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Co-opper
            </Typography>
            <Typography noWrap>
            <Link
              to="/signup"
              style={{
                mr: 4,
                variant: "h4",
                color: "white",
                padding: 10,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Sign Up
            </Link>
          </Typography>
          <Typography noWrap>
            <Link
              to="/login"
              style={{
                mr: 4,
                variant: "h4",
                color: "white",
                padding: 10,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Login
            </Link>
          </Typography>
            <button onClick={handleLogout}>Log out</button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      navigate("/login")
      logoutUser();
    })
  };

  const loggedInLinks = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography noWrap>
            <Link
              to="/"
              style={{
                mr: 4,
                variant: "h4",
                color: "white",
                padding: 10,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Home
            </Link>
          </Typography>
            <Typography noWrap>
            <Link
              to="/games"
              style={{
                mr: 4,
                variant: "h4",
                color: "white",
                padding: 10,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Games
            </Link>
          </Typography>
            <Typography noWrap>
            <Link
              to="/myreviews"
              style={{
                mr: 4,
                variant: "h4",
                color: "white",
                padding: 10,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              My Reviews
            </Link>
          </Typography>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Co-opper
            </Typography>
            <button onClick={handleLogout}>Log out</button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

  return <div>{loggedIn ? loggedInLinks() : loggedOutLinks()}</div>;
}
