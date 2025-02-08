import React, { useEffect } from "react";
import routes from "./routes.jsx";
import { useRoutes } from "react-router-dom";
import Store from "./Redux/Store.js";
import {
  fetchFavoriteMovies,
  fetchLists,
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
  fetchRatedSeries,
  fetchSerieGenres,
  fetchTopRatedSerie,
  fetchWatchListSeries,
} from "./Redux/Reducers/Series.js";
import { useSelector } from "react-redux";
import { fetchAccountDetail, fetchSessionId } from "./Redux/Reducers/Auth.js";

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
      Store.dispatch(
        fetchWatchListMovies({ accountId: AccountDetail.id, page: 1 })
      );
      Store.dispatch(
        fetchWatchListSeries({ accountId: AccountDetail.id, page: 1 })
      );

      Store.dispatch(
        fetchFavoriteMovies({ accountId: AccountDetail.id, page: 1 })
      );
      Store.dispatch(
        fetchFavoriteSeries({ accountId: AccountDetail.id, page: 1 })
      );

      Store.dispatch(
        fetchRatedMovies({ accountId: AccountDetail.id, page: 1 })
      );
      Store.dispatch(
        fetchRatedSeries({ accountId: AccountDetail.id, page: 1 })
      );
      Store.dispatch(fetchLists({ accountId: AccountDetail.id }));
    }
  }, [authenticated, AccountDetail]);

    const RequestToken = useSelector((state) => state.Auth.RequestToken);
  
    useEffect(() => {
      if (RequestToken) {
        window.location.href = `https://www.themoviedb.org/authenticate/${RequestToken}?redirect_to=http://localhost:5173`;
      }
    }, [RequestToken]);
  
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const approved = urlParams.get("approved");
      const token = urlParams.get("request_token");
  
      if (approved === "true" && token) {
        Store.dispatch(fetchSessionId({ requestToken: token }));
      }
    }, []);
  
    useEffect(() => {
      let sessionId = localStorage.getItem("sessionId");
  
      if (sessionId) {
        Store.dispatch(fetchAccountDetail({ SessionId: sessionId }));
      }
    }, []);

  return <>{router}</>;
}
