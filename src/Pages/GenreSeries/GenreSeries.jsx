import React, { useEffect, useState } from "react";
import { fetchSeriesWithGenre } from "../../Redux/Reducers/Series";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../../Components/NavBar/NavBar";
import Store from "../../Redux/Store";
import Footer from "../../Components/Footer/Footer";

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
  
    const SeriessWithGenre = useSelector((state) => state.Series.SeriessWithGenre);
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
      {SeriessWithGenre &&
        seriesList &&
        seriesList.length > 0 &&
        SerieGenres && (
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
                      SerieGenres.find((genre) => genre.id == params.genreId)
                        .name
                    }{" "}
                  </span>
                  Genre
                </h1>
                <h4 className="text-gray-500 font-montserrat text-xs sm:text-sm">
                  Total Results : 24039
                </h4>
              </div>

              {/* Series */}
              <div className="mt-16 w-full grid lg:grid-cols-6 md:grid-cols-5 xs:grid-cols-4 grid-cols-3 lg:gap-4 gap-3">
                {seriesList.length > 0 &&
                  seriesList.map((serie) => {
                    if (serie.poster_path) {
                      return (
                        <div className="w-full">
                          <a
                            href={"/serie/" + serie.id}
                            className="relative w-full h-full"
                          >
                            <img
                              src={
                                "https://image.tmdb.org/t/p/w300" +
                                serie.poster_path
                              }
                              alt=""
                              className="w-full h-full"
                            />
                            <div className="text-slate-300 w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                              <p className="text-xs font-light line-clamp-1 text-start w-full">
                                {SerieGenres &&
                                  serie.genre_ids &&
                                  serie.genre_ids.length > 0 &&
                                  serie.genre_ids.map((id) => {
                                    let genre = SerieGenres.find(
                                      (genre) => genre.id == id
                                    );
                                    return <span>{genre.name}, </span>;
                                  })}
                              </p>
                              <p className="group-hover:text-cyan duration-200 line-clamp-1 w-full text-start">
                                {serie.name}
                              </p>
                            </div>
                          </a>
                        </div>
                      );
                    }
                  })}
              </div>

              <button
                className=" text-sm font-montserrat text-white px-4 py-2 bg-cyan rounded-md my-8"
                onClick={() => setPage(page + 1)}
                disabled={loadingMore}
              >
                {loadingMore ? "... Loading" : "More Movies"}
              </button>
            </div>

            <Footer />
          </>
        )}
    </>
  );
}
