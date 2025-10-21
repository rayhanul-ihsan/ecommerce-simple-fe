import { combineReducers, configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/auth";


const reducers = combineReducers({
    auth: authSlice.reducer
});
const store = {
    reducer: reducers,    
} as ConfigureStoreOptions

export default configureStore(store);