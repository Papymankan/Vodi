import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Footer from "../../Components/Footer/Footer";
import Store from "../../Redux/Store";
import {
  fetchLandingMovies,
  fetchTopYearMovies,
  fetchTrendingMovies,
} from "../../Redux/Reducers/Movies";
import { useSelector } from "react-redux";
import { ImageBaseUrl } from "../../Redux/FetchConfigs";
import {
  fetchAirTodaySeries,
  fetchLandingSeries,
  fetchOnAirSeries,
  fetchPopularSeries,
  fetchSerieGenres,
  fetchTopRatedSerie,
  fetchTopYearSeries,
  fetchTrendingSeries,
} from "../../Redux/Reducers/Series";
import { shuffleArray } from "../../Funcs";
import MoviesSwiper from "../../Components/MoviesSwiper/MoviesSwiper";

export default function Home() {
  const [LandingSlides, setLandingSlides] = useState(5);
  const [ActiveSlide, setActiveSlide] = useState(0);
  const [LandingRandom, setLandingRandom] = useState([]);
  const [TrendingMoviesRandom, setTrendingMoviesRandom] = useState([]);
  const [TrendingSeriesRandom, setTrendingSeriesRandom] = useState([]);

  const swiperRef = useRef(null);

  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActiveSlide(index);
    }
  };

  const CheckWidth = () => {
    if (window.innerWidth < 460) {
      if (LandingSlides == 5) {
        setLandingSlides(3);
      }
    } else {
      if (LandingSlides == 3) {
        setLandingSlides(5);
      }
    }
  };

  window.addEventListener("resize", CheckWidth);
  useEffect(() => {
    if (window.innerWidth < 460) {
      setLandingSlides(3);
    } else {
      setLandingSlides(5);
    }
  }, []);

  // Movies ----------------------------------
  const TopYearMovies = useSelector((state) => state.Movies.TopYearMovies);

  const MovieGenres = useSelector((state) => state.Movies.MovieGenres);

  const TrendingMovies = useSelector((state) => state.Movies.TrendingMovies);

  // Choose 7 random trending movies
  useEffect(() => {
    if (TrendingMovies) {
      let movies = [...TrendingMovies];
      let arr = [];
      if (TrendingMovies.length) {
        let index = 0;
        while (index < 7) {
          let randomNum = Math.floor(
            Math.random() * (TrendingMovies.length - index)
          );
          if (movies[randomNum].backdrop_path) {
            arr.push(movies[randomNum]);
            movies.splice(randomNum, 1);
            index++;
          }
        }
      }

      setTrendingMoviesRandom(arr);
    }
  }, [TrendingMovies]);

  const TopRatedMovie = useSelector((state) => state.Movies.TopRatedMovie);

  const LandingMovies = useSelector((state) => state.Movies.LandingMovies);

  // Movies ----------------------------------

  // Series ----------------------------------

  const TopYearSeries = useSelector((state) => state.Series.TopYearSeries);

  const SerieGenres = useSelector((state) => state.Series.SerieGenres);

  const TrendingSeries = useSelector((state) => state.Series.TrendingSeries);
  // Choose 7 random trending movies
  useEffect(() => {
    if (TrendingSeries) {
      let series = [...TrendingSeries];
      let arr = [];
      if (TrendingSeries.length) {
        let index = 0;
        while (index < 7) {
          let randomNum = Math.floor(
            Math.random() * (TrendingSeries.length - index)
          );
          if (series[randomNum].backdrop_path) {
            arr.push(series[randomNum]);
            series.splice(randomNum, 1);
            index++;
          }
        }
      }
      setTrendingSeriesRandom(arr);
    }
  }, [TrendingSeries]);

  const TopRatedSerie = useSelector((state) => state.Series.TopRatedSerie);

  const LandingSeries = useSelector((state) => state.Series.LandingSeries);
  // console.log(LandingSeries);

  // Series ----------------------------------

  useEffect(() => {
    if (LandingMovies && LandingSeries) {
      // Select Random Series
      let series = [...LandingSeries];
      let shuffledSeries = [];
      if (LandingSeries.length) {
        for (let index = 0; index < 2; index++) {
          let randomNum = Math.floor(Math.random() * (20 - index));
          shuffledSeries.push(series[randomNum]);
          series.splice(randomNum, 1);
        }
      }

      // Select Random Movies
      let movies = [...LandingMovies];
      let shuffledMovies = [];
      if (LandingMovies.length) {
        for (let index = 0; index < 3; index++) {
          let randomNum = Math.floor(Math.random() * (20 - index));
          shuffledMovies.push(movies[randomNum]);
          movies.splice(randomNum, 1);
        }
      }

      let concatArray = shuffledMovies.concat(shuffledSeries);

      setLandingRandom(shuffleArray(concatArray));
    }
  }, [LandingMovies, LandingSeries]);

  useEffect(() => {
    Store.dispatch(fetchTopYearMovies({ year: 2024, page: 1 }));
    Store.dispatch(fetchTrendingMovies({ time: "day" }));
    Store.dispatch(fetchLandingMovies());

    Store.dispatch(fetchTopYearSeries({ year: 2024, page: 1 }));
    Store.dispatch(fetchTrendingSeries({ time: "day" }));
    Store.dispatch(fetchLandingSeries());
  }, []);

  return (
    <>
      <NavBar />

      {/* Landing */}
      <div className="w-full relative bg-[#131722]">
        <Swiper
          className="mySwiper"
          threshold={0}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onActiveIndexChange={(e) => setActiveSlide(e.activeIndex)}
        >
          {LandingRandom &&
            LandingRandom.length > 0 &&
            LandingRandom.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full md:h-[690px] sm:h-[500px] ms:h-[400px] h-[350px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      ImageBaseUrl + item.backdrop_path
                    })`,
                  }}
                >
                  <div className="container mx-auto h-full">
                    <div className="md:w-1/2 w-full px-3 flex flex-col pb-24 md:pb-0 justify-center h-full text-white md:text-left text-center">
                      <p
                        className="text-xs md:text-sm tracking-wider py-2 mt-3"
                        style={{ textShadow: "2px 2px 2px #000000" }}
                      >
                        {item.title
                          ? MovieGenres &&
                            item.genre_ids.map((id, index) => {
                              let genre = MovieGenres.find(
                                (genre) => genre.id == id
                              );
                              if (item.genre_ids.length == index + 1) {
                                return <span>{genre.name}</span>;
                              }
                              return <span>{genre.name}, </span>;
                            })
                          : SerieGenres &&
                            item.genre_ids.map((id, index) => {
                              let genre = SerieGenres.find(
                                (genre) => genre.id == id
                              );
                              if (item.genre_ids.length == index + 1) {
                                return <span>{genre.name}</span>;
                              }
                              return <span>{genre.name}, </span>;
                            })}
                      </p>
                      <h1
                        className="md:text-7xl sm:text-5xl text-3xl font-bold max-w-md sm:max-w-2xl mx-auto md:mx-0"
                        style={{ textShadow: "3px 3px 2px #000000" }}
                      >
                        {item.title || item.name}
                      </h1>
                      <div className="w-full flex items-center md:justify-start justify-center space-x-8 md:my-8 my-4">
                        <a
                          className="px-9 text-center text-sm md_text-md py-2 md:py-4 bg-cyan rounded-md hover:opacity-60 duration-200"
                          href={
                            item.title
                              ? "/movie/" + item.id
                              : "/serie/" + item.id
                          }
                        >
                          Explore
                        </a>
                        <button
                          className="px-9 text-center text-sm md_text-md py-2 md:py-4 border-white border-2 rounded-md hover:text-black  hover:bg-white duration-200 shadow-xl"
                          style={{ textShadow: "1px 1px 2px #000000" }}
                        >
                          + Watchlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="md:w-2/3 w-full absolute md:bottom-4 -bottom-8 md:right-5 z-10 flex items-center justify-center md:justify-end">
          <Swiper
            className="LandingSwiper"
            threshold={0}
            slidesPerView={LandingSlides}
            spaceBetween={10}
          >
            {LandingRandom &&
              LandingRandom.length > 0 &&
              LandingRandom.map((item, index) => (
                <SwiperSlide className="swiper-slide2">
                  <div
                    className={`lg:h-40 lg:w-28 md:w-24 md:h-36 w-20 h-24 bg-cover bg-center cursor-pointer ${
                      ActiveSlide == index && "border-2 border-cyan"
                    } relative`}
                    style={{
                      backgroundImage: `url(${
                        ImageBaseUrl + item.backdrop_path
                      })`,
                    }}
                    onClick={() => handlePaginationClick(index)}
                  >
                    <div className="w-full h-full bg-[#00000066] absolute top-0 right-0 z-20"></div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>

      {/* Trending Movies */}
      <div className="w-full bg-[#131722] md:pt-7 xs:pt-12 pt-16 pb-7">
        <div className="container mx-auto font-montserrat text-white">
          <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4">
            <h2 className="text-2xl xs:py-7 font-semibold">Trending Movies</h2>
            <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
            <div className="flexitems-center justify-between space-x-12 py-6">
              <a
                href="/movies/trending/day"
                className="text-sm text-cyan hover:text-cyan duration-200"
              >
                Today
              </a>
              <a
                href="/movies/trending/week"
                className="text-sm  hover:text-cyan duration-200"
              >
                This Week
              </a>
            </div>
          </div>

          <div className="w-full grid lg:grid-cols-5 lg:grid-rows-2 md:grid-cols-3 grid-rows-5 grid-cols-2 gap-4 px-4">
            {TrendingMoviesRandom && TrendingMoviesRandom.length > 0 && (
              <div
                className="lg:h-96 lg:w-572 sm:h-[500px] xs:h-[380px] h-[280px] bg-cover bg-center cursor-pointer lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-3 col-span-2 row-span-2"
                style={{
                  backgroundImage: `url(${
                    ImageBaseUrl + TrendingMoviesRandom[0].backdrop_path
                  })`,
                }}
              >
                <div className="w-full h-full poster-cover  p-3 group transition-all">
                  <a
                    href={"/movie/" + TrendingMoviesRandom[0].id}
                    className="w-full h-full flex flex-col justify-end"
                  >
                    <p className="text-sm text-slate-300">
                      {MovieGenres &&
                        TrendingMoviesRandom[0].genre_ids.map((id, index) => {
                          let genre = MovieGenres.find(
                            (genre) => genre.id == id
                          );
                          if (
                            TrendingMoviesRandom[0].genre_ids.length ==
                            index + 1
                          ) {
                            return <span>{genre.name}</span>;
                          }
                          return <span>{genre.name}, </span>;
                        })}
                    </p>
                    <p className="group-hover:text-cyan duration-200">
                      {TrendingMoviesRandom[0].title}
                    </p>
                  </a>
                </div>
              </div>
            )}

            {TrendingMoviesRandom &&
              TrendingMoviesRandom.length > 0 &&
              TrendingMoviesRandom.map((movie, index) => {
                if (index == 0) {
                  return true;
                }

                if (movie)
                  return (
                    <div
                      className="bg-cover bg-center cursor-pointer"
                      style={{
                        backgroundImage: `url(${
                          ImageBaseUrl + movie.backdrop_path
                        })`,
                      }}
                    >
                      <div className="w-full h-full poster-cover p-3 group transition-all">
                        <a
                          href={"/movie/" + movie.id}
                          className="w-full h-full flex justify-end flex-col"
                        >
                          <p className="text-sm text-slate-300 line-clamp-1">
                            {MovieGenres &&
                              movie.genre_ids.map((id, index) => {
                                let genre = MovieGenres.find(
                                  (genre) => genre.id == id
                                );
                                if (movie.genre_ids.length == index + 1) {
                                  return <span>{genre.name}</span>;
                                }
                                return <span>{genre.name}, </span>;
                              })}
                          </p>
                          <p className="group-hover:text-cyan duration-200">
                            {movie.title}
                          </p>
                        </a>
                      </div>
                    </div>
                  );
              })}
          </div>
        </div>
      </div>

      {/* Recommanded Movies */}
      {/* <div className="w-full bg-[#0e0d12] xs:pt-0 pt-6">
        <div className="container mx-auto">
          <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
            <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
              Recommanded Movies
              <span className="font-light text-base"> for you</span>
            </h2>
            <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
          </div>

          <div className="w-full">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper text-white px-4"
              slidesPerView={2}
              spaceBetween={20}
              slidesPerGroup={1}
              breakpoints={{
                1200: {
                  slidesPerView: 6,
                  slidesPerGroup: 3,
                },
                768: {
                  slidesPerView: 4,
                  slidesPerGroup: 2,
                },
              }}
            >
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/51-walk-hard-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/51-walk-hard-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/51-walk-hard-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/51-walk-hard-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/46-she-is-funny-that-way-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="border-t-2 border-[#394253] text-end text-white py-3 mt-4 font-montserrat text-sm mx-4">
            <a href="#" className="hover:text-cyan duration-200">
              VIEW ALL
            </a>
          </div>
        </div>
      </div> */}

      {/* Top Rated Movie */}
      <div className="w-full relative bg-[#0e0d12] xs:pt-0 pt-6">
        <div className="container mx-auto">
          <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
            <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
              Top Rated Movie
              <span className="font-light text-base"> on vodi</span>
            </h2>
            <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
          </div>
        </div>

        {TopRatedMovie && (
          <div
            className="w-full md:h-[500px] sm:h-[420px] ms:h-[380px] h-[320px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                ImageBaseUrl + TopRatedMovie.backdrop_path
              })`,
            }}
          >
            <div className="container mx-auto h-full">
              <div className="md:w-1/2 w-full px-3 flex flex-col pb-24 md:pb-0 justify-end h-full text-white md:text-left text-center">
                <p className="text-xs md:text-sm tracking-wider py-2 mt-3">
                  {MovieGenres &&
                    TopRatedMovie.genre_ids.map((id, index) => {
                      let genre = MovieGenres.find((genre) => genre.id == id);
                      if (TopRatedMovie.genre_ids.length == index + 1) {
                        return <span>{genre.name}</span>;
                      }
                      return <span>{genre.name}, </span>;
                    })}
                </p>
                <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold max-w-md sm:max-w-2xl md:max-w-lg mx-auto md:mx-0 max-h-96 line-clamp-4">
                  {TopRatedMovie.title}
                </h1>
                <div className="w-full flex items-center md:justify-start justify-center space-x-8 md:my-8 my-4">
                  <a
                    href={"/movie/" + TopRatedMovie.id}
                    className="px-9 text-center text-sm md_text-md py-2 md:py-4 bg-cyan rounded-md hover:opacity-60 duration-200"
                  >
                    Explore
                  </a>
                  <button className="px-9 text-center text-sm md_text-md py-2 md:py-4 border-white border-2 rounded-md hover:opacity-60 duration-200">
                    + PlayList
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2024 Top Movies */}
      <div className="w-full bg-[#0e0d12] xs:py-8  xs:pt-0 pt-16">
        <div className="container mx-auto">
          <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
            <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
              2024 Top Movies
            </h2>
            <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
          </div>

          {/* <div className="w-full">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper text-white px-4"
              slidesPerView={2}
              spaceBetween={20}
              slidesPerGroup={1}
              breakpoints={{
                1200: {
                  slidesPerView: 6,
                  slidesPerGroup: 3,
                },
                768: {
                  slidesPerView: 4,
                  slidesPerGroup: 2,
                },
              }}
            >
              {TopYearMovies &&
                TopYearMovies.results &&
                TopYearMovies.results.length > 0 &&
                TopYearMovies.results.map((movie) => (
                  <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                    <a
                      href={"/movie/" + movie.id}
                      className="relative w-full h-full"
                    >
                      <img
                        src={ImageBaseUrl + movie.poster_path}
                        alt=""
                        className="h-full w-full"
                      />
                      <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                        <p className="text-slate-300 text-sm font-light line-clamp-1 text-start w-full">
                          {MovieGenres &&
                            movie.genre_ids.map((id) => {
                              let genre = MovieGenres.find(
                                (genre) => genre.id == id
                              );
                              return <span>{genre.name}, </span>;
                            })}
                        </p>
                        <p className="group-hover:text-cyan duration-200 line-clamp-1 w-full text-start">
                          {movie.title}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div> */}

          <MoviesSwiper movies={TopYearMovies} />

          <div className="border-t-2 border-[#394253] text-end text-white py-3 mt-4 font-montserrat text-sm mx-4">
            <a href="/movies/top-year" className="hover:text-cyan duration-200">
              VIEW ALL
            </a>
          </div>
        </div>
      </div>

      {/* Trending Series */}
      <div className="w-full bg-[#131722] md:pt-7 pt-10 pb-7">
        <div className="container mx-auto font-montserrat text-white">
          <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4">
            <h2 className="text-2xl xs:py-7 font-semibold">Trending Series</h2>
            <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
            <div className="flex items-center justify-between space-x-12 py-6">
              <a
                href="/series/trending/day"
                className="text-sm text-cyan hover:text-cyan duration-200"
              >
                Today
              </a>
              <a
                href="/series/trending/week"
                className="text-sm  hover:text-cyan duration-200"
              >
                This Week
              </a>
            </div>
          </div>

          <div className="w-full grid lg:grid-cols-5 lg:grid-rows-2 md:grid-cols-3 grid-rows-5 grid-cols-2 gap-4 px-4">
            {TrendingSeriesRandom && TrendingSeriesRandom.length > 0 && (
              <div
                className="lg:h-96 lg:w-572 sm:h-[500px] xs:h-[380px] h-[280px] bg-cover bg-center cursor-pointer lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-3 col-span-2 row-span-2"
                style={{
                  backgroundImage: `url(${
                    ImageBaseUrl + TrendingSeriesRandom[0].backdrop_path
                  })`,
                }}
              >
                <div className="w-full h-full poster-cover flex justify-end p-3 flex-col group transition-all">
                  <a
                    href={"/serie/" + TrendingSeriesRandom[0].id}
                    className="w-full h-full flex flex-col justify-end"
                  >
                    <p className="text-sm text-slate-300">
                      {SerieGenres &&
                        TrendingSeriesRandom[0].genre_ids.map((id, index) => {
                          let genre = SerieGenres.find(
                            (genre) => genre.id == id
                          );
                          if (
                            TrendingSeriesRandom[0].genre_ids.length ==
                            index + 1
                          ) {
                            return <span>{genre.name}</span>;
                          }
                          return <span>{genre.name}, </span>;
                        })}
                    </p>
                    <p className="group-hover:text-cyan duration-200">
                      {TrendingSeriesRandom[0].name}
                    </p>
                  </a>
                </div>
              </div>
            )}

            {TrendingSeriesRandom &&
              TrendingSeriesRandom.length > 0 &&
              TrendingSeriesRandom.map((serie, index) => {
                if (index == 0) {
                  return true;
                }
                if (serie)
                  return (
                    <div
                      className="bg-cover bg-center cursor-pointer"
                      style={{
                        backgroundImage: `url(${
                          ImageBaseUrl + serie.backdrop_path
                        })`,
                      }}
                    >
                      <div className="w-full h-full poster-cover flex justify-end p-3 flex-col group transition-all">
                        <a
                          href={"/serie/" + serie.id}
                          className="w-full h-full flex flex-col justify-end"
                        >
                          <p className="text-sm text-slate-300 line-clamp-1">
                            {SerieGenres &&
                              serie.genre_ids.map((id, index) => {
                                let genre = SerieGenres.find(
                                  (genre) => genre.id == id
                                );
                                if (serie.genre_ids.length == index + 1) {
                                  return <span>{genre.name}</span>;
                                }
                                return <span>{genre.name}, </span>;
                              })}
                          </p>
                          <p className="group-hover:text-cyan duration-200 line-clamp-2">
                            {serie.name}
                          </p>
                        </a>
                      </div>
                    </div>
                  );
              })}
          </div>
        </div>
      </div>

      {/* Recommanded Series */}
      {/* <div className="w-full bg-[#0e0d12] xs:pt-0 pt-6">
        <div className="container mx-auto">
          <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
            <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
              Recommanded Series
              <span className="font-light text-base"> for you</span>
            </h2>
            <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
          </div>

          <div className="w-full">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper text-white px-4"
              slidesPerView={2}
              spaceBetween={20}
              slidesPerGroup={1}
              breakpoints={{
                1200: {
                  slidesPerView: 6,
                  slidesPerGroup: 3,
                },
                768: {
                  slidesPerView: 4,
                  slidesPerGroup: 2,
                },
              }}
            >
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/51-walk-hard-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/51-walk-hard-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/51-walk-hard-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/51-walk-hard-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/46-she-is-funny-that-way-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                <a href="#" className="relative w-full h-full">
                  <img
                    src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-slate-300 font-light">action, sport</p>
                    <p className="group-hover:text-cyan duration-200">
                      Amarillo
                    </p>
                  </div>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="border-t-2 border-[#394253] text-end text-white py-3 mt-4 font-montserrat text-sm mx-4">
            <a href="#" className="hover:text-cyan duration-200">
              VIEW ALL
            </a>
          </div>
        </div>
      </div> */}

      {/* Top Reated Serie */}
      <div className="w-full relative bg-[#0e0d12] xs:pt-0 pt-6">
        <div className="container mx-auto">
          <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
            <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
              Top Reated Serie
              <span className="font-light text-base"> on vodi</span>
            </h2>
            <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
          </div>
        </div>

        {TopRatedSerie && (
          <div
            className="w-full md:h-[500px] sm:h-[420px] ms:h-[380px] h-[320px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                ImageBaseUrl + TopRatedSerie.backdrop_path
              })`,
            }}
          >
            <div className="container mx-auto h-full">
              <div className="md:w-1/2 w-full px-3 flex flex-col pb-24 md:pb-0 justify-end h-full text-white md:text-left text-center">
                <p className="text-xs md:text-sm tracking-wider py-2 mt-3">
                  {SerieGenres &&
                    TopRatedSerie.genre_ids.map((id, index) => {
                      let genre = SerieGenres.find((genre) => genre.id == id);
                      if (TopRatedSerie.genre_ids.length == index + 1) {
                        return <span>{genre.name}</span>;
                      }
                      return <span>{genre.name}, </span>;
                    })}
                </p>
                <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold max-w-md sm:max-w-2xl md:max-w-lg mx-auto md:mx-0 max-h-96 line-clamp-4">
                  {TopRatedSerie.name}
                </h1>
                <div className="w-full flex items-center md:justify-start justify-center space-x-8 md:my-8 my-4">
                  <a
                    href={`/serie/` + TopRatedSerie.id}
                    className="px-9 text-center text-sm md_text-md py-2 md:py-4 bg-cyan rounded-md hover:opacity-60 duration-200"
                  >
                    Explore
                  </a>
                  <button className="px-9 text-center text-sm md_text-md py-2 md:py-4 border-white border-2 rounded-md hover:opacity-60 duration-200">
                    + PlayList
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2024 Top Series */}
      <div className="w-full bg-[#0e0d12]  xs:py-8  xs:pt-0 pt-16">
        <div className="container mx-auto">
          <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
            <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
              2024 Top Series
            </h2>
            <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
          </div>

          <div className="w-full">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper text-white px-4"
              slidesPerView={2}
              spaceBetween={20}
              slidesPerGroup={1}
              breakpoints={{
                1200: {
                  slidesPerView: 6,
                  slidesPerGroup: 3,
                },
                768: {
                  slidesPerView: 4,
                  slidesPerGroup: 2,
                },
              }}
            >
              {TopYearSeries &&
                TopYearSeries.results &&
                TopYearSeries.results.length > 0 &&
                TopYearSeries.results.map((serie) => (
                  <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                    <a
                      href={"/serie/" + serie.id}
                      className="relative w-full h-full"
                    >
                      <img
                        src={ImageBaseUrl + serie.poster_path}
                        alt=""
                        className="h-full w-full"
                      />
                      <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                        <p className="text-slate-300 text-sm font-light line-clamp-1 text-start w-full">
                          {SerieGenres &&
                            serie.genre_ids.map((id, index) => {
                              let genre = SerieGenres.find(
                                (genre) => genre.id == id
                              );
                              if (serie.genre_ids.length == index + 1) {
                                return <span>{genre.name}</span>;
                              }
                              return <span>{genre.name}, </span>;
                            })}
                        </p>
                        <p className="group-hover:text-cyan duration-200 line-clamp-1 w-full text-start">
                          {serie.name}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className="border-t-2 border-[#394253] text-end text-white py-3 mt-4 font-montserrat text-sm mx-4">
            <a href="/series/top-year" className="hover:text-cyan duration-200">
              VIEW ALL
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
