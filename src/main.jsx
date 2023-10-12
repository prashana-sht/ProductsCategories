import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import store from './store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Products from './routes/products'
import ProductDetails from './routes/productDetails'
import Signup from './routes/signup'
import Login from './routes/login'
import Sidebar from './routes/sidebar'
import Profile from './routes/profile'
import { Category } from '@mui/icons-material'
import CategoryDetails from './routes/categoryDetails'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,

        children: [
            {
                path: '/',
                element: <Sidebar />,
                children: [
                    {
                        path: '/categories/:categoryID',
                        element: <CategoryDetails />,
                    },
                    {
                        path: '/',
                        element: <Products />,
                    },
                    {
                        path: 'products/',
                        element: <Products />,
                    },
        
                    {
                        path: 'product/:productId',
                        element: <ProductDetails />,
                    },
                   
                ],
            },
            {
                path: 'signup/',
                element: <Signup />,
            },
            {
                path: 'login/',
                element: <Login />,
            },
            {
                path: 'profile/',
                element: <Profile />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
