import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import store from './store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Products from './routes/products';
import Carts from './routes/carts';
import ProductDetails from './routes/productDetails';
import Cart from './routes/cartDetails'
import Signup from './routes/signup';
import Login from './routes/login';
import Sidebar from './routes/sidebar';
import Profile from './routes/profile';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root />,
  
        children: [
          {
            path: "/",
            element:<Sidebar />,
            children: [
            {
              path:"/",
              element: <Products />,
            },
            {
              path:"products/",
              element: <Products />,
            },
            {
              path:"carts/",
              element: <Carts />,
            },
            {
              path: "product/:productId",
              element: <ProductDetails />
            },
            {
              path: "carts/:cartId",
              element: <Cart />
              }
            ]
          },
          {
          path: "signup/",
          element: <Signup />
          },
          {
            path: "login/",
            element: <Login />
          },
          {
            path: "profile/",
            element: <Profile />
          },
          ]
      }
    ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
