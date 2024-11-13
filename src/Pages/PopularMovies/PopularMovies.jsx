import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchPopularMovies } from "../../Redux/Reducers/Movies";
import MoviesList from "../../Components/MoviesList/MoviesList";
import Loader from "../../Components/Loader/Loader";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Store from "../../Redux/Store";

export default function PopularMovies() {
  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);

  const MovieGenres = useSelector((state) => state.Movies.MovieGenres);

  useEffect(() => {
    if (MovieGenres && page) {
      Store.dispatch(fetchPopularMovies({ page }));
    }
  }, [MovieGenres, page]);

  const PopularMovies = useSelector((state) => state.Movies.PopularMovies);
  const loadingMore = useSelector((state) => state.Movies.loadingMore);

  useEffect(() => {
    if (PopularMovies) {
      setMoviesList([...moviesList, ...PopularMovies.results]);
    }
  }, [PopularMovies]);

  return (
    <>
      <NavBar />
      {MovieGenres && (
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
                Popular Movies
              </a>
            </div>

            {/* Header */}
            <div className="w-full flex flex-col items-center mt-6">
              <h1 className="font-montserrat text-base xs:text-lg sm:text-2xl text-gray-400">
                Most popular Movies
              </h1>
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

          <Footer />
        </>
      )}
    </>
  );
}
