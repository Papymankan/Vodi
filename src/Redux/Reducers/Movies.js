import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseUrl, ApiKey } from "../FetchConfigs";
import { shuffleArray } from "../../Funcs";
import Store from "../Store";

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
  async ({ year, page }) => {
    return fetch(
      BaseUrl +
        "discover/movie" +
        "?" +
        ApiKey +
        "&year=" +
        year +
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

export const fetchTrendingMovies = createAsyncThunk(
  "Movies/fetchTrendingMovies",
  async ({ time }) => {
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

export const fetchTopRatedMovies = createAsyncThunk(
  "Movies/fetchTopRatedMovies",
  async ({ page }) => {
    return fetch(
      BaseUrl +
        "discover/movie" +
        "?" +
        ApiKey +
        "&page=" +
        page +
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
        return data;
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

export const fetchPopularMovie = createAsyncThunk(
  "Movies/fetchPopularMovie",
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
        return data.results[0];
      });
  }
);

export const fetchPopularMovies = createAsyncThunk(
  "Movies/fetchPopularMovies",
  async ({ page }) => {
    return fetch(BaseUrl + "discover/movie" + "?" + ApiKey + "&page=" + page, {
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

export const fetchTheaterMovies = createAsyncThunk(
  "Movies/fetchTheaterMovies",
  async ({ page }) => {
    return fetch(
      BaseUrl + "movie/now_playing" + "?" + ApiKey + "&page=" + page,
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

export const fetchUpcomingMovies = createAsyncThunk(
  "Movies/fetchUpcomingMovies",
  async ({ page }) => {
    return fetch(BaseUrl + "movie/upcoming" + "?" + ApiKey + "&page=" + page, {
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
        return data;
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
        return data;
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

export const AddToWatchList = createAsyncThunk(
  "Movies/AddToWatchList",
  async ({ accountId, movieId, remove }) => {
    return fetch(
      BaseUrl +
        "account/" +
        accountId +
        "/watchlist?" +
        ApiKey +
        "&session_id=" +
        localStorage.getItem("sessionId"),
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: movieId,
          watchlist: remove ? false : true,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          window.location.reload();
          return res.json();
        }
      })
      .then((data) => {
        return data;
      });
  }
);

export const AddToFavorite = createAsyncThunk(
  "Movies/AddToFavorite",
  async ({ accountId, movieId, remove }) => {
    return fetch(
      BaseUrl +
        "account/" +
        accountId +
        "/favorite?" +
        ApiKey +
        "&session_id=" +
        localStorage.getItem("sessionId"),
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: movieId,
          favorite: remove ? false : true,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          window.location.reload();
          return res.json();
        }
      })
      .then((data) => {
        return data;
      });
  }
);

export const fetchWatchListMovies = createAsyncThunk(
  "Movies/fetchWatchListMovies",
  async ({ accountId, page }) => {
    return fetch(
      BaseUrl +
        "account/" +
        accountId +
        "/watchlist/movies?" +
        ApiKey +
        "&session_id=" +
        localStorage.getItem("sessionId") +
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

export const fetchFavoriteMovies = createAsyncThunk(
  "Movies/fetchFavoriteMovies",
  async ({ accountId, page }) => {
    return fetch(
      BaseUrl +
        "account/" +
        accountId +
        "/favorite/movies?" +
        ApiKey +
        "&session_id=" +
        localStorage.getItem("sessionId") +
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

export const fetchRatedMovies = createAsyncThunk(
  "Movies/fetchRatedMovies",
  async ({ accountId, page }) => {
    return fetch(
      BaseUrl +
        "account/" +
        accountId +
        "/rated/movies?" +
        ApiKey +
        "&session_id=" +
        localStorage.getItem("sessionId") +
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

export const fetchIsInFavorites = createAsyncThunk(
  "Movies/fetchIsInFavorites",
  async ({ accountId, movieId, totalPages }) => {
    let page = 1;
    let isThere = false;

    while (totalPages >= page) {
      const response = await fetch(
        BaseUrl +
          "account/" +
          accountId +
          "/favorite/movies?" +
          ApiKey +
          "&session_id=" +
          localStorage.getItem("sessionId") +
          "&page=" +
          page,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        if (data.results.some((movie) => movie.id === movieId)) {
          isThere = true;
          break;
        }
      }
      page++;
    }

    return isThere;
  }
);

export const fetchIsInWatchList = createAsyncThunk(
  "Movies/fetchIsInWatchList",
  async ({ accountId, movieId, totalPages }) => {
    let page = 1;
    let isThere = false;

    while (totalPages >= page) {
      const response = await fetch(
        BaseUrl +
          "account/" +
          accountId +
          "/watchlist/movies?" +
          ApiKey +
          "&session_id=" +
          localStorage.getItem("sessionId") +
          "&page=" +
          page,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        if (data.results.some((movie) => movie.id === movieId)) {
          isThere = true;
          break;
        }
      }
      page++;
    }

    return isThere;
  }
);

export const fetchIsInRated = createAsyncThunk(
  "Movies/fetchIsInRated",
  async ({ accountId, movieId, totalPages }) => {
    let page = 1;
    let rate = undefined;

    while (totalPages >= page) {
      const response = await fetch(
        BaseUrl +
          "account/" +
          accountId +
          "/rated/movies?" +
          ApiKey +
          "&session_id=" +
          localStorage.getItem("sessionId") +
          "&page=" +
          page,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        data.results.some((movie) => {
          if (movie.id === movieId) rate = movie.rating;
        });
      }

      page++;
    }

    return rate;
  }
);

export const RateMovie = createAsyncThunk(
  "Movies/RateMovie",
  async ({ movieId, rating }) => {
    return fetch(
      BaseUrl +
        "movie/" +
        movieId +
        "/rating?" +
        ApiKey +
        "&session_id=" +
        localStorage.getItem("sessionId"),
      {
        method: rating ? "POST" : "DELETE",
        headers: {
          accept: "application/json",
          "content-type": rating ? "application/json" : "",
        },
        body: rating
          ? JSON.stringify({
              value: rating,
            })
          : undefined,
      }
    )
      .then((res) => {
        console.log(res);

        if (res.ok) {
          window.location.reload();
          return res.json();
        }
      })
      .then((data) => {
        return data;
      });
  }
);

export const CreateList = createAsyncThunk(
  "Movies/CreateList",
  async ({ name, desc }) => {
    console.log("fetch 1");

    return fetch(
      BaseUrl +
        "list?" +
        ApiKey +
        "&session_id=" +
        localStorage.getItem("sessionId"),
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          description: desc,
          language: "en",
        }),
      }
    )
      .then((res) => {
        console.log(res);

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

export const fetchLists = createAsyncThunk(
  "Movies/fetchLists",
  async ({ accountId }) => {
    return fetch(
      BaseUrl +
        "account/" +
        accountId +
        "/lists?" +
        ApiKey +
        "&session_id=" +
        localStorage.getItem("sessionId")
    )
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

export const AddToList = createAsyncThunk(
  "Movies/AddToList",
  async ({ movieId, listId }) => {
    return fetch(
      BaseUrl +
        "list/" +
        listId +
        "/add_item?" +
        ApiKey +
        "&session_id=" +
        localStorage.getItem("sessionId"),
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          media_id: movieId,
        }),
      }
    )
      .then((res) => {
        console.log(res);

        if (res.ok) {
          window.location.reload();
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);

        return data;
      });
  }
);

export const FetchListDetail = createAsyncThunk(
  "Movies/FetchListDetail",
  async ({ listId, page }) => {
    return fetch(BaseUrl + "list/" + listId + "?" + ApiKey + "&page=" + page)
      .then((res) => {
        console.log(res);

        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        return data;
      });
  }
);

export const DeleteList = createAsyncThunk(
  "Movies/DeleteList",
  async ({ listId, accountId }) => {
    return fetch(
      BaseUrl +
        "list/" +
        listId +
        "?" +
        ApiKey +
        "&session_id=" +
        localStorage.getItem("sessionId"),
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        Store.dispatch(fetchLists({ accountId }));
        res.json();
      }
    });
  }
);

export const ClearList = createAsyncThunk(
  "Movies/ClearList",
  async ({ listId }) => {
    return fetch(
      BaseUrl +
        "list/" +
        listId +
        "/clear?" +
        ApiKey +
        "&session_id=" +
        localStorage.getItem("sessionId") +
        "&confirm=true",
      {
        method: "POST",
        headers: {
          accept: "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        window.location.reload();
        res.json();
      }
    });
  }
);

export const DeleteMovieInList = createAsyncThunk(
  "Movies/DeleteMovieInList",
  async ({ listId, movieId }) => {
    return fetch(
      BaseUrl +
        "list/" +
        listId +
        "/remove_item?" +
        ApiKey +
        "&session_id=" +
        localStorage.getItem("sessionId"),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          media_id: movieId,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        window.location.reload();
      }
    });
  }
);

export const FetchCastDetail = createAsyncThunk(
  "Movies/FetchCastDetail",
  async ({ castId }) => {
    return fetch(BaseUrl + "person/" + castId + "?" + ApiKey)
      .then((res) => {
        console.log(res);

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

export const FetchCastMovieCredits = createAsyncThunk(
  "Movies/FetchCastMovieCredits",
  async ({ castId }) => {
    return fetch(BaseUrl + "person/" + castId + "/movie_credits?" + ApiKey)
      .then((res) => {
        console.log(res);

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

const slice = createSlice({
  name: "Movies",
  initialState: {
    loadingMore: false,
    fullScreenLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLandingMovies.fulfilled, (state, action) => {
        return { ...state, LandingMovies: action.payload };
      })
      .addCase(fetchTopYearMovies.fulfilled, (state, action) => {
        return { ...state, loadingMore: false, TopYearMovies: action.payload };
      })
      .addCase(fetchTopYearMovies.pending, (state, action) => {
        return { ...state, loadingMore: true };
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

      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        return { ...state, loadingMore: false, TopRatedMovies: action.payload };
      })
      .addCase(fetchTopRatedMovies.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })

      .addCase(fetchPopularMovie.fulfilled, (state, action) => {
        return { ...state, PopularMovie: action.payload };
      })

      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        return { ...state, loadingMore: false, PopularMovies: action.payload };
      })
      .addCase(fetchPopularMovies.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })

      .addCase(fetchTheaterMovies.fulfilled, (state, action) => {
        return { ...state, loadingMore: false, TheaterMovies: action.payload };
      })
      .addCase(fetchTheaterMovies.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })

      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        return { ...state, loadingMore: false, UpcomingMovies: action.payload };
      })
      .addCase(fetchUpcomingMovies.pending, (state, action) => {
        return { ...state, loadingMore: true };
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
      })
      .addCase(fetchWatchListMovies.fulfilled, (state, action) => {
        return {
          ...state,
          WatchListMovies: action.payload,
          loadingMore: false,
        };
      })
      .addCase(fetchWatchListMovies.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })
      .addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
        return { ...state, FavoriteMovies: action.payload, loadingMore: false };
      })
      .addCase(fetchFavoriteMovies.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })
      .addCase(fetchRatedMovies.fulfilled, (state, action) => {
        return { ...state, RatedMovies: action.payload, loadingMore: false };
      })
      .addCase(fetchRatedMovies.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })
      .addCase(fetchIsInFavorites.fulfilled, (state, action) => {
        return { ...state, IsInFavorites: action.payload };
      })
      .addCase(fetchIsInWatchList.fulfilled, (state, action) => {
        return { ...state, IsInWatchList: action.payload };
      })
      .addCase(fetchIsInRated.fulfilled, (state, action) => {
        return { ...state, IsInRated: action.payload };
      })
      .addCase(RateMovie.pending, (state, action) => {
        return { ...state, fullScreenLoading: true };
      })
      .addCase(CreateList.fulfilled, (state, action) => {
        return { ...state, fullScreenLoading: false };
      })
      .addCase(CreateList.pending, (state, action) => {
        return { ...state, fullScreenLoading: true };
      })
      .addCase(fetchLists.fulfilled, (state, action) => {
        return {
          ...state,
          fullScreenLoading: false,
          MovieLists: action.payload,
        };
      })
      .addCase(fetchLists.pending, (state, action) => {
        return { ...state, fullScreenLoading: true };
      })
      .addCase(AddToList.fulfilled, (state, action) => {
        return { ...state, fullScreenLoading: false };
      })
      .addCase(AddToList.pending, (state, action) => {
        return { ...state, fullScreenLoading: true };
      })
      .addCase(FetchListDetail.fulfilled, (state, action) => {
        return {
          ...state,
          fullScreenLoading: false,
          listDetail: action.payload,
        };
      })
      .addCase(FetchListDetail.pending, (state, action) => {
        return { ...state, fullScreenLoading: true };
      })
      .addCase(DeleteList.fulfilled, (state, action) => {
        return { ...state, fullScreenLoading: false };
      })
      .addCase(DeleteList.pending, (state, action) => {
        return { ...state, fullScreenLoading: true };
      })
      .addCase(DeleteMovieInList.fulfilled, (state, action) => {
        return { ...state, fullScreenLoading: false };
      })
      .addCase(DeleteMovieInList.pending, (state, action) => {
        return { ...state, fullScreenLoading: true };
      })
      .addCase(ClearList.fulfilled, (state, action) => {
        return { ...state, fullScreenLoading: false };
      })
      .addCase(ClearList.pending, (state, action) => {
        return { ...state, fullScreenLoading: true };
      })
      .addCase(FetchCastDetail.fulfilled, (state, action) => {
        return {
          ...state,
          fullScreenLoading: false,
          CastDetail: action.payload,
        };
      })
      .addCase(FetchCastDetail.pending, (state, action) => {
        return { ...state, fullScreenLoading: true };
      })
      .addCase(FetchCastMovieCredits.fulfilled, (state, action) => {
        return {
          ...state,
          fullScreenLoading: false,
          CastMovies: action.payload,
        };
      })
      .addCase(FetchCastMovieCredits.pending, (state, action) => {
        return { ...state, fullScreenLoading: true };
      });
  },
});

export default slice.reducer;
