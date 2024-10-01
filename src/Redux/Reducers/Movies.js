import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseUrl, ApiKey } from "../FetchConfigs";

export const fetchMovies = createAsyncThunk(
  "Movies/fetchMovies",
  async ({ url, filters }) => {
    let filtersStr = filters.reduce((prev, next) => {
      console.log(prev, next);
      return prev + "&" + next;
    });

    console.log(BaseUrl + url + "?" + ApiKey + "&" + filtersStr);

    fetch(BaseUrl + url + "?" + ApiKey + "&" + filtersStr, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
          console.log(data);
        return data
      });
  }
);

const slice = createSlice({
  name: "Movies",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => [
      ...action.payload,
    ]);
  },
});

export default slice.reducer