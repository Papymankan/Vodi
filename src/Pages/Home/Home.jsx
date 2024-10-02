import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Footer from "../../Components/Footer/Footer";
import Store from "../../Redux/Store";
import {
  fetchMovieGenres,
  fetchMovies,
  fetchPopularMovies,
  fetchTheaterMovies,
  fetchTopRatedMovie,
  fetchTopYearMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../../Redux/Reducers/Movies";
import { useSelector } from "react-redux";
import { ImageBaseUrl } from "../../Redux/FetchConfigs";
import {
  fetchPopularSeries,
  fetchSerieGenres,
  fetchTopRatedSerie,
  fetchTopYearSeries,
  fetchTrendingSeries,
} from "../../Redux/Reducers/Series";

export default function Home() {
  const [LandingSlides, setLandingSlides] = useState(5);
  const [TrendingMoviesRandom, setTrendingMoviesRandom] = useState([]);
  const [TrendingSeriesRandom, setTrendingSeriesRandom] = useState([]);

  const CheckWidth = () => {
    if (window.innerWidth < 630) {
      if (LandingSlides == 5) {
        setLandingSlides(3);
      }
    } else {
      if (LandingSlides == 3) {
        setLandingSlides(5);
      }
    }
  };

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
        for (let index = 0; index < 7; index++) {
          let randomNum = Math.floor(Math.random() * (20 - index));

          arr.push(movies[randomNum]);
          movies.splice(randomNum, 1);
        }
      }
      setTrendingMoviesRandom(arr);
    }
  }, [TrendingMovies]);

  const TopRatedMovie = useSelector((state) => state.Movies.TopRatedMovie);

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
        for (let index = 0; index < 7; index++) {
          let randomNum = Math.floor(Math.random() * (20 - index));

          arr.push(series[randomNum]);
          series.splice(randomNum, 1);
        }
      }
      setTrendingSeriesRandom(arr);
    }
  }, [TrendingSeries]);

  const TopRatedSerie = useSelector((state) => state.Series.TopRatedSerie);

  // Series ----------------------------------
  useEffect(() => {
    setLandingSlides(3);
  }, [window.innerWidth < 630]);

  useEffect(() => {
    Store.dispatch(fetchTopYearMovies());
    Store.dispatch(fetchMovieGenres());
    Store.dispatch(fetchTrendingMovies());
    Store.dispatch(fetchTopRatedMovie());
    Store.dispatch(fetchPopularMovies());
    Store.dispatch(fetchTheaterMovies());
    Store.dispatch(fetchUpcomingMovies());

    Store.dispatch(fetchTopYearSeries());
    Store.dispatch(fetchSerieGenres());
    Store.dispatch(fetchTrendingSeries());
    Store.dispatch(fetchTopRatedSerie());
    Store.dispatch(fetchPopularSeries());

  }, []);
  window.addEventListener("resize", CheckWidth);

  return (
    <>
      <NavBar />

      {/* Landing */}
      <div className="w-full relative bg-[#131722]">
        <Swiper className="mySwiper" threshold={0}>
          <SwiperSlide>
            <div
              className="w-full md:h-[644px] sm:h-[500px] ms:h-[400px] h-[350px] bg-cover bg-center"
              style={{ backgroundImage: "url(/img/swiperLanding.jpg)" }}
            >
              <div className="container mx-auto h-full">
                <div className="md:w-1/2 w-full px-3 flex flex-col pb-24 md:pb-0 justify-end h-full text-white md:text-left text-center">
                  <p className="text-xs md:text-sm tracking-wider py-2 mt-3">
                    2016 | Action, Animation, Family | 2hr 13 mins
                  </p>
                  <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold max-w-md sm:max-w-2xl md:max-w-lg mx-auto md:mx-0">
                    Fantastic Beasts and Where to Find Them
                  </h1>
                  <div className="w-full flex items-center md:justify-start justify-center space-x-8 md:my-8 my-4">
                    <button className="px-9 text-center text-sm md_text-md py-2 md:py-4 bg-cyan rounded-md hover:opacity-60 duration-200">
                      Explore
                    </button>
                    <button className="px-9 text-center text-sm md_text-md py-2 md:py-4 border-white border-2 rounded-md hover:opacity-60 duration-200">
                      + PlayList
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full md:h-[644px] sm:h-[500px] ms:h-[400px] h-[350px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/05/h5-slider-1.jpg)",
              }}
            >
              <div className="container mx-auto h-full">
                <div className="md:w-1/2 w-full px-3 flex flex-col pb-24 md:pb-0 justify-end h-full text-white md:text-left text-center">
                  <p className="text-xs md:text-sm tracking-wider py-2 mt-3">
                    2016 | Action, Animation, Family | 2hr 13 mins
                  </p>
                  <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold max-w-md sm:max-w-2xl md:max-w-lg mx-auto md:mx-0">
                    The Convenient Groom
                  </h1>
                  <div className="w-full flex items-center md:justify-start justify-center space-x-8 md:my-8 my-4">
                    <button className="px-9 text-center text-sm md_text-md py-2 md:py-4 bg-cyan rounded-md hover:opacity-60 duration-200">
                      Explore
                    </button>
                    <button className="px-9 text-center text-sm md_text-md py-2 md:py-4 border-white border-2 rounded-md hover:opacity-60 duration-200">
                      + PlayList
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full md:h-[644px] sm:h-[500px] ms:h-[400px] h-[350px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/05/h5-slider-6.jpg)",
              }}
            >
              <div className="container mx-auto h-full">
                <div className="md:w-1/2 w-full px-3 flex flex-col pb-24 md:pb-0 justify-end h-full text-white md:text-left text-center">
                  <p className="text-xs md:text-sm tracking-wider py-2 mt-3">
                    2016 | Action, Animation, Family | 2hr 13 mins
                  </p>
                  <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold max-w-md sm:max-w-2xl md:max-w-lg mx-auto md:mx-0">
                    The Convenient Groom
                  </h1>
                  <div className="w-full flex items-center md:justify-start justify-center space-x-8 md:my-8 my-4">
                    <button className="px-9 text-center text-sm md_text-md py-2 md:py-4 bg-cyan rounded-md hover:opacity-60 duration-200">
                      Explore
                    </button>
                    <button className="px-9 text-center text-sm md_text-md py-2 md:py-4 border-white border-2 rounded-md hover:opacity-60 duration-200">
                      + PlayList
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="md:w-2/3 w-full absolute md:bottom-4 -bottom-16 md:right-5 z-10 flex items-center justify-center md:justify-end">
          <Swiper
            className="LandingSwiper"
            threshold={0}
            slidesPerView={LandingSlides}
            spaceBetween={10}
          >
            <SwiperSlide className="swiper-slide2">
              <div
                className="lg:h-40 lg:w-32 md:w-24 md:h-36 w-28 h-36 bg-cover bg-center cursor-pointer border-2 border-cyan relative"
                style={{
                  backgroundImage:
                    "url(https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/05/h5-slider-6.jpg)",
                }}
              >
                <div className="w-full h-full bg-[#00000066] absolute top-0 right-0 z-20"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide2">
              <div
                className="lg:h-40 lg:w-32 md:w-24 md:h-36 w-28 h-36 bg-cover bg-center cursor-pointer border-2 border-cyan relative"
                style={{
                  backgroundImage:
                    "url(https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/05/h5-slider-6.jpg)",
                }}
              >
                <div className="w-full h-full bg-[#00000066] absolute top-0 right-0 z-20"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide2">
              <div
                className="lg:h-40 lg:w-32 md:w-24 md:h-36 w-28 h-36 bg-cover bg-center cursor-pointer border-2 border-cyan relative"
                style={{
                  backgroundImage:
                    "url(https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/05/h5-slider-6.jpg)",
                }}
              >
                <div className="w-full h-full bg-[#00000066] absolute top-0 right-0 z-20"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide2">
              <div
                className="lg:h-40 lg:w-32 md:w-24 md:h-36 w-28 h-36 bg-cover bg-center cursor-pointer border-2 border-cyan relative"
                style={{
                  backgroundImage:
                    "url(https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/05/h5-slider-6.jpg)",
                }}
              >
                <div className="w-full h-full bg-[#00000066] absolute top-0 right-0 z-20"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide2">
              <div
                className="lg:h-40 lg:w-32 md:w-24 md:h-36 w-28 h-36 bg-cover bg-center cursor-pointer border-2 border-cyan relative"
                style={{
                  backgroundImage:
                    "url(https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/05/h5-slider-6.jpg)",
                }}
              >
                <div className="w-full h-full bg-[#00000066] absolute top-0 right-0 z-20"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Trending Movies */}
      <div className="w-full bg-[#131722] md:pt-7 pt-12 pb-7">
        <div className="container mx-auto font-montserrat text-white">
          <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4">
            <h2 className="text-2xl xs:py-7 font-semibold">Trending Movies</h2>
            <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
            <div className="flexitems-center justify-between space-x-12 py-6">
              <a
                href="#"
                className="text-sm text-cyan hover:text-cyan duration-200"
              >
                Today
              </a>
              <a href="#" className="text-sm  hover:text-cyan duration-200">
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
                <div className="w-full h-full poster-cover flex justify-end p-3 flex-col group transition-all">
                  <p className="text-sm text-slate-300">
                    {MovieGenres &&
                      TrendingMoviesRandom[0].genre_ids.map((id, index) => {
                        let genre = MovieGenres.find((genre) => genre.id == id);
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
                </div>
              </div>
            )}

            {TrendingMoviesRandom &&
              TrendingMoviesRandom.length > 0 &&
              TrendingMoviesRandom.map((movie, index) => {
                if (index == 0) {
                  return true;
                }
                return (
                  <div
                    className="bg-cover bg-center cursor-pointer"
                    style={{
                      backgroundImage: `url(${
                        ImageBaseUrl + movie.backdrop_path
                      })`,
                    }}
                  >
                    <div className="w-full h-full poster-cover flex justify-end p-3 flex-col group transition-all">
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
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Recommanded Movies */}
      <div className="w-full bg-[#0e0d12]">
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
      </div>

      {/* Top Rated Movie */}
      <div className="w-full relative bg-[#0e0d12]">
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
                  <button className="px-9 text-center text-sm md_text-md py-2 md:py-4 bg-cyan rounded-md hover:opacity-60 duration-200">
                    Explore
                  </button>
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
      <div className="w-full bg-[#0e0d12] py-8">
        <div className="container mx-auto">
          <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
            <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
              2024 Top Movies
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
              {TopYearMovies &&
                TopYearMovies.length > 0 &&
                TopYearMovies.map((movie) => (
                  <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                    <a href="#" className="relative w-full h-full">
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
          </div>

          <div className="border-t-2 border-[#394253] text-end text-white py-3 mt-4 font-montserrat text-sm mx-4">
            <a href="#" className="hover:text-cyan duration-200">
              VIEW ALL
            </a>
          </div>
        </div>
      </div>

      {/* Trending Series */}
      <div className="w-full bg-[#131722] md:pt-7 pt-32 pb-7">
        <div className="container mx-auto font-montserrat text-white">
          <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4">
            <h2 className="text-2xl xs:py-7 font-semibold">Trending Series</h2>
            <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
            <div className="flex items-center justify-between space-x-12 py-6">
              <a
                href="#"
                className="text-sm text-cyan hover:text-cyan duration-200"
              >
                Today
              </a>
              <a href="#" className="text-sm  hover:text-cyan duration-200">
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
                  <p className="text-sm text-slate-300">
                    {SerieGenres &&
                      TrendingSeriesRandom[0].genre_ids.map((id, index) => {
                        let genre = SerieGenres.find((genre) => genre.id == id);
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
                </div>
              </div>
            )}

            {TrendingSeriesRandom &&
              TrendingSeriesRandom.length > 0 &&
              TrendingSeriesRandom.map((serie, index) => {
                if (index == 0) {
                  return true;
                }
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
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Recommanded Series */}
      <div className="w-full bg-[#0e0d12]">
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
      </div>

      {/* Top Reated Serie */}
      <div className="w-full relative bg-[#0e0d12]">
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
                  <button className="px-9 text-center text-sm md_text-md py-2 md:py-4 bg-cyan rounded-md hover:opacity-60 duration-200">
                    Explore
                  </button>
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
      <div className="w-full bg-[#0e0d12] py-8">
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
                TopYearSeries.length > 0 &&
                TopYearSeries.map((serie) => (
                  <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
                    <a href="#" className="relative w-full h-full">
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
            <a href="#" className="hover:text-cyan duration-200">
              VIEW ALL
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
