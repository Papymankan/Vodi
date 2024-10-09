import React, { useEffect } from "react";
import routes from "./routes.jsx";
import { useRoutes } from "react-router-dom";
import Store from "./Redux/Store.js";
import { fetchMovieGenres, fetchPopularMovies, fetchTheaterMovies, fetchTopRatedMovie, fetchUpcomingMovies } from "./Redux/Reducers/Movies.js";
import { fetchAirTodaySeries, fetchOnAirSeries, fetchPopularSeries, fetchSerieGenres, fetchTopRatedSerie } from "./Redux/Reducers/Series.js";

export default function App() {
  const router = useRoutes(routes);

  useEffect(() => {
    Store.dispatch(fetchMovieGenres());
    Store.dispatch(fetchTopRatedMovie());
    Store.dispatch(fetchPopularMovies());
    Store.dispatch(fetchTheaterMovies());
    Store.dispatch(fetchUpcomingMovies());

    Store.dispatch(fetchSerieGenres());
    Store.dispatch(fetchTopRatedSerie());
    Store.dispatch(fetchPopularSeries());
    Store.dispatch(fetchAirTodaySeries());
    Store.dispatch(fetchOnAirSeries());
  }, []);

  return <>{router}</>;
}
