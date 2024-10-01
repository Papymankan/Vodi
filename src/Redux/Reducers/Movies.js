import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseUrl, ApiKey } from "../FetchConfigs";

export const fetchMovies = createAsyncThunk(
  "Movies/fetchMovies",
  async ({ url, filters }) => {
    let filtersStr = filters.reduce((prev, next) => {
      return prev + "&" + next;
    });

    return fetch(BaseUrl + url + "?" + ApiKey + "&" + filtersStr, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        return data.results;
      });
  }
);

export const fetchTopYearMovies = createAsyncThunk(
  "Movies/fetchTopYearMovies",
  async ({ url }) => {
    return fetch(BaseUrl + url + "?" + ApiKey + "&" + "year=2024", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        return data.results;
      });
  }
);

const slice = createSlice({
  name: "Movies",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        console.log(state, action);
      })
      .addCase(fetchTopYearMovies.fulfilled, (state, action) => {
        return {...state , 'TopYearMovies' : action.payload}
    });
  },
});

export default slice.reducer;
