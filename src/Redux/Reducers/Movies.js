import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseUrl, ApiKey } from "../FetchConfigs";
import { shuffleArray } from "../../Funcs";

export const fetchLandingMovies = createAsyncThunk(
  "Movies/fetchLandingMovies",
  async () => {
    return fetch(
      BaseUrl +
        "discover/movie" +
        "?" +
        ApiKey +
        "&" +
        "sort_by=vote_count.desc",
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

export const fetchTopYearMovies = createAsyncThunk(
  "Movies/fetchTopYearMovies",
  async () => {
    return fetch(
      BaseUrl + "discover/movie" + "?" + ApiKey + "&" + "year=2024",
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

export const fetchTrendingMovies = createAsyncThunk(
  "Movies/fetchTrendingMovies",
  async ({time}) => {
    return fetch(BaseUrl + "trending/movie/" + time + "?" + ApiKey, {
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

export const fetchTopRatedMovie = createAsyncThunk(
  "Movies/fetchTopRatedMovie",
  async () => {
    return fetch(BaseUrl + "movie/top_rated" + "?" + ApiKey, {
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

export const fetchMovieGenres = createAsyncThunk(
  "Movies/fetchMovieGenres",
  async () => {
    return fetch(BaseUrl + "genre/movie/list" + "?" + ApiKey, {
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

export const fetchPopularMovies = createAsyncThunk(
  "Movies/fetchPopularMovies",
  async () => {
    return fetch(BaseUrl + "discover/movie" + "?" + ApiKey, {
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

export const fetchTheaterMovies = createAsyncThunk(
  "Movies/fetchTheaterMovies",
  async () => {
    return fetch(BaseUrl + "movie/now_playing" + "?" + ApiKey, {
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

export const fetchUpcomingMovies = createAsyncThunk(
  "Movies/fetchUpcomingMovies",
  async () => {
    return fetch(BaseUrl + "movie/upcoming" + "?" + ApiKey, {
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

export const fetchMovieDetails = createAsyncThunk(
  "Movies/fetchMovieDetails",
  async ({ id }) => {
    return fetch(BaseUrl + "movie/" + id + "?" + ApiKey, {
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

export const fetchMovieVideos = createAsyncThunk(
  "Movies/fetchMovieVideos",
  async ({ id }) => {
    return fetch(BaseUrl + "movie/" + id + "/videos?" + ApiKey, {
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

export const fetchMovieImages = createAsyncThunk(
  "Movies/fetchMovieImages",
  async ({ id }) => {
    return fetch(BaseUrl + "movie/" + id + "/images?" + ApiKey, {
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

export const fetchRecommandMovies = createAsyncThunk(
  "Movies/fetchRecommandMovies",
  async ({ id }) => {
    return fetch(BaseUrl + "movie/" + id + "/recommendations?" + ApiKey, {
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
        return shuffleArray(data.results);
      });
  }
);

export const fetchSimilarMovies = createAsyncThunk(
  "Movies/fetchSimilarMovies",
  async ({ id }) => {
    return fetch(BaseUrl + "movie/" + id + "/similar?" + ApiKey, {
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
        return shuffleArray(data.results);
      });
  }
);

export const fetchMovieCrews = createAsyncThunk(
  "Movies/fetchMovieCrews",
  async ({ id }) => {
    return fetch(BaseUrl + "movie/" + id + "/credits?" + ApiKey, {
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

export const fetchMovieReviews = createAsyncThunk(
  "Movies/fetchMovieReviews",
  async ({ id, page }) => {
    return fetch(
      BaseUrl + "movie/" + id + "/reviews?" + ApiKey + "&page=" + page,
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
        return data;
      });
  }
);

export const fetchMoviesWithGenre = createAsyncThunk(
  "Movies/fetchMoviesWithGenre",
  async ({ id, page }) => {
    return fetch(
      BaseUrl +
        "discover/movie?" +
        ApiKey +
        "&with_genres=" +
        id +
        "&page=" +
        page,
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
        return data;
      });
  }
);
const slice = createSlice({
  name: "Movies",
  initialState: {
    loadingMore: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLandingMovies.fulfilled, (state, action) => {
        return { ...state, LandingMovies: action.payload };
      })
      .addCase(fetchTopYearMovies.fulfilled, (state, action) => {
        return { ...state, TopYearMovies: action.payload };
      })
      .addCase(fetchMovieGenres.fulfilled, (state, action) => {
        return { ...state, MovieGenres: action.payload };
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        return { ...state, TrendingMovies: action.payload };
      })
      .addCase(fetchTopRatedMovie.fulfilled, (state, action) => {
        return { ...state, TopRatedMovie: action.payload };
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        return { ...state, PopularMovies: action.payload };
      })
      .addCase(fetchTheaterMovies.fulfilled, (state, action) => {
        return { ...state, TheaterMovies: action.payload };
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        return { ...state, UpcomingMovies: action.payload };
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        return { ...state, MovieDetails: action.payload };
      })
      .addCase(fetchMovieVideos.fulfilled, (state, action) => {
        return { ...state, MovieVideos: action.payload };
      })
      .addCase(fetchRecommandMovies.fulfilled, (state, action) => {
        return { ...state, RecommandMovies: action.payload };
      })
      .addCase(fetchSimilarMovies.fulfilled, (state, action) => {
        return { ...state, SimilarMovies: action.payload };
      })
      .addCase(fetchMovieImages.fulfilled, (state, action) => {
        return { ...state, MovieImages: action.payload };
      })
      .addCase(fetchMovieCrews.fulfilled, (state, action) => {
        return { ...state, MovieCrews: action.payload };
      })
      .addCase(fetchMovieReviews.fulfilled, (state, action) => {
        return { ...state, MovieReviews: action.payload };
      })
      .addCase(fetchMoviesWithGenre.fulfilled, (state, action) => {
        return {
          ...state,
          loadingMore: false,
          MoviesWithGenre: action.payload,
        };
      })
      .addCase(fetchMoviesWithGenre.pending, (state, action) => {
        return { ...state, loadingMore: true };
      });
  },
});

export default slice.reducer;
