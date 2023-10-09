import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to = "/" className='color'>
          <Typography variant="h6" component="div"sx={{ flexGrow: 1 }}>
             Namespace Cart 
          </Typography>
          </Link>
          
          <div className='nav-links'>
          <Link to = "/signup">Signup</Link>
          <Link to = "/login">Login</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    )
}