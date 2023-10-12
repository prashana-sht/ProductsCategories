import React, {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout} from '../loginSlice';

export default function Header() {
  const userInfo = useSelector((state) => state.login);

  console.log(userInfo, "userInfo");
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const image = localStorage.getItem("image");
    const username = localStorage.getItem("username");

    if (token) {
      dispatch(login(
        {token, email, firstName, lastName, image, username}
      ));
    }else{
      dispatch(logout());
    }
  },[dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
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
            <Link to = "/profile">
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}> Profile
            </Button>
            </Link>
            
            <Link to = "/login">
            <Button onClick={handleLogout}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log Out
            </Button>
            </Link>
              
              <h2> Welcome {userInfo.firstName}</h2>

            </>)
            :(<><Link to = "/signup">
              <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>Signup
            </Button>
              </Link>
            <Link to = "/login">
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>Login
            </Button>
              </Link></>)
            }
          
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    )
}