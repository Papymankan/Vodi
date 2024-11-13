import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import NavBar from "../../Components/NavBar/NavBar";
import Loader from "../../Components/Loader/Loader";
import { fetchTrendingMovies } from "../../Redux/Reducers/Movies";
import { useParams } from "react-router-dom";
import Store from "../../Redux/Store";
import MoviesList from "../../Components/MoviesList/MoviesList";

export default function TrendingMovies() {
  const params = useParams();

  useEffect(() => {
    if (params.time) {
      Store.dispatch(fetchTrendingMovies({ time: params.time }));
    }
  }, [params]);

  const TrendingMovies = useSelector((state) => state.Movies.TrendingMovies);
  const MovieGenres = useSelector((state) => state.Movies.MovieGenres);


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
                Trending Movies
              </a>
            </div>

            {/* Header */}
            <div className="w-full flex flex-col items-center mt-6">
              <h1 className="font-montserrat text-base xs:text-lg sm:text-2xl text-gray-400">
                <span className="text-cyan">
                  {params.time == "day" ? "Today" : "Week"}
                </span>
                's Trending Movies
              </h1>
            </div>

            {/* Movies */}
            {TrendingMovies ? (
              <MoviesList moviesList={TrendingMovies} MovieGenres={MovieGenres} />
            ) : (
              <div className="w-full h-lvh">
                <Loader />
              </div>
            )}
          </div>

          <Footer />
        </>
      )}
    </>
  );
}
