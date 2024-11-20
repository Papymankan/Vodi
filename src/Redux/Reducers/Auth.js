import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseUrl, ApiKey } from "../FetchConfigs";

export const fetchRequestToken = createAsyncThunk(
  "Auth/fetchRequestToken",
  async () => {
    return fetch(BaseUrl + "authentication/token/new?" + ApiKey, {
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
        return data;
      });
  }
);

const slice = createSlice({
  name: "Auth",
  initialState: {
    loading: true,
    loadingMore: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRequestToken.fulfilled, (state, action) => {
        return { ...state, loading: false, ReqToken: action.payload };
      })
      .addCase(fetchRequestToken.pending, (state, action) => {
        return { ...state, loading: true };
      });
  },
});

export default slice.reducer;
