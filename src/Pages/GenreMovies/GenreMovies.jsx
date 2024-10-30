import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Store from "../../Redux/Store";
import { fetchMoviesWithGenre } from "../../Redux/Reducers/Movies";

export default function GenreMovies() {
  const MovieGenres = useSelector((state) => state.Movies.MovieGenres);

  const params = useParams();

  useEffect(() => {
    if (params && MovieGenres) {
      let genre = MovieGenres.find((genre) => genre.id == params.genreId);

      Store.dispatch(fetchMoviesWithGenre({ id: params.genreId }));
    }
  }, [params, MovieGenres]);

  const MoviesWithGenre = useSelector((state) => state.Movies.MoviesWithGenre);

  console.log(MoviesWithGenre);
  

  return (
    <>
      <NavBar />
    </>
  );
}
