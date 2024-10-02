import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./Reducers/Movies";
import SeriesReducer from "./Reducers/Series";

export default configureStore({
    reducer:{
        Movies:MoviesReducer,
        Series:SeriesReducer
    }
})



// api_key=80497f2a6736628e03be8e27324e5ce2