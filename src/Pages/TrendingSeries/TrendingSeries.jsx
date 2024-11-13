import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import SeriesList from "../../Components/SeriesList/SeriesList";
import Loader from "../../Components/Loader/Loader";
import NavBar from "../../Components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchTrendingSeries } from "../../Redux/Reducers/Series";
import Store from "../../Redux/Store";

export default function TrendingSeries() {
  const params = useParams();

  useEffect(() => {
    if (params.time) {
      Store.dispatch(fetchTrendingSeries({ time: params.time }));
    }
  }, [params]);

  const TrendingSeries = useSelector((state) => state.Series.TrendingSeries);
  const SerieGenres = useSelector((state) => state.Series.SerieGenres);

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
                Trending Series
              </a>
            </div>

            {/* Header */}
            <div className="w-full flex flex-col items-center mt-6">
              <h1 className="font-montserrat text-base xs:text-lg sm:text-2xl text-gray-400">
                <span className="text-cyan">
                  {params.time == "day" ? "Today" : "Week"}
                </span>
                's Trending Series
              </h1>
            </div>

            {/* Series */}
            {TrendingSeries ? (
              <SeriesList
                SerieGenres={SerieGenres}
                seriesList={TrendingSeries}
              />
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
