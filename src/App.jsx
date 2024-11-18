import React, { useEffect } from "react";
import routes from "./routes.jsx";
import { useRoutes } from "react-router-dom";
import Store from "./Redux/Store.js";
import {
  fetchMovieGenres,
  fetchPopularMovie,
  fetchTheaterMovies,
  fetchTopRatedMovie,
  fetchUpcomingMovies,
} from "./Redux/Reducers/Movies.js";
import {
  fetchAirTodaySeries,
  fetchOnAirSeries,
  fetchPopularSerie,
  fetchSerieGenres,
  fetchTopRatedSerie,
} from "./Redux/Reducers/Series.js";

export default function App() {
  const router = useRoutes(routes);

  useEffect(() => {
    Store.dispatch(fetchMovieGenres());
    Store.dispatch(fetchTopRatedMovie());
    Store.dispatch(fetchPopularMovie());
    Store.dispatch(fetchTheaterMovies({page:1}));
    Store.dispatch(fetchUpcomingMovies());

    Store.dispatch(fetchSerieGenres());
    Store.dispatch(fetchTopRatedSerie());
    Store.dispatch(fetchPopularSerie());
    Store.dispatch(fetchAirTodaySeries());
    Store.dispatch(fetchOnAirSeries());
  }, []);

  return <>{router}</>;
}
