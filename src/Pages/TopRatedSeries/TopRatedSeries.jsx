import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import Footer from "../../Components/Footer/Footer";
import SeriesList from "../../Components/SeriesList/SeriesList";
import { useSelector } from "react-redux";
import Store from "../../Redux/Store";
import { fetchTopRatedSeries } from "../../Redux/Reducers/Series";
import NavBar from "../../Components/NavBar/NavBar";

export default function TopRatedSeries() {
  const [page, setPage] = useState(1);
  const [seriesList, setSeriesList] = useState([]);

  const SerieGenres = useSelector((state) => state.Series.SerieGenres);

  useEffect(() => {
    if (SerieGenres && page) {
      Store.dispatch(fetchTopRatedSeries({ page }));
    }
  }, [SerieGenres, page]);

  const TopRatedSeries = useSelector((state) => state.Series.TopRatedSeries);

  
  
  const loadingMore = useSelector((state) => state.Series.loadingMore);
  
  useEffect(() => {
    if (TopRatedSeries) {
      console.log(TopRatedSeries);
      setSeriesList([...seriesList, ...TopRatedSeries.results]);
    }
  }, [TopRatedSeries]);

  return (
    <>
      <NavBar />
      {SerieGenres && (
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
                Series
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
                Top rated series
              </a>
            </div>

            {/* Header */}
            <div className="w-full flex flex-col items-center mt-6">
              <h1 className="font-montserrat text-base xs:text-lg sm:text-2xl text-gray-400">
                Top Rated series
              </h1>
            </div>

            {/* Series */}
            {seriesList &&
            seriesList &&
            seriesList.length > 0 ? (
              <>
                <SeriesList seriesList={seriesList} SerieGenres={SerieGenres} />

                <button
                  className=" text-sm font-montserrat text-white px-4 py-2 bg-cyan rounded-md my-8"
                  onClick={() => setPage(page + 1)}
                  disabled={loadingMore}
                >
                  {loadingMore ? "... Loading" : "More Movies"}
                </button>
              </>
            ) : (
              <div className="h-svh">
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
