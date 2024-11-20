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
        console.log(data);

        return data.request_token;
      });
  }
);

const slice = createSlice({
  name: "Auth",
  initialState: {
    sessionId: null,
    loading: false,
    error: null,
    authenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRequestToken.fulfilled, (state, action) => {
        console.log(action.payload);
        return { ...state, loading: false, RequestToken: action.payload };
      })
      .addCase(fetchRequestToken.pending, (state, action) => {
        return { ...state, loading: true };
      });
  },
});

export default slice.reducer;
