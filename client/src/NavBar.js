import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

export default function ButtonAppBar() {



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">Home</Link>
          <Link to="/gameslist">Games</Link>
          <Link to="/mygames">My Games</Link>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1}}>
            Co-opper
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}