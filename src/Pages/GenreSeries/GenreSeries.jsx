import React, { useEffect, useState } from "react";
import { fetchSeriesWithGenre } from "../../Redux/Reducers/Series";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../../Components/NavBar/NavBar";
import Store from "../../Redux/Store";
import Footer from "../../Components/Footer/Footer";
import SeriesList from "../../Components/SeriesList/SeriesList";
import Loader from "../../Components/Loader/Loader";

export default function GenreSeries() {
  const [page, setPage] = useState(1);
  const [seriesList, setSeriesList] = useState([]);

  const SerieGenres = useSelector((state) => state.Series.SerieGenres);
  const params = useParams();

  useEffect(() => {
    if (params && SerieGenres && page) {
      Store.dispatch(fetchSeriesWithGenre({ id: params.genreId, page }));
    }
  }, [params, SerieGenres, page]);

  const SeriessWithGenre = useSelector(
    (state) => state.Series.SeriessWithGenre
  );
  const loadingMore = useSelector((state) => state.Series.loadingMore);

  useEffect(() => {
    if (SeriessWithGenre) {
      console.log(seriesList, SeriessWithGenre.results);

      setSeriesList([...seriesList, ...SeriessWithGenre.results]);
    }
  }, [SeriessWithGenre]);

  return (
    <>
      <NavBar />
      {(SeriessWithGenre && SerieGenres) ? (
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
                {" "}
                {
                  SerieGenres.find((genre) => genre.id == params.genreId).name
                }{" "}
              </a>
            </div>

            {/* Header */}
            <div className="w-full flex flex-col items-center mt-6">
              <h1 className="font-montserrat text-base xs:text-lg sm:text-2xl text-gray-400">
                Series With
                <span className="font-bold text-cyan">
                  {" "}
                  {
                    SerieGenres.find((genre) => genre.id == params.genreId).name
                  }{" "}
                </span>
                Genre
              </h1>
              <h4 className="text-gray-500 font-montserrat text-xs sm:text-sm">
                Total Results : 24039
              </h4>
            </div>

            {seriesList && seriesList.length > 0 ? (
              <>
                {/* Series */}
                <SeriesList seriesList={seriesList} SerieGenres={SerieGenres} />

                <button
                  className=" text-sm font-montserrat text-white px-4 py-2 bg-cyan rounded-md my-8"
                  onClick={() => setPage(page + 1)}
                  disabled={loadingMore}
                >
                  {loadingMore ? "... Loading" : "More Series"}
                </button>
              </>
            ) : (
              <Loader />
            )}
          </div>

          <Footer />
        </>
      ) : (
        <div className="w-full h-lvh">
          <Loader />
        </div>
      )
    }
    </>
  );
}
