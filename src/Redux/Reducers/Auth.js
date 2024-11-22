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

export const fetchSessionId = createAsyncThunk(
  "Auth/fetchSessionId",
  async ({ requestToken }) => {
    console.log(requestToken);

    return fetch(BaseUrl + "authentication/session/new?" + ApiKey, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ request_token: requestToken }),
    })
      .then((res) => {
        console.log(res);

        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);

        localStorage.setItem("sessionId", data.session_id);
        window.location.href = `http://localhost:5173`;
        return data.session_id;
      });
  }
);

const slice = createSlice({
  name: "Auth",
  initialState: {
    loading: false,
    error: null,
    authenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRequestToken.fulfilled, (state, action) => {
        return { ...state, loading: false, RequestToken: action.payload };
      })
      .addCase(fetchRequestToken.pending, (state, action) => {
        return { ...state, loading: true };
      })

      .addCase(fetchSessionId.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          authenticated: true,
          SessionId: action.payload,
        };
      })
      .addCase(fetchSessionId.pending, (state, action) => {
        return { ...state, loading: true };
      });
  },
});

export default slice.reducer;
