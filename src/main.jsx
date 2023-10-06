import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import Header from "./header.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Products from './routes/products';
import Carts from './routes/carts';
import Product from './routes/product';
import Cart from './routes/cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:"products/",
        element: <Products />,
      },
      {
        path:"carts/",
        element: <Carts />,
      }
    ]
  },
  {
    path: "product/:productId",
    element: <Product />
  },
  {
    path: "carts/:cartId",
    element: <Cart />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
