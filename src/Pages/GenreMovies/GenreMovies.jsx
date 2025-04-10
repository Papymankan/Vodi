import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Store from "../../Redux/Store";
import { fetchMoviesWithGenre } from "../../Redux/Reducers/Movies";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";
import MoviesList from "../../Components/MoviesList/MoviesList";

export default function GenreMovies() {
  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);

  const MovieGenres = useSelector((state) => state.Movies.MovieGenres);
  const params = useParams();

  useEffect(() => {
    if (params && MovieGenres && page) {
      Store.dispatch(fetchMoviesWithGenre({ id: params.genreId, page }));
    }
  }, [params, MovieGenres, page]);

  const MoviesWithGenre = useSelector((state) => state.Movies.MoviesWithGenre);
  const loadingMore = useSelector((state) => state.Movies.loadingMore);

  useEffect(() => {
    if (MoviesWithGenre) {
      setMoviesList([...moviesList, ...MoviesWithGenre.results]);
    }
  }, [MoviesWithGenre]);

  return (
    <>
      <NavBar />
      {MoviesWithGenre && MovieGenres ? (
        <>
          <div className="container mx-auto px-4 flex flex-col items-center ">
            {/* BreadCrumb */}
            <div className="w-full text-xs xs:text-base flex items-center text-gray-500 py-4 font-montserrat z-20">
              <a href="#" className="hover:text-cyan z-20 duration-200">
                Home
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                className="scale-50 z-20 mt-1 -rotate-90"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
              <a href="#" className="hover:text-cyan z-20 duration-200">
                Movies
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                className="scale-50 z-20 mt-1 -rotate-90"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
              <a
                href="#"
                className="hover:text-cyan z-20 duration-200 text-white"
              >
                {" "}
                {
                  MovieGenres.find((genre) => genre.id == params.genreId).name
                }{" "}
              </a>
            </div>

            {/* Header */}
            <div className="w-full flex flex-col items-center mt-6">
              <h1 className="font-montserrat text-base xs:text-lg sm:text-2xl text-gray-400">
                Movies With
                <span className="font-bold text-cyan">
                  {" "}
                  {
                    MovieGenres.find((genre) => genre.id == params.genreId).name
                  }{" "}
                </span>
                Genre
              </h1>
              <h4 className="text-gray-500 font-montserrat text-xs sm:text-sm">
                Total Results : {MoviesWithGenre.total_results}
              </h4>
            </div>

            {/* Movies */}
            {moviesList && moviesList.length > 0 ? (
              <>
                <MoviesList moviesList={moviesList} MovieGenres={MovieGenres} />

                <button
                  className=" text-sm font-montserrat text-white px-4 py-2 bg-cyan rounded-md my-8"
                  onClick={() => setPage(page + 1)}
                  disabled={loadingMore}
                >
                  {loadingMore ? "... Loading" : "More Movies"}
                </button>
              </>
            ) : (
              <Loader />
            )}
          </div>
        </>
      ) : (
        <div className="w-full h-lvh">
          <Loader />
        </div>
      )}
      <Footer />
    </>
  );
}
