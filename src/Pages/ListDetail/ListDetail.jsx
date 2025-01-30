import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";
import MoviesList from "../../Components/MoviesList/MoviesList";
import NavBar from "../../Components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Store from "../../Redux/Store";
import { FetchListDetail } from "../../Redux/Reducers/Movies";
import FullScreenLoader from "../../Components/FullScreenLoader/FullScreenLoader";

export default function ListDetail() {
  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const MovieGenres = useSelector((state) => state.Movies.MovieGenres);
  const listDetail = useSelector((state) => state.Movies.listDetail);
  const params = useParams();
  const loadingMore = useSelector((state) => state.Movies.loadingMore);

  useEffect(() => {
    if (page) {
      console.log("page =>", page);
      Store.dispatch(FetchListDetail({ listId: params.id, page }));
    }
  }, [page]);

  useEffect(() => {
    if (listDetail) {
      console.log("setList ", moviesList, listDetail.items);
      setMoviesList([...moviesList, ...listDetail.items]);
    }
  }, [listDetail]);

  const fullScreenLoading = useSelector(
    (state) => state.Movies.fullScreenLoading
  );

  return (
    <>
      <NavBar />
      {listDetail && MovieGenres ? (
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
                Movie List
              </a>
            </div>

            {/* Header */}
            <div className="w-full flex flex-col items-center mt-6">
              <h1 className="font-montserrat text-base xs:text-lg sm:text-2xl text-gray-400">
                <span className="text-cyan font-bold">{listDetail.name} </span>
                Movie List
              </h1>
              <h4 className="text-gray-500 font-montserrat text-xs sm:text-sm">
                Total Results : {listDetail.total_results}
              </h4>
            </div>

            {/* Movies */}
            {moviesList && moviesList.length > 0 ? (
              <>
                <MoviesList
                  moviesList={moviesList}
                  MovieGenres={MovieGenres}
                  RemoveAble
                />

                {listDetail.total_pages > page && (
                  <button
                    className=" text-sm font-montserrat text-white px-4 py-2 bg-cyan rounded-md my-8"
                    onClick={() => setPage(page + 1)}
                    disabled={loadingMore}
                  >
                    {loadingMore ? "... Loading" : "More Movies"}
                  </button>
                )}
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

      {fullScreenLoading && <FullScreenLoader />}
      
      <Footer />
    </>
  );
}
