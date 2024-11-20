import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./Reducers/Movies";
import SeriesReducer from "./Reducers/Series";
import AuthReducer from "./Reducers/Auth";

export default configureStore({
    reducer:{
        Movies:MoviesReducer,
        Series:SeriesReducer,
        Auth:AuthReducer,
    }
})



// api_key=80497f2a6736628e03be8e27324e5ce2