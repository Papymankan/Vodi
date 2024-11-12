import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Store from "../../Redux/Store";
import { fetchTopYearSeries } from "../../Redux/Reducers/Series";
import { useSelector } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Loader from "../../Components/Loader/Loader";

export default function TopYearSeries() {
  const [page, setPage] = useState(1);
  const [year, setYear] = useState(2024);
  const [years, setYears] = useState({});
  const [seriesList, setSeriesList] = useState([]);

  useEffect(() => {
    if (year && page) {
      Store.dispatch(fetchTopYearSeries({ year, page }));
    }
  }, [year, page]);

  useEffect(() => {
    let arr = [];
    for (let i = 1970; i < 2025; i++) {
      arr.push(i);
    }
    arr.reverse();
    setYears([...arr]);
  }, []);

  const TopYearSeriesList = useSelector((state) => state.Series.TopYearSeries);
  const SerieGenres = useSelector((state) => state.Series.SerieGenres);
  const loadingMore = useSelector((state) => state.Series.loadingMore);

  useEffect(() => {
    if (TopYearSeriesList) {
      setSeriesList([...seriesList, ...TopYearSeriesList.results]);
    }
  }, [TopYearSeriesList]);

  const handleChange = (event) => {
    setYear(event.target.value);
    setPage(1);
    setSeriesList([]);
  };

  return (
    <>
      <NavBar />
      {SerieGenres && TopYearSeriesList && (
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
                {year} Top Series
              </a>
            </div>

            {/* Header */}
            <div className="w-full flex flex-col items-center mt-6">
              <h1 className="font-montserrat text-base xs:text-lg sm:text-2xl text-gray-400">
                <span className="text-cyan">{year}</span>'s Top Series
              </h1>
              <h4 className="text-gray-500 font-montserrat text-xs sm:text-sm">
                Total Results : {TopYearSeriesList.total_results}
              </h4>

              <FormControl variant="filled" className="year_input">
                <InputLabel id="demo-simple-select-filled-label">
                  Year
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={year}
                  onChange={handleChange}
                >
                  {years.map((year) => (
                    <MenuItem value={year}>{year}</MenuItem>
                  ))}

                </Select>
              </FormControl>
            </div>

            {/* Series */}
            {seriesList.length > 0 ? (
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
            ) : (
              <div className="w-full h-lvh">
                <Loader />
              </div>
            )}

            <button
              className=" text-sm font-montserrat text-white px-4 py-2 bg-cyan rounded-md my-8"
              onClick={() => setPage(page + 1)}
              disabled={loadingMore}
            >
              {loadingMore ? "... Loading" : "More Series"}
            </button>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
