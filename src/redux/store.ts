import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/slices/auth.slice"

const store = configureStore({
    reducer:{
        auth:authSlice
        // Add reducers here
    }
})

export default store;