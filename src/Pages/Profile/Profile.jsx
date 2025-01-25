import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import MoviesSwiper from "../../Components/MoviesSwiper/MoviesSwiper";
import SeriesSwiper from "../../Components/SeriesSwiper/SeriesSwiper";

export default function Login() {
  const AccountDetail = useSelector((state) => state.Auth.AccountDetail);

  const WatchListMovies = useSelector((state) => state.Movies.WatchListMovies);
  const WatchListSeries = useSelector((state) => state.Series.WatchListSeries);

  const FavoriteMovies = useSelector((state) => state.Movies.FavoriteMovies);
  const FavoriteSeries = useSelector((state) => state.Series.FavoriteSeries);

  const RatedMovies = useSelector((state) => state.Movies.RatedMovies);
  const RatedSeries = useSelector((state) => state.Series.RatedSeries);
  return (
    <>
      <NavBar />
      {AccountDetail && (
        <>
          <div className="Profile_Drop w-full font-montserrat">
            <div className="container mx-auto flex items-center flex-col sm:flex-row px-4">
              <div className="h-full px-12 py-10 flex items-center flex-col">
                <Avatar sx={{ width: 128, height: 128, fontSize: 60 }}>
                  {AccountDetail.username[0].toUpperCase()}
                </Avatar>

                <p className="mt-2 text-xl text-cyan">
                  {AccountDetail.username}
                </p>

                {AccountDetail.name && (
                  <p className="mt-1 text-xl text-white">
                    {AccountDetail.name}
                  </p>
                )}
              </div>

              <div className="flex-1 flex h-full xl:space-x-20 lg:space-x-14 lg:flex-nowrap flex-wrap">
                <div className="lg:w-1/3 w-full text-white flex lg:flex-col xs:flex-row flex-col lg:space-x-0 xs:space-x-10">
                  <div className="lg:w-full xs:w-1/2 w-full flex items-center justify-between my-4">
                    <div className=" flex items-center space-x-2">
                      <h2 className="xl:text-lg sm:text-sm text-xs font-bold">
                        Watchlist <br className="xs:block lg:hidden hidden" />{" "}
                        Movies :
                      </h2>
                      <h2 className="xl:text-lg lg:text-base sm:text-sm text-xs text-center rounded-full lg:py-2 lg:px-4 px-3 py-1.5 bg-[#bdbdbd] inline-block self-center">
                        {WatchListMovies
                          ? WatchListMovies.total_results
                          : "loading..."}
                      </h2>
                    </div>
                    <a
                      href="/watchlist/movie"
                      className="text-xs text-cyan flex items-center duration-200 hover:scale-105"
                    >
                      See All
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        className="scale-50 -rotate-90"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1 1l8 8 8-8"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="lg:w-full xs:w-1/2 w-full flex items-center justify-between my-4">
                    <div className=" flex items-center space-x-2">
                      <h2 className="xl:text-lg sm:text-sm text-xs font-bold">
                        Watchlist <br className="xs:block lg:hidden hidden" />{" "}
                        Series :
                      </h2>
                      <h2 className="xl:text-lg lg:text-base sm:text-sm text-xs text-center rounded-full lg:py-2 lg:px-4 px-3 py-1.5 bg-[#bdbdbd] inline-block self-center">
                        {WatchListSeries
                          ? WatchListSeries.total_results
                          : "loading..."}
                      </h2>
                    </div>
                    <a
                      href="/watchlist/serie"
                      className="text-xs text-cyan flex items-center duration-200 hover:scale-105"
                    >
                      See All
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        className="scale-50 -rotate-90"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1 1l8 8 8-8"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="lg:w-1/3 w-full text-white flex lg:flex-col xs:flex-row flex-col lg:space-x-0 xs:space-x-10">
                  <div className="lg:w-full xs:w-1/2 w-full flex items-center justify-between my-4">
                    <div className=" flex items-center space-x-2">
                      <h2 className="xl:text-lg sm:text-sm text-xs font-bold">
                        Favorite <br className="xs:block lg:hidden hidden" />{" "}
                        Movies :
                      </h2>
                      <h2 className="xl:text-lg lg:text-base sm:text-sm text-xs text-center rounded-full lg:py-2 lg:px-4 px-3 py-1.5 bg-[#bdbdbd] inline-block self-center">
                        {FavoriteMovies
                          ? FavoriteMovies.total_results
                          : "loading..."}
                      </h2>
                    </div>
                    <a
                      href="/favorite/movie"
                      className="text-xs text-cyan flex items-center duration-200 hover:scale-105"
                    >
                      See All
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        className="scale-50 -rotate-90"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1 1l8 8 8-8"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="lg:w-full xs:w-1/2 w-full flex items-center justify-between my-4">
                    <div className=" flex items-center space-x-2">
                      <h2 className="xl:text-lg sm:text-sm text-xs font-bold">
                        Favorite <br className="xs:block lg:hidden hidden" />{" "}
                        Series :
                      </h2>
                      <h2 className="xl:text-lg lg:text-base sm:text-sm text-xs text-center rounded-full lg:py-2 lg:px-4 px-3 py-1.5 bg-[#bdbdbd] inline-block self-center">
                        {FavoriteSeries
                          ? FavoriteSeries.total_results
                          : "loading..."}
                      </h2>
                    </div>
                    <a
                      href="/favorite/serie"
                      className="text-xs text-cyan flex items-center duration-200 hover:scale-105"
                    >
                      See All
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        className="scale-50 -rotate-90"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1 1l8 8 8-8"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="xs:flex hidden lg:w-1/3 w-full text-white lg:flex-col xs:flex-row flex-col lg:space-x-0 xs:space-x-10">
                  <div className="lg:w-full xs:w-1/2 w-full flex items-center justify-between my-4">
                    <div className=" flex items-center space-x-2">
                      <h2 className="xl:text-lg sm:text-sm text-xs font-bold">
                        Rated <br className="xs:block lg:hidden hidden" />{" "}
                        Movies :
                      </h2>
                      <h2 className="xl:text-lg lg:text-base sm:text-sm text-xs text-center rounded-full lg:py-2 lg:px-4 px-3 py-1.5 bg-[#bdbdbd] inline-block self-center">
                        {RatedMovies ? RatedMovies.total_results : "loading..."}
                      </h2>
                    </div>
                    <a
                      href="/rated/movie"
                      className="text-xs text-cyan flex items-center duration-200 hover:scale-105"
                    >
                      See All
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        className="scale-50 -rotate-90"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1 1l8 8 8-8"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="lg:w-full xs:w-1/2 w-full flex items-center justify-between my-4">
                    <div className=" flex items-center space-x-2">
                      <h2 className="xl:text-lg sm:text-sm text-xs font-bold">
                        Rated <br className="xs:block lg:hidden hidden" />{" "}
                        Series :
                      </h2>
                      <h2 className="xl:text-lg lg:text-base sm:text-sm text-xs text-center rounded-full lg:py-2 lg:px-4 px-3 py-1.5 bg-[#bdbdbd] inline-block self-center">
                        {RatedSeries ? RatedSeries.total_results : "loading..."}
                      </h2>
                    </div>
                    <a
                      href="/rated/serie"
                      className="text-xs text-cyan flex items-center duration-200 hover:scale-105"
                    >
                      See All
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        className="scale-50 -rotate-90"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          d="M1 1l8 8 8-8"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="container mx-auto pt-4">
              <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
                <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
                  Your Favorite Movies
                </h2>
                <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
              </div>

              <MoviesSwiper movies={FavoriteMovies} low />

              <div className="border-t-2 border-[#394253] text-end text-white py-3 mt-4 font-montserrat text-sm mx-4">
                <a
                  href="/favorite/movie"
                  className="hover:text-cyan duration-200"
                >
                  VIEW ALL
                </a>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="container mx-auto pt-4">
              <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
                <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
                  Your Favorite Series
                </h2>
                <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
              </div>

              <SeriesSwiper series={FavoriteSeries} low />

              <div className="border-t-2 border-[#394253] text-end text-white py-3 mt-4 font-montserrat text-sm mx-4">
                <a
                  href="/favorite/serie"
                  className="hover:text-cyan duration-200"
                >
                  VIEW ALL
                </a>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
