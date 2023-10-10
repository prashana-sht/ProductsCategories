import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {removeFromCart} from "../cartSlice"

export default function Carts() {
  const carts = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  const handleRemove = (cart) => {
    dispatch(removeFromCart(cart));
  }

  const cartid = carts.map ((cart) => 
  <Card sx={{ minWidth: 275, minHeight: 200}}>
        <CardContent>
        <Typography variant="h5" component="div">
          {cart.title}
        </Typography>
        <img src={cart.thumbnail} alt=""  style={{ height: '300px', width: '300px', objectFit:'cover'}}/>
        <br/> <br/>
        <Button onClick= {() => handleRemove(cart) } size="small"> Remove cart</Button> <br/><br/>
        </CardContent>
        </Card>
  );

  return (
    <>
        <Typography variant="h5" component="div">
        <h3>Total no. of quantity inside the cart: {carts.length}</h3>
        </Typography>
      <div style={{display: 'flex', flexWrap: 'wrap'}}> 
        {cartid}
      </div>
  </>
  );
}