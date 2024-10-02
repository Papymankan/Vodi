import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseUrl, ApiKey } from "../FetchConfigs";

// export const fetchMovies = createAsyncThunk(
//   "Movies/fetchMovies",
//   async ({ url, filters }) => {
//     let filtersStr = filters.reduce((prev, next) => {
//       return prev + "&" + next;
//     });

//     return fetch(BaseUrl + url + "?" + ApiKey + "&" + filtersStr, {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//       },
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//       })
//       .then((data) => {
//         return data.results;
//       });
//   }
// );


export const fetchTopYearSeries = createAsyncThunk(
  "Movies/fetchTopYearSeries",
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

// export const fetchTrendingMovies = createAsyncThunk(
//   "Movies/fetchTrendingMovies",
//   async () => {
//     return fetch(BaseUrl + "trending/movie/day" + "?" + ApiKey, {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//       },
//     })
//       .then((res) => {
//         console.log(res);
        
//         if (res.ok) {
//           return res.json();
//         }
//       })
//       .then((data) => {
//         console.log(data);

//         return data.results;
//       });
//   }
// );

// export const fetchTopRatedMovie = createAsyncThunk(
//     "Movies/fetchTopRatedMovie",
//     async () => {
//       return fetch(BaseUrl + "movie/top_rated" + "?" + ApiKey, {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//         },
//       })
//         .then((res) => {
//           console.log(res);
          
//           if (res.ok) {
//             return res.json();
//           }
//         })
//         .then((data) => {
//           console.log(data);
  
//           return data.results[0];
//         });
//     }
//   );

// export const fetchMovieGenres = createAsyncThunk(
//   "Movies/fetchMovieGenres",
//   async () => {
//     return fetch(BaseUrl + "genre/movie/list" + "?" + ApiKey, {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//       },
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//       })
//       .then((data) => {
//         return data.genres;
//       });
//   }
// );

const slice = createSlice({
  name: "Series",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
    //   .addCase(fetchMovies.fulfilled, (state, action) => {
    //     console.log(state, action);
    //   })
      .addCase(fetchTopYearSeries.fulfilled, (state, action) => {
        return { ...state, TopYearSeries: action.payload };
      })
    //   .addCase(fetchMovieGenres.fulfilled, (state, action) => {
    //     return { ...state, MovieGenres: action.payload };
    //   })
    //   .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
    //     return { ...state, TrendingMovies: action.payload };
    //   })
    //   .addCase(fetchTopRatedMovie.fulfilled, (state, action) => {
    //     return { ...state, TopRatedMovie: action.payload };
    //   });
  },
});

export default slice.reducer;
