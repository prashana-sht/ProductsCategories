import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.carts = [...state.carts, action.payload]
    },
    removeFromCart: (state, action) => {
      console.log('remove called', action.payload)
      state.carts = state.carts.filter((c) => action.payload.id !== c.id)
    },
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer