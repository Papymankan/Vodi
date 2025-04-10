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

export const fetchAccountDetail = createAsyncThunk(
  "Auth/fetchAccountDetail",
  async ({ SessionId }) => {
    return fetch(BaseUrl + "account?" + ApiKey + "&session_id=" + SessionId, {
      method: "GET",
      headers: {
        "accept": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        return data;
      });
  }
);

export const fetchSessionId = createAsyncThunk(
  "Auth/fetchSessionId",
  async ({ requestToken }) => {
    return fetch(BaseUrl + "authentication/session/new?" + ApiKey, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ request_token: requestToken }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        localStorage.setItem("sessionId", data.session_id);
        window.location.href = `https://vodi.liara.run/`;
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
  reducers: {
    logout: (state) => {
      state.authenticated = false;
      localStorage.removeItem("sessionId")
      window.location.href = `https://vodi.liara.run`;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRequestToken.fulfilled, (state, action) => {
        return { ...state, RequestToken: action.payload };
      })
      .addCase(fetchRequestToken.pending, (state, action) => {
        return { ...state, loading: true };
      })

      .addCase(fetchSessionId.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          SessionId: action.payload,
        };
      })
      .addCase(fetchSessionId.pending, (state, action) => {
        return { ...state, loading: true };
      })

      .addCase(fetchAccountDetail.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          authenticated: true,
          AccountDetail: action.payload,
        };
      })
      .addCase(fetchAccountDetail.pending, (state, action) => {
        return { ...state, loading: true };
      });
  },
});


export const { logout } = slice.actions;
export default slice.reducer;
