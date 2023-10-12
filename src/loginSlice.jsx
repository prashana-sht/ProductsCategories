import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false,
        token: null,
        email: null,
        firstName: null,
        lastName: null,
        image: null,
    },
    reducers: {
        login: (state, action) => {
            console.log(action.payload, 'action')
            state.isLoggedIn = true
            state.token = action.payload.token
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.image = action.payload.image
            state.username = action.payload.username
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.token = null
            state.email = null
            state.firstName = null
            state.lastName = null
            state.image = null
        },
    },
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer
