import { create, remove } from "lodash";
import { getItem, setItem } from "../../helper/localstorage.helper";
import { createSlice } from "@reduxjs/toolkit";


const me = getItem('me')

const initialState ={
    loginUser: me
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.loginUser = action.payload
            setItem('me', action.payload)
        },
        logout: (state) => {
            state.loginUser = null
            localStorage.removeItem('me')
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer