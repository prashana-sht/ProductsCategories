import React, {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout} from '../loginSlice';

export default function Header() {
  const userInfo = useSelector((state) => state.login);

  console.log(userInfo, "userInfo");
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(login());
    }else{
      dispatch(logout());
    }
  },[dispatch]);
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };
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
            {
            userInfo.isLoggedIn ? (<>
            <Link to = "/profile">Profile</Link>
            
            <Button onClick={handleLogout}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log Out
            </Button>
            </>)
            :(<><Link to = "/signup">Signup</Link>
            <Link to = "/login">Login</Link></>)
            }
          
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    )
}