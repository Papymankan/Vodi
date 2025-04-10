import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseUrl, ApiKey } from "../FetchConfigs";
import { shuffleArray } from "../../Funcs";

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
  async ({ year, page }) => {
    return fetch(
      BaseUrl +
        "discover/tv" +
        "?" +
        ApiKey +
        "&" +
        "first_air_date_year=" +
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

export const fetchTrendingSeries = createAsyncThunk(
  "Series/fetchTrendingSeries",
  async ({ time }) => {
    return fetch(BaseUrl + "trending/tv/" + time + "?" + ApiKey, {
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

export const fetchTopRatedSeries = createAsyncThunk(
  "Series/fetchTopRatedSeries",
  async ({ page }) => {
    return fetch(
      BaseUrl +
        "discover/tv" +
        "?" +
        ApiKey +
        "&page=" +
        page +
        "&sort_by=vote_count.desc",
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

export const fetchPopularSerie = createAsyncThunk(
  "Series/fetchPopularSerie",
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
        return data.results[0];
      });
  }
);

export const fetchPopularSeries = createAsyncThunk(
  "Series/fetchPopularSeries",
  async ({ page }) => {
    return fetch(BaseUrl + "discover/tv" + "?" + ApiKey + "&page=" + page, {
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

export const fetchAirTodaySeries = createAsyncThunk(
  "Series/fetchAirTodaySeries",
  async ({ page }) => {
    return fetch(BaseUrl + "tv/airing_today" + "?" + ApiKey + "&page=" + page, {
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

export const fetchOnAirSeries = createAsyncThunk(
  "Series/fetchOnAirSeries",
  async ({ page }) => {
    return fetch(BaseUrl + "tv/on_the_air" + "?" + ApiKey + "&page=" + page, {
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

export const fetchSerieDetails = createAsyncThunk(
  "Series/fetchSerieDetails",
  async ({ id }) => {
    return fetch(BaseUrl + "tv/" + id + "?" + ApiKey, {
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

export const fetchRecommandSeries = createAsyncThunk(
  "Series/fetchRecommandSeries",
  async ({ id }) => {
    return fetch(BaseUrl + "tv/" + id + "/recommendations?" + ApiKey, {
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

export const fetchSerieVideos = createAsyncThunk(
  "Series/fetchSerieVideos",
  async ({ id }) => {
    return fetch(BaseUrl + "tv/" + id + "/videos?" + ApiKey, {
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

export const fetchSerieImages = createAsyncThunk(
  "Series/fetchSerieImages",
  async ({ id }) => {
    return fetch(BaseUrl + "tv/" + id + "/images?" + ApiKey, {
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

export const fetchSerieCrews = createAsyncThunk(
  "Series/fetchSerieCrews",
  async ({ id }) => {
    return fetch(BaseUrl + "tv/" + id + "/credits?" + ApiKey, {
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

export const fetchSimilarSeries = createAsyncThunk(
  "Series/fetchSimilarSeries",
  async ({ id }) => {
    return fetch(BaseUrl + "tv/" + id + "/similar?" + ApiKey, {
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

export const fetchSerieSeason = createAsyncThunk(
  "Series/fetchSerieSeason",
  async ({ id, season }) => {
    return fetch(BaseUrl + "tv/" + id + "/season/" + season + "?" + ApiKey, {
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

export const fetchSerieReviews = createAsyncThunk(
  "Series/fetchSerieReviews",
  async ({ id, page }) => {
    return fetch(
      BaseUrl + "tv/" + id + "/reviews?" + ApiKey + "&page=" + page,
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

export const fetchSerieEpisode = createAsyncThunk(
  "Series/fetchSerieEpisode",
  async ({ id, season, episode }) => {
    return fetch(
      BaseUrl +
        "tv/" +
        id +
        "/season/" +
        season +
        "/episode/" +
        episode +
        "?" +
        ApiKey,
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

export const fetchEpisodeVideos = createAsyncThunk(
  "Series/fetchEpisodeVideos",
  async ({ id, season, episode }) => {
    return fetch(
      BaseUrl +
        "tv/" +
        id +
        "/season/" +
        season +
        "/episode/" +
        episode +
        "/videos?" +
        ApiKey,
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

export const fetchEpisodeImages = createAsyncThunk(
  "Series/fetchEpisodeImages",
  async ({ id, season, episode }) => {
    return fetch(
      BaseUrl +
        "tv/" +
        id +
        "/season/" +
        season +
        "/episode/" +
        episode +
        "/images?" +
        ApiKey,
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
        return data.stills;
      });
  }
);

export const fetchSeriesWithGenre = createAsyncThunk(
  "Series/fetchSeriesWithGenre",
  async ({ id, page }) => {
    return fetch(
      BaseUrl +
        "discover/tv?" +
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
  async ({ accountId, serieId, remove }) => {
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
          media_type: "tv",
          media_id: serieId,
          watchlist: remove ? false : true,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          window.location.reload();
          console.log(res);

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
  async ({ accountId, serieId, remove }) => {
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
          media_type: "tv",
          media_id: serieId,
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

export const fetchWatchListSeries = createAsyncThunk(
  "Series/fetchWatchListSeries",
  async ({ accountId, page }) => {
    return fetch(
      BaseUrl +
        "account/" +
        accountId +
        "/watchlist/tv?" +
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

export const fetchFavoriteSeries = createAsyncThunk(
  "Series/fetchFavoriteSeries",
  async ({ accountId, page }) => {
    return fetch(
      BaseUrl +
        "account/" +
        accountId +
        "/favorite/tv?" +
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

export const fetchRatedSeries = createAsyncThunk(
  "Series/fetchRatedSeries",
  async ({ accountId, page }) => {
    return fetch(
      BaseUrl +
        "account/" +
        accountId +
        "/rated/tv?" +
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
  "Series/fetchIsInFavorites",
  async ({ accountId, movieId, totalPages }) => {
    let page = 1;
    let isThere = false;

    while (totalPages >= page) {
      const response = await fetch(
        BaseUrl +
          "account/" +
          accountId +
          "/favorite/tv?" +
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
  "Series/fetchIsInWatchList",
  async ({ accountId, serieId, totalPages }) => {
    let page = 1;
    let isThere = false;

    while (totalPages >= page) {
      const response = await fetch(
        BaseUrl +
          "account/" +
          accountId +
          "/watchlist/tv?" +
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
        console.log(data);

        if (data.results.some((serie) => serie.id === serieId)) {
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
  "Series/fetchIsInRated",
  async ({ accountId, movieId, totalPages }) => {
    let page = 1;
    let rate = undefined;

    while (totalPages >= page) {
      const response = await fetch(
        BaseUrl +
          "account/" +
          accountId +
          "/rated/tv?" +
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

export const RateSerie = createAsyncThunk(
  "Series/RateSerie",
  async ({ movieId, rating }) => {
    return fetch(
      BaseUrl +
        "tv/" +
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

export const FetchCastSerieCredits = createAsyncThunk(
  "Series/FetchCastSerieCredits",
  async ({ castId }) => {
    return fetch(BaseUrl + "person/" + castId + "/tv_credits?" + ApiKey)
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
  name: "Series",
  initialState: {
    loading: true,
    loadingMore: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLandingSeries.fulfilled, (state, action) => {
        return { ...state, LandingSeries: action.payload };
      })
      .addCase(fetchTopYearSeries.fulfilled, (state, action) => {
        return { ...state, loadingMore: false, TopYearSeries: action.payload };
      })
      .addCase(fetchTopYearSeries.pending, (state, action) => {
        return { ...state, loadingMore: true };
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

      .addCase(fetchTopRatedSeries.fulfilled, (state, action) => {
        return { ...state, loadingMore: false, TopRatedSeries: action.payload };
      })
      .addCase(fetchTopRatedSeries.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })

      .addCase(fetchPopularSerie.fulfilled, (state, action) => {
        return { ...state, PopularSerie: action.payload };
      })

      .addCase(fetchPopularSeries.fulfilled, (state, action) => {
        return { ...state, loadingMore: false, PopularSeries: action.payload };
      })
      .addCase(fetchPopularSeries.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })

      .addCase(fetchAirTodaySeries.fulfilled, (state, action) => {
        return { ...state, loadingMore: false, AirTodaySeries: action.payload };
      })
      .addCase(fetchAirTodaySeries.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })

      .addCase(fetchOnAirSeries.fulfilled, (state, action) => {
        return { ...state, loadingMore: false, OnAirSeries: action.payload };
      })
      .addCase(fetchOnAirSeries.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })

      .addCase(fetchSerieDetails.fulfilled, (state, action) => {
        return { ...state, SerieDetails: action.payload, loading: false };
      })
      .addCase(fetchSerieDetails.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(fetchSerieVideos.fulfilled, (state, action) => {
        return { ...state, SerieVideos: action.payload };
      })
      .addCase(fetchSerieCrews.fulfilled, (state, action) => {
        return { ...state, SerieCrews: action.payload };
      })
      .addCase(fetchRecommandSeries.fulfilled, (state, action) => {
        return { ...state, RecommandSeries: action.payload };
      })
      .addCase(fetchSerieImages.fulfilled, (state, action) => {
        return { ...state, SerieImages: action.payload };
      })
      .addCase(fetchSimilarSeries.fulfilled, (state, action) => {
        return { ...state, SimilarSeries: action.payload };
      })
      .addCase(fetchSerieReviews.fulfilled, (state, action) => {
        return { ...state, SerieReviews: action.payload };
      })
      .addCase(fetchSerieSeason.fulfilled, (state, action) => {
        return { ...state, loading: false, SerieSeason: action.payload };
      })
      .addCase(fetchSerieSeason.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(fetchSerieEpisode.fulfilled, (state, action) => {
        return { ...state, SerieEpisode: action.payload };
      })
      .addCase(fetchEpisodeVideos.fulfilled, (state, action) => {
        return { ...state, EpisodeVideos: action.payload };
      })
      .addCase(fetchEpisodeImages.fulfilled, (state, action) => {
        return { ...state, EpisodeImages: action.payload };
      })
      .addCase(fetchSeriesWithGenre.fulfilled, (state, action) => {
        return {
          ...state,
          loadingMore: false,
          SeriessWithGenre: action.payload,
        };
      })
      .addCase(fetchSeriesWithGenre.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })
      .addCase(fetchWatchListSeries.fulfilled, (state, action) => {
        return {
          ...state,
          WatchListSeries: action.payload,
          loadingMore: false,
        };
      })
      .addCase(fetchWatchListSeries.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })
      .addCase(fetchFavoriteSeries.fulfilled, (state, action) => {
        return { ...state, FavoriteSeries: action.payload, loadingMore: false };
      })
      .addCase(fetchFavoriteSeries.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })
      .addCase(fetchRatedSeries.fulfilled, (state, action) => {
        return { ...state, RatedSeries: action.payload };
      })
      .addCase(fetchRatedSeries.pending, (state, action) => {
        return { ...state, loadingMore: true };
      })
      .addCase(fetchIsInFavorites.fulfilled, (state, action) => {
        return { ...state, IsInFavorites: action.payload };
      })
      .addCase(fetchIsInWatchList.fulfilled, (state, action) => {
        return { ...state, IsInWatchList: action.payload };
      })
      .addCase(FetchCastSerieCredits.fulfilled, (state, action) => {
        return { ...state, CastSeries: action.payload, loading: false };
      })
      .addCase(FetchCastSerieCredits.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(fetchIsInRated.fulfilled, (state, action) => {
        return { ...state, IsInRated: action.payload };
      })
      .addCase(RateSerie.pending, (state, action) => {
        return { ...state, loading: true };
      });
  },
});

export default slice.reducer;
