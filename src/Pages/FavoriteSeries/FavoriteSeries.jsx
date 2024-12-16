import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";
import SeriesList from "../../Components/SeriesList/SeriesList";
import NavBar from "../../Components/NavBar/NavBar";
import { useSelector } from "react-redux";
import Store from "../../Redux/Store";
import { fetchFavoriteSeries } from "../../Redux/Reducers/Series";

export default function FavoriteSeries() {
  const [page, setPage] = useState(1);
  const [seriesList, setSeriesList] = useState([]);

  const SerieGenres = useSelector((state) => state.Series.SerieGenres);

  const AccountDetail = useSelector((state) => state.Auth.AccountDetail);

  useEffect(() => {
    if (SerieGenres && page > 1 && FavoriteSeries.total_pages >= page) {
      Store.dispatch(
        fetchFavoriteSeries({ accountId: AccountDetail.id, page })
      );
    }
  }, [SerieGenres, page]);

  const FavoriteSeries = useSelector((state) => state.Series.FavoriteSeries);

  const loadingMore = useSelector((state) => state.Series.loadingMore);

  useEffect(() => {
    if (FavoriteSeries) {
      setSeriesList([...seriesList, ...FavoriteSeries.results]);
    }
  }, [FavoriteSeries]);

  return (
    <>
      <NavBar />
      {SerieGenres && (
        <>
          <div className="container mx-auto px-4 flex flex-col items-center pb-20">
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
                Favorite Series
              </a>
            </div>

            {/* Header */}
            <div className="w-full flex flex-col items-center mt-6">
              <h1 className="font-montserrat text-base xs:text-lg sm:text-2xl text-gray-400">
                Your
                <span className="font-bold text-cyan"> Watchlist </span>
                Series
              </h1>
              <h4 className="text-gray-500 font-montserrat text-xs sm:text-sm">
                Total Results : {FavoriteSeries && FavoriteSeries.total_results}
              </h4>
            </div>

            {/* Movies */}
            {FavoriteSeries ? (
              seriesList.length > 0 ? (
                <>
                  <SeriesList
                    seriesList={seriesList}
                    SerieGenres={SerieGenres}
                  />

                  {FavoriteSeries.total_pages > page && (
                    <button
                      className="text-sm font-montserrat text-white px-4 py-2 bg-cyan rounded-md my-8"
                      onClick={() => setPage(page + 1)}
                      disabled={loadingMore}
                    >
                      {loadingMore ? "... Loading" : "More Movies"}
                    </button>
                  )}
                </>
              ) : (
                <div className="not_found w-full flex pt-16 font-montserrat flex-col">
                  <h1 className="text-white sm:text-4xl text-2xl font-semibold px-10 w-full text-center sm:text-left">
                    No Series found !! 😥
                  </h1>
                  <h1 className="text-white sm:text-2xl font-semibold px-10 w-full text-center sm:text-left">
                    unfortunately There is no Series in your watchlist
                  </h1>
                  <p className="text-slate-300 mt-6 sm:text-lg text-sm font-semibold px-10 w-full text-center sm:text-left">
                    But do not worry you can add any serie you like to your
                    watchlist 😊
                  </p>
                </div>
              )
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
