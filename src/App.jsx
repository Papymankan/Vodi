import React, { useEffect } from "react";
import routes from "./routes.jsx";
import { useRoutes } from "react-router-dom";
import Store from "./Redux/Store.js";
import {
  fetchFavoriteMovies,
  fetchMovieGenres,
  fetchPopularMovie,
  fetchRatedMovies,
  fetchTheaterMovies,
  fetchTopRatedMovie,
  fetchUpcomingMovies,
  fetchWatchListMovies,
} from "./Redux/Reducers/Movies.js";
import {
  fetchAirTodaySeries,
  fetchFavoriteSeries,
  fetchOnAirSeries,
  fetchPopularSerie,
  fetchSerieGenres,
  fetchTopRatedSerie,
  fetchWatchListSeries,
} from "./Redux/Reducers/Series.js";
import { useSelector } from "react-redux";

export default function App() {
  const router = useRoutes(routes);

  useEffect(() => {
    Store.dispatch(fetchMovieGenres());
    Store.dispatch(fetchTopRatedMovie());
    Store.dispatch(fetchPopularMovie());
    Store.dispatch(fetchTheaterMovies({ page: 1 }));
    Store.dispatch(fetchUpcomingMovies({ page: 1 }));
    Store.dispatch(fetchUpcomingMovies({ page: 1 }));

    Store.dispatch(fetchSerieGenres());
    Store.dispatch(fetchTopRatedSerie());
    Store.dispatch(fetchPopularSerie());
    Store.dispatch(fetchAirTodaySeries({ page: 1 }));
    Store.dispatch(fetchOnAirSeries({ page: 2 }));
  }, []);

  const authenticated = useSelector((state) => state.Auth.authenticated);

  const AccountDetail = useSelector((state) => state.Auth.AccountDetail);

  useEffect(() => {
    if (authenticated) {
      Store.dispatch(fetchWatchListMovies({ accountId: AccountDetail.id, page:1}));
      Store.dispatch(fetchWatchListSeries({ accountId: AccountDetail.id, page:1}));
      Store.dispatch(fetchFavoriteMovies({ accountId: AccountDetail.id, page:1}));
      Store.dispatch(fetchFavoriteSeries({ accountId: AccountDetail.id, page:1}));
      Store.dispatch(fetchRatedMovies({ accountId: AccountDetail.id, page:1}));
    }
  }, [authenticated, AccountDetail]);

  return <>{router}</>;
}
