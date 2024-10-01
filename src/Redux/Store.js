import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./Reducers/Movies";

export default configureStore({
    reducer:{
        MoviesReducer
    }
})



// api_key=80497f2a6736628e03be8e27324e5ce2