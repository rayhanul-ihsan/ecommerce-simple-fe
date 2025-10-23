import { combineReducers, configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/auth";
import { productsSlice } from "./reducers/product";


const reducers = combineReducers({
    auth: authSlice.reducer,
    product: productsSlice.reducer
});
const store = {
    reducer: reducers,    
} as ConfigureStoreOptions

export default configureStore(store);