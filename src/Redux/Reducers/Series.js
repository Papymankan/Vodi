import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseUrl, ApiKey } from "../FetchConfigs";

export const fetchLandingSeries = createAsyncThunk(
  "Series/fetchLandingSeries",
  async () => {
    return fetch(
      BaseUrl + "discover/tv" + "?" + ApiKey + "&" + "sort_by=vote_count.desc",
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data.results);

        return data.results;
      });
  }
);

export const fetchTopYearSeries = createAsyncThunk(
  "Series/fetchTopYearSeries",
  async () => {
    return fetch(
      BaseUrl + "discover/tv" + "?" + ApiKey + "&" + "first_air_date_year=2024",
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
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

export const fetchTrendingSeries = createAsyncThunk(
  "Series/fetchTrendingSeries",
  async () => {
    return fetch(BaseUrl + "trending/tv/day" + "?" + ApiKey, {
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

export const fetchTopRatedSerie = createAsyncThunk(
  "Series/fetchTopRatedSerie",
  async () => {
    return fetch(BaseUrl + "tv/top_rated" + "?" + ApiKey, {
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
        return data.results[0];
      });
  }
);

export const fetchSerieGenres = createAsyncThunk(
  "Series/fetchSerieGenres",
  async () => {
    return fetch(BaseUrl + "genre/tv/list" + "?" + ApiKey, {
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
        return data.genres;
      });
  }
);

export const fetchPopularSeries = createAsyncThunk(
  "Series/fetchPopularSeries",
  async () => {
    return fetch(BaseUrl + "discover/tv" + "?" + ApiKey, {
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

export const fetchAirTodaySeries = createAsyncThunk(
  "Series/fetchAirTodaySeries",
  async () => {
    return fetch(BaseUrl + "tv/airing_today" + "?" + ApiKey, {
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

export const fetchOnAirSeries = createAsyncThunk(
  "Series/fetchOnAirSeries",
  async () => {
    return fetch(BaseUrl + "tv/on_the_air" + "?" + ApiKey + "&page=2", {
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
  name: "Series",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLandingSeries.fulfilled, (state, action) => {
        return { ...state, LandingSeries: action.payload };
      })
      .addCase(fetchTopYearSeries.fulfilled, (state, action) => {
        return { ...state, TopYearSeries: action.payload };
      })
      .addCase(fetchSerieGenres.fulfilled, (state, action) => {
        return { ...state, SerieGenres: action.payload };
      })
      .addCase(fetchTrendingSeries.fulfilled, (state, action) => {
        return { ...state, TrendingSeries: action.payload };
      })
      .addCase(fetchTopRatedSerie.fulfilled, (state, action) => {
        return { ...state, TopRatedSerie: action.payload };
      })
      .addCase(fetchPopularSeries.fulfilled, (state, action) => {
        return { ...state, PopularSeries: action.payload };
      })
      .addCase(fetchAirTodaySeries.fulfilled, (state, action) => {
        return { ...state, AirTodaySeries: action.payload };
      })
      .addCase(fetchOnAirSeries.fulfilled, (state, action) => {
        return { ...state, OnAirSeries: action.payload };
      });
  },
});

export default slice.reducer;
