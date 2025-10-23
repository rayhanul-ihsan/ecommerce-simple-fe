import { create, remove } from "lodash";
import { getItem, setItem } from "../../helper/localstorage.helper";
import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    product: []
}

export const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload
        }        
    }
})

export const { setProduct } = productsSlice.actions

export default productsSlice.reducer