import { Avatar, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ImageBaseUrl } from "../../Redux/FetchConfigs";
import Store from "../../Redux/Store";
import {
  fetchAccountDetail,
  fetchRequestToken,
  fetchSessionId,
  logout,
} from "../../Redux/Reducers/Auth";
import FullScreenLoader from "../FullScreenLoader/FullScreenLoader";

export default function NavBar() {
  const [subMenu, setSubMenu] = useState("");
  const [theaterMoviesList, setTheaterMoviesList] = useState([]);
  const [upcomingMoviesList, setUpcomingMoviesList] = useState([]);
  const [airTodayList, setAirTodayList] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);

  const TopRatedMovie = useSelector((state) => state.Movies.TopRatedMovie);
  const MovieGenres = useSelector((state) => state.Movies.MovieGenres);
  const PopularMovie = useSelector((state) => state.Movies.PopularMovie);
  const TheaterMovies = useSelector((state) => state.Movies.TheaterMovies);
  const UpcomingMovies = useSelector((state) => state.Movies.UpcomingMovies);

  useEffect(() => {
    if (TheaterMovies && theaterMoviesList.length == 0) {
      setTheaterMoviesList(TheaterMovies.results);
    }
    if (UpcomingMovies && upcomingMoviesList.length == 0) {
      setUpcomingMoviesList(UpcomingMovies.results);
    }
  }, [TheaterMovies, UpcomingMovies]);

  const TopRatedSerie = useSelector((state) => state.Series.TopRatedSerie);
  const SerieGenres = useSelector((state) => state.Series.SerieGenres);
  const PopularSerie = useSelector((state) => state.Series.PopularSerie);
  const AirTodaySeries = useSelector((state) => state.Series.AirTodaySeries);
  const OnAirSeries = useSelector((state) => state.Series.OnAirSeries);

  useEffect(() => {
    if (AirTodaySeries && airTodayList.length == 0) {
      setAirTodayList(AirTodaySeries.results);
    }
    if (OnAirSeries && onTheAir.length == 0) {
      setOnTheAir(OnAirSeries.results);
    }
  }, [AirTodaySeries, OnAirSeries]);

  const HandleLogin = async () => {
    await Store.dispatch(fetchRequestToken());
  };

  const AccountDetail = useSelector((state) => state.Auth.AccountDetail);

  const loading = useSelector((state) => state.Auth.loading);

  return (
    <>
      <div className="w-full relative bg-[#0c0e17] z-50">
        <div className=" flex items-center justify-between container font-montserrat text-white px-4 mx-auto z-50">
          <div className="flex items-center justify-between md:space-x-0 space-x-4 py-3 md:py-0">
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="13"
              fill="white"
              className="block md:hidden cursor-pointer"
              onClick={() => setShowDrawer(true)}
            >
              <path d="M0 13L0 11.4 16 11.4 16 13 0 13ZM0 5.7L16 5.7 16 7.3 0 7.3 0 5.7ZM0 0L16 0 16 1.6 0 1.6 0 0Z"></path>
            </svg>

            <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
              <div className="w-80 p-4 bg-slate-800 h-full">
                <a href="/">
                  <svg version="1.1" width="103" height="40px">
                    <linearGradient
                      id="vodi-gr"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0" stop-color="#2A4999" />
                      <stop offset="1" stop-color="#2C9CD4" />
                    </linearGradient>
                    <g class="vodi-gr" fill="url(#vodi-gr)">
                      <path
                        class="vodi-svg0"
                        d="M72.8,12.7c0-2.7,0-1.8,0-4.4c0-0.9,0-1.8,0-2.8C73,3,74.7,1.4,77,1.4c2.3,0,4.1,1.8,4.2,4.2c0,1,0,2.1,0,3.1
		c0,6.5,0,9.4,0,15.9c0,4.7-1.7,8.8-5.6,11.5c-4.5,3.1-9.3,3.5-14.1,0.9c-4.7-2.5-7.1-6.7-7-12.1c0.1-7.8,6.3-13.6,14.1-13.2
		c0.7,0,1.4,0.2,2.1,0.3C71.3,12.2,72,12.4,72.8,12.7z M67.8,19.8c-2.9,0-5.2,2.2-5.2,5c0,2.9,2.3,5.3,5.2,5.3
		c2.8,0,5.2-2.4,5.2-5.2C73,22.2,70.6,19.8,67.8,19.8z
		M39.9,38.6c-7.3,0-13.3-6.1-13.3-13.5c0-7.5,5.9-13.4,13.4-13.4c7.5,0,13.4,6,13.4,13.5
			C53.4,32.6,47.4,38.6,39.9,38.6z M39.9,30.6c3.2,0,5.6-2.3,5.6-5.6c0-3.2-2.3-5.5-5.5-5.5c-3.2,0-5.6,2.2-5.6,5.4
			C34.4,28.2,36.7,30.6,39.9,30.6z
	M14.6,27c0.6-1.4,1.1-2.6,1.6-3.8c1.2-2.9,2.5-5.8,3.7-8.8c0.7-1.7,2-2.8,4-2.7c3,0,4.9,2.6,3.8,5.4
		c-0.5,1.3-1.2,2.6-1.8,3.9c-2.4,5-4.9,10-7.3,15c-0.8,1.6-2,2.6-3.9,2.6c-2,0-3.3-0.8-4.2-2.6c-2.7-5.6-5.3-11.1-8-16.7
		c-0.3-0.7-0.6-1.3-0.9-2c-0.8-1.8-0.3-3.7,1.1-4.8c1.5-1.2,4-1.3,5.3,0c0.7,0.6,1.2,1.5,1.6,2.3C11.3,18.8,12.9,22.7,14.6,27z
	M90.9,25.1c0,3.1,0,6.2,0,9.4c0,1.9-1.2,3.4-2.9,4c-1.7,0.5-3.5,0-4.5-1.6c-0.5-0.8-0.8-1.8-0.8-2.6
		c-0.1-6.1-0.1-11.3,0-17.5c0-2.2,1.5-3.9,3.5-4.2c2.1-0.3,4.1,0.9,4.7,2.9c0.1,0.5,0.2,1.1,0.2,1.6C90.9,20,90.9,22.1,90.9,25.1
		C90.9,25.1,90.9,25.1,90.9,25.1z
	M90.2,4.7L86,2.3c-1.3-0.8-3,0.2-3,1.7v4.8c0,1.5,1.7,2.5,3,1.7l4.2-2.4C91.5,7.4,91.5,5.5,90.2,4.7z"
                      ></path>
                    </g>
                  </svg>
                </a>

                <div className="flex items-center justify-between">
                  <div className="flex-1 border-b-2 border-gray-200"></div>
                  <span className="text-white p-4 font-montserrat">Movies</span>
                  <div className="flex-1 border-b-2 border-gray-200"></div>
                </div>
                <div className="flex flex-col">
                  <a
                    href="/movies/top-rated"
                    className="text-white my-2 hover:text-cyan"
                  >
                    Top Rated Movies
                  </a>
                  <a
                    href="/movies/popular"
                    className="text-white my-2 hover:text-cyan"
                  >
                    Most Popular Movies
                  </a>
                  <a
                    href="/movies/in-theatre"
                    className="text-white my-2 hover:text-cyan"
                  >
                    Movies In Theatres
                  </a>
                  <a
                    href="/movies/upcoming"
                    className="text-white my-2 hover:text-cyan"
                  >
                    Upcoming Movies
                  </a>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <div className="flex-1 border-b-2 border-gray-200"></div>
                  <span className="text-white p-4 font-montserrat">Series</span>
                  <div className="flex-1 border-b-2 border-gray-200"></div>
                </div>
                <div className="flex flex-col">
                  <a
                    href="/series/top-rated"
                    className="text-white my-2 hover:text-cyan"
                  >
                    Top Rated Series
                  </a>
                  <a
                    href="/series/popular"
                    className="text-white my-2 hover:text-cyan"
                  >
                    Most Popular Series
                  </a>
                  <a
                    href="/series/airing-today"
                    className="text-white my-2 hover:text-cyan"
                  >
                    Airing Today
                  </a>
                  <a
                    href="/series/on-air"
                    className="text-white my-2 hover:text-cyan"
                  >
                    On the Air
                  </a>
                </div>
              </div>
            </Drawer>

            {/* Logo */}
            <a href="/">
              <svg version="1.1" width="103" height="40px">
                <linearGradient id="vodi-gr" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0" stop-color="#2A4999" />
                  <stop offset="1" stop-color="#2C9CD4" />
                </linearGradient>
                <g class="vodi-gr" fill="url(#vodi-gr)">
                  <path
                    class="vodi-svg0"
                    d="M72.8,12.7c0-2.7,0-1.8,0-4.4c0-0.9,0-1.8,0-2.8C73,3,74.7,1.4,77,1.4c2.3,0,4.1,1.8,4.2,4.2c0,1,0,2.1,0,3.1
		c0,6.5,0,9.4,0,15.9c0,4.7-1.7,8.8-5.6,11.5c-4.5,3.1-9.3,3.5-14.1,0.9c-4.7-2.5-7.1-6.7-7-12.1c0.1-7.8,6.3-13.6,14.1-13.2
		c0.7,0,1.4,0.2,2.1,0.3C71.3,12.2,72,12.4,72.8,12.7z M67.8,19.8c-2.9,0-5.2,2.2-5.2,5c0,2.9,2.3,5.3,5.2,5.3
		c2.8,0,5.2-2.4,5.2-5.2C73,22.2,70.6,19.8,67.8,19.8z
		M39.9,38.6c-7.3,0-13.3-6.1-13.3-13.5c0-7.5,5.9-13.4,13.4-13.4c7.5,0,13.4,6,13.4,13.5
			C53.4,32.6,47.4,38.6,39.9,38.6z M39.9,30.6c3.2,0,5.6-2.3,5.6-5.6c0-3.2-2.3-5.5-5.5-5.5c-3.2,0-5.6,2.2-5.6,5.4
			C34.4,28.2,36.7,30.6,39.9,30.6z
	M14.6,27c0.6-1.4,1.1-2.6,1.6-3.8c1.2-2.9,2.5-5.8,3.7-8.8c0.7-1.7,2-2.8,4-2.7c3,0,4.9,2.6,3.8,5.4
		c-0.5,1.3-1.2,2.6-1.8,3.9c-2.4,5-4.9,10-7.3,15c-0.8,1.6-2,2.6-3.9,2.6c-2,0-3.3-0.8-4.2-2.6c-2.7-5.6-5.3-11.1-8-16.7
		c-0.3-0.7-0.6-1.3-0.9-2c-0.8-1.8-0.3-3.7,1.1-4.8c1.5-1.2,4-1.3,5.3,0c0.7,0.6,1.2,1.5,1.6,2.3C11.3,18.8,12.9,22.7,14.6,27z
	M90.9,25.1c0,3.1,0,6.2,0,9.4c0,1.9-1.2,3.4-2.9,4c-1.7,0.5-3.5,0-4.5-1.6c-0.5-0.8-0.8-1.8-0.8-2.6
		c-0.1-6.1-0.1-11.3,0-17.5c0-2.2,1.5-3.9,3.5-4.2c2.1-0.3,4.1,0.9,4.7,2.9c0.1,0.5,0.2,1.1,0.2,1.6C90.9,20,90.9,22.1,90.9,25.1
		C90.9,25.1,90.9,25.1,90.9,25.1z
	M90.2,4.7L86,2.3c-1.3-0.8-3,0.2-3,1.7v4.8c0,1.5,1.7,2.5,3,1.7l4.2-2.4C91.5,7.4,91.5,5.5,90.2,4.7z"
                  ></path>
                </g>
              </svg>
            </a>

            {/* Links */}
            <div className="md:flex hidden items-center pl-8">
              <div
                className={`flex py-6 items-center space-x-1 text-sm cursor-pointer px-2`}
                onMouseEnter={() => {
                  setSubMenu("movies");
                }}
                onMouseLeave={() => {
                  setSubMenu("");
                }}
              >
                <span>Movies</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="12"
                  className="scale-50"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>

              <div
                className={`flex py-6 items-center space-x-1 text-sm cursor-pointer px-2`}
                onMouseEnter={() => {
                  setSubMenu("tv");
                }}
                onMouseLeave={() => {
                  setSubMenu("");
                }}
              >
                <span>Series</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="12"
                  className="scale-50"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>

              <div
                className={`flex py-6 items-center space-x-1 text-sm cursor-pointer px-2`}
                onMouseEnter={() => {
                  setSubMenu("genres");
                }}
                onMouseLeave={() => {
                  setSubMenu("");
                }}
              >
                <span>Genres</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="12"
                  className="scale-50"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-between space-x-8">
            {AccountDetail ? (
              <>
                {/* Profile */}
                <div
                  className="flex items-center space-x-1 cursor-pointer relative py-4"
                  onMouseEnter={() => {
                    setSubMenu("profile");
                  }}
                  onMouseLeave={() => {
                    setSubMenu("");
                  }}
                  onClick={() => {
                    setSubMenu("profile");
                  }}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>
                    {AccountDetail.username[0].toUpperCase()}
                  </Avatar>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                    className="scale-50"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <>
                {/* Login */}
                <button
                  onClick={HandleLogin}
                  className=" p-2 hover:opacity-50 duration-200"
                >
                  Login
                </button>
              </>
            )}

            {/* Profile DropDown */}
            {subMenu == "profile" && (
              <div
                className="z-20 rounded-b-lg w-40 shadow-xl top-16 right-0 py-4 bg-[#f6f7f9] absolute font-opensans cursor-default"
                onMouseEnter={() => {
                  setSubMenu("profile");
                }}
                onMouseLeave={() => {
                  setSubMenu("");
                }}
              >
                <div className="profile-dropdown rotate-45 absolute w-4 h-4 border-2 border-[#f6f7f9] bg-[#f6f7f9] right-1 -top-2"></div>
                <a href="/profile" className="w-full text-black text-left hover:bg-slate-200 duration-200 p-2">
                  Profile
                </a>
                <button
                  className="w-full text-red-600 text-left hover:bg-slate-200 duration-200 p-2"
                  onClick={() => {
                    Store.dispatch(logout());
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* SunMenus */}

        {/* Genres */}
        {subMenu == "genres" && (
          <div
            className="w-full overflow-hidden shadow-lg top-16 py-4 bg-[#f6f7f9] absolute font-opensans md:block hidden z-20"
            onMouseEnter={() => {
              setSubMenu("genres");
            }}
            onMouseLeave={() => {
              setSubMenu("");
            }}
          >
            <div className="container mx-auto flex space-x-4 px-4 justify-between">
              {/* Movie Genres */}
              {MovieGenres && (
                <div className="flex-1 border-r-2 py-2 pr-1">
                  <h3 className="font-semibold pb-2">Movie Genres</h3>
                  <div className="grid grid-cols-5 w-full  gap-x-4 lg:gap-x-9 gap-y-2">
                    {MovieGenres &&
                      MovieGenres.map((genre) => (
                        <a
                          href={"/movies/genre/" + genre.id}
                          className="py-1 text-sm hover:text-[#24baef] duration-200 tracking-tight line-clamp-1"
                        >
                          {genre.name}
                        </a>
                      ))}
                  </div>
                </div>
              )}

              {/* TY Genres */}
              {SerieGenres && (
                <div className="flex-1 py-2 pl-1">
                  <h3 className="font-semibold pb-2">TV Genres</h3>
                  <div className="grid grid-cols-4 w-full gap-x-0 lg:gap-x-9 gap-y-2">
                    {SerieGenres &&
                      SerieGenres.map((genre) => (
                        <a
                          href={"/series/genre/" + genre.id}
                          className="py-1 text-sm hover:text-[#24baef] duration-200 line-clamp-1  tracking-tight"
                        >
                          {genre.name}
                        </a>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Movies */}
        {subMenu == "movies" && (
          <div
            className=" z-50 w-full shadow-lg top-16 py-4 bg-[#f6f7f9] absolute font-opensans md:block hidden"
            onMouseEnter={() => {
              setSubMenu("movies");
            }}
            onMouseLeave={() => {
              setSubMenu("");
            }}
          >
            <div className="container mx-auto flex space-x-4 px-2">
              {/* Most Popular Movie */}
              {PopularMovie && (
                <div className="border-r-2 py-2">
                  <h3 className="font-semibold pb-2">Most Popular Movies</h3>
                  <div className="flex mt-3 space-x-4">
                    <img
                      src={ImageBaseUrl + PopularMovie.poster_path}
                      alt=""
                      className="h-44"
                    />
                    <div className="max-w-52 pr-4">
                      <p className="text-slate-700 text-sm line-clamp-1">
                        {MovieGenres &&
                          PopularMovie.genre_ids.map((id, index) => {
                            let genre = MovieGenres.find(
                              (genre) => genre.id == id
                            );
                            if (PopularMovie.genre_ids.length == index + 1) {
                              return <span>{genre.name}</span>;
                            }
                            return <span>{genre.name}, </span>;
                          })}
                      </p>
                      <h3 className="font-semibold pb-1 line-clamp-1">
                        {PopularMovie.title}
                      </h3>
                      <p className="line-clamp-5 text-xs">
                        "{PopularMovie.overview}"
                      </p>
                      <div className="flex items-center justify-between pr-6">
                        <a
                          href={"/movie/" + PopularMovie.id}
                          className="text-[#24baef]  py-5 hover:scale-105 duration-200 text-sm font-bold"
                        >
                          Explore
                        </a>
                        <a
                          href="/movies/popular"
                          className="text-xs font-bold flex items-center py-5 hover:opacity-60 duration-200"
                        >
                          More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="12"
                            className="scale-50 -rotate-90 relative top-[1px]"
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
              )}

              {/* Top Rated Movie */}
              {TopRatedMovie && (
                <div className="border-r-2 py-2">
                  <h3 className="font-semibold pb-2">Top Rated Movies</h3>
                  <div className="flex mt-3 space-x-4">
                    <img
                      src={ImageBaseUrl + TopRatedMovie.poster_path}
                      alt=""
                      className="h-44"
                    />
                    <div className="max-w-52 pr-4">
                      <p className="text-slate-700 text-sm line-clamp-1">
                        {MovieGenres &&
                          TopRatedMovie.genre_ids.map((id, index) => {
                            let genre = MovieGenres.find(
                              (genre) => genre.id == id
                            );
                            if (TopRatedMovie.genre_ids.length == index + 1) {
                              return <span>{genre.name}</span>;
                            }
                            return <span>{genre.name}, </span>;
                          })}
                      </p>
                      <h3 className="font-semibold pb-1 line-clamp-1">
                        {TopRatedMovie.title}
                      </h3>
                      <p className="line-clamp-5 text-xs">
                        "{TopRatedMovie.overview}"
                      </p>
                      <div className="flex items-center justify-between pr-6">
                        <a
                          href={"/movie/" + TopRatedMovie.id}
                          className="text-[#24baef]  py-5 hover:scale-105 duration-200 text-sm font-bold"
                        >
                          Explore
                        </a>
                        <a
                          href="/movies/top-rated"
                          className="text-xs font-bold flex items-center py-5 hover:opacity-60 duration-200"
                        >
                          More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="12"
                            className="scale-50 -rotate-90 relative top-[1px]"
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
              )}

              <div className=" flex-1">
                {/* Now Playing */}
                {TheaterMovies && theaterMoviesList.length > 0 && (
                  <div className="py-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Movies In Theatres</h3>
                      <a
                        href="/movies/in-theatre"
                        className="text-xs font-bold flex items-center hover:opacity-60 duration-200"
                      >
                        More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="12"
                          className="scale-50 -rotate-90 relative top-[1px]"
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
                    <div className="flex items-center py-3 space-x-4">
                      {theaterMoviesList &&
                        theaterMoviesList.slice(0, 4).map((movie, index) => (
                          <div
                            className={` ${index == 2 && "lg:flex hidden"} ${
                              index == 3 && "xl:flex hidden"
                            }`}
                          >
                            <a
                              href={"/movie/" + movie.id}
                              className="flex space-x-2 hover:text-cyan duration-200"
                            >
                              <img
                                src={ImageBaseUrl + movie.poster_path}
                                alt=""
                                className="h-16"
                              />
                              <div className="w-32">
                                <h3 className="font-semibold text-xs line-clamp-1">
                                  {movie.title}
                                </h3>
                                <p className="text-xs line-clamp-3 font-light tracking-tighter leading-3 mt-1">
                                  {movie.overview}
                                </p>
                              </div>
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Upcomming */}
                {UpcomingMovies && upcomingMoviesList.length > 0 && (
                  <div className="">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Upcoming Movies</h3>
                      <a
                        href="/movies/upcoming"
                        className="text-xs font-bold flex items-center hover:opacity-60 duration-200"
                      >
                        More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="12"
                          className="scale-50 -rotate-90 relative top-[1px]"
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
                    <div className="flex items-center py-3 space-x-4">
                      {upcomingMoviesList &&
                        upcomingMoviesList.slice(1, 5).map((movie, index) => (
                          <div
                            className={` ${index == 2 && "lg:flex hidden"} ${
                              index == 3 && "xl:flex hidden"
                            }`}
                          >
                            <a
                              href={"/movie/" + movie.id}
                              className="flex space-x-2 hover:text-cyan duration-200"
                            >
                              <img
                                src={ImageBaseUrl + movie.poster_path}
                                alt=""
                                className="h-16"
                              />
                              <div className="w-32">
                                <h3 className="font-semibold text-xs line-clamp-1">
                                  {movie.title}
                                </h3>
                                <p className="text-xs line-clamp-3 font-light tracking-tighter leading-3 mt-1">
                                  {movie.overview}
                                </p>
                              </div>
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TV */}
        {subMenu == "tv" && (
          <div
            className="w-full z-20 shadow-lg top-16 py-4 bg-[#f6f7f9] absolute font-opensans md:block hidden"
            onMouseEnter={() => {
              setSubMenu("tv");
            }}
            onMouseLeave={() => {
              setSubMenu("");
            }}
          >
            <div className="container mx-auto flex space-x-4 px-2">
              {/* Most Popular Series */}
              {PopularSerie && (
                <div className="border-r-2 py-2">
                  <h3 className="font-semibold pb-2">Most Popular Series</h3>
                  <div className="flex mt-3 space-x-4">
                    <img
                      src={ImageBaseUrl + PopularSerie.poster_path}
                      alt=""
                      className="h-44"
                    />
                    <div className="max-w-52  pr-4">
                      <p className="text-slate-700 text-sm line-clamp-1">
                        {SerieGenres &&
                          PopularSerie.genre_ids.map((id, index) => {
                            let genre = SerieGenres.find(
                              (genre) => genre.id == id
                            );
                            if (PopularSerie.genre_ids.length == index + 1) {
                              return <span>{genre.name}</span>;
                            }
                            return <span>{genre.name}, </span>;
                          })}
                      </p>
                      <h3 className="font-semibold pb-1 line-clamp-1">
                        {PopularSerie.name}
                      </h3>
                      <p className="line-clamp-5 text-xs">
                        "{PopularSerie.overview}"
                      </p>
                      <div className="flex items-center justify-between pr-6">
                        <a
                          href={"/serie/" + PopularSerie.id}
                          className="text-[#24baef]  py-5 hover:scale-105 duration-200 text-sm font-bold"
                        >
                          Explore
                        </a>
                        <a
                          href="/series/popular"
                          className="text-xs font-bold flex items-center py-5 hover:opacity-60 duration-200"
                        >
                          More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="12"
                            className="scale-50 -rotate-90 relative top-[1px]"
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
              )}

              {/* Top Rated Series*/}
              {TopRatedSerie && (
                <div className="border-r-2 py-2">
                  <h3 className="font-semibold pb-2">Top Rated Series</h3>
                  <div className="flex mt-3 space-x-4">
                    <img
                      src={ImageBaseUrl + TopRatedSerie.poster_path}
                      alt=""
                      className="h-44"
                    />
                    <div className="max-w-52  pr-4">
                      <p className="text-slate-700 text-sm line-clamp-1">
                        {SerieGenres &&
                          TopRatedSerie.genre_ids.map((id, index) => {
                            let genre = SerieGenres.find(
                              (genre) => genre.id == id
                            );
                            if (TopRatedSerie.genre_ids.length == index + 1) {
                              return <span>{genre.name}</span>;
                            }
                            return <span>{genre.name}, </span>;
                          })}
                      </p>
                      <h3 className="font-semibold pb-1 line-clamp-1">
                        {TopRatedSerie.name}
                      </h3>
                      <p className="line-clamp-5 text-xs">
                        "{TopRatedSerie.overview}"
                      </p>
                      <div className="flex items-center justify-between pr-6">
                        <a
                          href={"/serie/" + TopRatedSerie.id}
                          className="text-[#24baef]  py-5 hover:scale-105 duration-200 text-sm font-bold"
                        >
                          Explore
                        </a>
                        <a
                          href="/series/top-rated"
                          className="text-xs font-bold flex items-center py-5 hover:opacity-60 duration-200"
                        >
                          More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="12"
                            className="scale-50 -rotate-90 relative top-[1px]"
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
              )}

              <div className=" flex-1">
                {/* Airing today */}
                {AirTodaySeries && airTodayList.length > 0 && (
                  <div className="py-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Airing Today</h3>
                      <a
                        href="/series/airing-today"
                        className="text-xs font-bold flex items-center hover:opacity-60 duration-200"
                      >
                        More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="12"
                          className="scale-50 -rotate-90 relative top-[1px]"
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
                    <div className="flex items-center py-3 space-x-4">
                      {airTodayList &&
                        airTodayList.slice(0, 4).map((serie, index) => (
                          <div
                            className={` ${index == 2 && "lg:flex hidden"} ${
                              index == 3 && "xl:flex hidden"
                            }`}
                          >
                            <a
                              href={"/serie/" + serie.id}
                              className="flex space-x-2 hover:text-cyan duration-200"
                            >
                              <img
                                src={ImageBaseUrl + serie.poster_path}
                                alt=""
                                className="h-16"
                              />
                              <div className="w-32">
                                <h3 className="font-semibold text-xs line-clamp-1">
                                  {serie.name}
                                </h3>
                                <p className="text-xs line-clamp-3 font-light tracking-tighter leading-3 mt-1">
                                  {serie.overview}
                                </p>
                              </div>
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* On the air */}
                {OnAirSeries && onTheAir.length > 0 && (
                  <div className="">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">On the Air</h3>
                      <a
                        href="/series/on-air"
                        className="text-xs font-bold flex items-center hover:opacity-60 duration-200"
                      >
                        More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="12"
                          className="scale-50 -rotate-90 relative top-[1px]"
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

                    <div className="flex items-center py-3 space-x-4">
                      {onTheAir &&
                        onTheAir.slice(0, 4).map((serie, index) => (
                          <div
                            className={` ${index == 2 && "lg:flex hidden"} ${
                              index == 3 && "xl:flex hidden"
                            }`}
                          >
                            <a
                              href={"/serie/" + serie.id}
                              className="flex space-x-2 hover:text-cyan duration-200"
                            >
                              <img
                                src={ImageBaseUrl + serie.poster_path}
                                alt=""
                                className="h-16"
                              />
                              <div className="w-32">
                                <h3 className="font-semibold text-xs line-clamp-1">
                                  {serie.name}
                                </h3>
                                <p className="text-xs line-clamp-3 font-light tracking-tighter leading-3 mt-1">
                                  {serie.overview}
                                </p>
                              </div>
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {loading && <FullScreenLoader />}
    </>
  );
}
