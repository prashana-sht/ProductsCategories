import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import loginSliceReducer from './loginSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        login: loginSliceReducer,
    },
})
