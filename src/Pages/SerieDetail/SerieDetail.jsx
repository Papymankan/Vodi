import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import {
  AddToFavorite,
  AddToWatchList,
  fetchIsInFavorites,
  fetchIsInRated,
  fetchIsInWatchList,
  fetchRecommandSeries,
  fetchSerieCrews,
  fetchSerieDetails,
  fetchSerieImages,
  fetchSerieReviews,
  fetchSerieSeason,
  fetchSerieVideos,
  RateSerie,
} from "../../Redux/Reducers/Series";
import Store from "../../Redux/Store";
import { useSelector } from "react-redux";
import { ImageBaseUrl, ImageLowQualityUrl } from "../../Redux/FetchConfigs";
import BackDrop from "../../Components/BackDrop/BackDrop";
import CustomLightBox from "../../Components/CustomLightBox/CustomLightBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import { Counter } from "yet-another-react-lightbox/plugins";
import { Avatar, Box, Modal, Slider } from "@mui/material";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";
import EpisodeSection from "../../Components/EpisodeSection/EpisodeSection";
import SeriesSwiper from "../../Components/SeriesSwiper/SeriesSwiper";
import FullScreenLoader from "../../Components/FullScreenLoader/FullScreenLoader";

export default function SerieDetail() {
  const [isMuted, setIsMuted] = useState(true);
  const [LoadingBackdrop, setLoadingBackdrop] = useState(true);
  const [BackdropVideo, setBackdropVideo] = useState(null);
  const [CastsRow, setCastsRow] = useState(8);
  const [showImagesLightbox, setShowImagesLightbox] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviewsPage, setReviewsPage] = useState(1);
  const [expandReview, setExpandReview] = useState(0);
  const [selectedSeason, setSelectedSeason] = useState("1");
  const [voteModal, setVoteModal] = useState(false);
  const [vote, setVote] = useState(0);

  const playerRef = useRef(null);

  const params = useParams();

  const SerieDetails = useSelector((state) => state.Series.SerieDetails);
  const SerieVideos = useSelector((state) => state.Series.SerieVideos);
  const SerieImages = useSelector((state) => state.Series.SerieImages);
  const RecommandSeries = useSelector((state) => state.Series.RecommandSeries);
  const SerieCrews = useSelector((state) => state.Series.SerieCrews);
  const SerieGenres = useSelector((state) => state.Series.SerieGenres);
  const IsInRated = useSelector((state) => state.Series.IsInRated);
  const RatedSeries = useSelector((state) => state.Series.RatedSeries);
  const SerieReviews = useSelector((state) => state.Series.SerieReviews);
  const loading = useSelector((state) => state.Series.loading);
  const SerieSeason = useSelector((state) => state.Series.SerieSeason);
  const authenticated = useSelector((state) => state.Auth.authenticated);
  const AccountDetail = useSelector((state) => state.Auth.AccountDetail);
  const FavoriteSeries = useSelector((state) => state.Series.FavoriteSeries);
  const WatchListSeries = useSelector((state) => state.Series.WatchListSeries);
  const IsInFavorites = useSelector((state) => state.Series.IsInFavorites);
  const IsInWatchList = useSelector((state) => state.Series.IsInWatchList);

  console.log(IsInRated);
  console.log(RatedSeries);

  const toggleMute = () => {
    if (playerRef.current) {
      // Ensure the player is initialized
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const onStateChange = (event) => {
    if (event.data === 1) {
      setLoadingBackdrop(false);
      console.log("playing");
    }
  };

  const onReady = (event) => {
    playerRef.current = event.target; // Store the player instance in the ref
    playerRef.current.mute(); // Start muted
  };

  const CheckWidth = () => {
    if (window.innerWidth > 1486) {
      setCastsRow(7);
    } else if (window.innerWidth > 1200) {
      setCastsRow(6);
    } else if (window.innerWidth > 992) {
      setCastsRow(6);
    } else if (window.innerWidth > 768) {
      setCastsRow(10);
    } else if (window.innerWidth > 576) {
      setCastsRow(9);
    } else if (window.innerWidth > 384) {
      setCastsRow(6);
    } else {
      setCastsRow(5);
    }
  };

  useEffect(() => {
    Store.dispatch(fetchSerieDetails({ id: params.id }));
  }, [params]);

  useEffect(() => {
    if (SerieDetails) {
      Store.dispatch(fetchSerieVideos({ id: params.id }));
      Store.dispatch(fetchSerieImages({ id: params.id }));
      Store.dispatch(fetchRecommandSeries({ id: params.id }));
      Store.dispatch(fetchSerieCrews({ id: params.id }));
    }
  }, [SerieDetails]);
  window.addEventListener("resize", CheckWidth);
  useEffect(CheckWidth, []);

  useEffect(() => {
    if (SerieDetails && reviewsPage) {
      Store.dispatch(fetchSerieReviews({ id: params.id, page: reviewsPage }));
    }
  }, [SerieDetails, reviewsPage]);

  useEffect(() => {
    if (SerieDetails && selectedSeason) {
      Store.dispatch(
        fetchSerieSeason({ id: params.id, season: selectedSeason })
      );
    }
  }, [SerieDetails, selectedSeason]);

  useEffect(() => {
    if (SerieVideos) {
      SerieVideos.some((video) => {
        if (video.type == "Trailer") {
          setBackdropVideo(video);
        }
      });
    }
  }, [SerieVideos]);

  useEffect(() => {
    if (authenticated && SerieDetails && FavoriteSeries) {
      console.log("fetch");
      Store.dispatch(
        fetchIsInFavorites({
          accountId: AccountDetail.id,
          movieId: SerieDetails.id,
          totalPages: FavoriteSeries.total_pages,
        })
      );
    }
  }, [authenticated, SerieDetails, FavoriteSeries]);

  useEffect(() => {
    if (authenticated && SerieDetails && WatchListSeries) {
      console.log("fetch");
      Store.dispatch(
        fetchIsInWatchList({
          accountId: AccountDetail.id,
          serieId: SerieDetails.id,
          totalPages: WatchListSeries.total_pages,
        })
      );
    }
  }, [authenticated, SerieDetails, WatchListSeries]);

  useEffect(() => {
    if (authenticated && SerieDetails && RatedSeries) {
      Store.dispatch(
        fetchIsInRated({
          accountId: AccountDetail.id,
          movieId: SerieDetails.id,
          totalPages: RatedSeries.total_pages,
        })
      );
    }
  }, [authenticated, SerieDetails, RatedSeries]);

  useEffect(() => {
    setVote(IsInRated);
  }, [IsInRated]);

  const addToWatchListHandler = () => {
    if (authenticated) {
      Store.dispatch(
        AddToWatchList({ accountId: AccountDetail.id, serieId: params.id })
      );
    } else {
      alert("Login please");
    }
  };

  const removeFromWatchListHandler = () => {
    if (authenticated) {
      Store.dispatch(
        AddToWatchList({
          accountId: AccountDetail.id,
          serieId: params.id,
          remove: true,
        })
      );
    } else {
      alert("Login please");
    }
  };

  const addToFavoriteHandler = () => {
    if (authenticated) {
      Store.dispatch(
        AddToFavorite({ accountId: AccountDetail.id, serieId: params.id })
      );
    } else alert("Login please");
  };

  const removeFromFavoriteHandler = () => {
    if (authenticated) {
      Store.dispatch(
        AddToFavorite({
          accountId: AccountDetail.id,
          serieId: params.id,
          remove: true,
        })
      );
    } else alert("Login please");
  };

  const voteModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#131722",
    boxShadow: 24,
    outline: 0,
    borderRadius: "10px",
  };

  const ratingHandler = () => {
    if (authenticated)
      Store.dispatch(RateSerie({ movieId: params.id, rating: vote }));
  };

  return (
    <>
      <NavBar />
      {SerieDetails && (
        <>
          {/* Landing */}
          <div className="w-full bg-black pb-3 movie-detail-landing relative z-20 overflow-hidden">
            <div className="container mx-auto px-4 z-20">
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
                  {SerieDetails.name}
                </a>
              </div>

              {/* Landing Details */}
              <div className="w-full my-3 md:my-6 flex items-start sm:flex-row flex-col relative sm:h-96 z-20">
                <div className="sm:hidden flex items-center space-x-3 absolute top-0 right-4 z-10">
                  {BackdropVideo && (
                    <button onClick={toggleMute} className="text-white z-10">
                      {isMuted ? (
                        <i className="fa fa-volume-off text-xl mr-3 text-white"></i>
                      ) : (
                        <i className="fa fa-volume-up text-xl text-white"></i>
                      )}
                    </button>
                  )}

                  {IsInFavorites ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="cursor-pointer"
                      onClick={removeFromFavoriteHandler}
                    >
                      <path
                        fill="red"
                        d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="cursor-pointer"
                      onClick={() => {
                        addToFavoriteHandler();
                      }}
                    >
                      <path
                        fill="rgb(128, 139, 144)"
                        d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"
                      />
                    </svg>
                  )}
                </div>

                <img
                  src={ImageBaseUrl + SerieDetails.poster_path}
                  alt=""
                  className="h-52 xs:h-60 sm:h-96"
                />

                <div className="flex-1 sm:pl-6 md:pl-8 lg:pl-12 text-white py-2 mt-4 sm:mt-0">
                  {/* Genres & favorite */}
                  <div className="w-full flex justify-between items-center pr-4">
                    <div className="flex items-center space-x-3 text-gray-400 text-xs xs:text-sm font-light">
                      {SerieDetails.genres.map((genre) => (
                        <a className="hover:text-cyan duration-200" href="#">
                          {genre.name}
                        </a>
                      ))}
                    </div>

                    <div className="sm:flex hidden  items-center space-x-4">
                      {BackdropVideo && (
                        <button
                          onClick={toggleMute}
                          className="text-white z-10"
                        >
                          {isMuted ? (
                            <i className="fa fa-volume-off text-xl mr-3 text-white"></i>
                          ) : (
                            <i className="fa fa-volume-up text-xl text-white"></i>
                          )}
                        </button>
                      )}

                      {IsInFavorites ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="cursor-pointer"
                          onClick={removeFromFavoriteHandler}
                        >
                          <path
                            fill="red"
                            d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="cursor-pointer"
                          onClick={() => {
                            addToFavoriteHandler();
                          }}
                        >
                          <path
                            fill="rgb(128, 139, 144)"
                            d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="w-full text-lg xs:text-3xl lg:text-5xl font-bold max-w-4xl pt-4">
                    {SerieDetails.name}
                  </h1>

                  {/* Additional Details */}
                  <div className="text-sm xs:text-base w-full flex items-center justify-between pt-3 xs:pt-6 font-montserrat">
                    <div className="flex items-center space-x-3 text-slate-400">
                      <span>
                        {SerieDetails.first_air_date.length > 0 &&
                          SerieDetails.first_air_date.slice(0, 4)}
                        {SerieDetails.first_air_date.length > 0 &&
                          SerieDetails.last_air_date.length > 0 && (
                            <span>-</span>
                          )}
                        {SerieDetails.last_air_date.length > 0 &&
                          SerieDetails.last_air_date.slice(0, 4)}
                      </span>

                      {SerieDetails.number_of_seasons > 0 && (
                        <>
                          <span>|</span>
                          <span>
                            {SerieDetails.number_of_seasons + " Seasons"}
                          </span>
                        </>
                      )}

                      {SerieDetails.number_of_episodes > 0 && (
                        <>
                          <span>|</span>
                          <span>
                            {SerieDetails.number_of_episodes + " Episodes"}
                          </span>
                        </>
                      )}
                    </div>

                    <div className="flex xs:hidden items-center justify-between">
                      <svg
                        className="vodi-svg scale-50"
                        width="40px"
                        height="39px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 39"
                        fill="cyan"
                      >
                        <title>play</title>
                        <path
                          fill-rule="evenodd"
                          d="M19.633,-0.000 C21.509,0.035 21.530,1.174 22.167,2.414 C23.329,4.679 24.406,7.067 25.572,9.338 C25.853,9.886 26.431,11.640 26.918,11.834 C27.486,12.203 29.345,12.109 30.165,12.316 C32.170,12.825 34.489,12.860 36.500,13.364 C37.516,13.618 38.689,13.413 39.430,13.927 C39.689,14.107 39.770,14.504 39.984,14.732 C40.047,16.499 39.096,16.843 38.163,17.792 C36.473,19.509 34.784,21.227 33.095,22.944 C32.585,23.462 31.092,24.543 31.036,25.359 C31.423,25.951 31.307,27.455 31.511,28.258 C32.138,30.727 32.213,33.522 32.857,35.987 C33.142,37.078 33.016,38.241 32.303,38.724 C31.108,39.533 29.632,38.193 28.819,37.758 C26.695,36.623 24.601,35.624 22.483,34.457 C21.979,34.179 20.607,33.178 20.108,33.088 C19.748,33.023 18.163,34.107 17.812,34.296 C15.557,35.505 13.340,36.640 11.080,37.839 C10.548,38.120 9.180,39.226 8.309,38.966 C6.955,38.558 6.874,36.993 7.280,35.423 C7.716,33.733 7.697,31.880 8.151,30.109 C8.527,28.642 8.907,26.529 9.022,24.957 C8.092,24.344 7.202,23.107 6.408,22.300 C4.760,20.625 3.059,18.990 1.340,17.389 C0.646,16.742 -0.578,15.515 0.311,14.249 C0.915,13.388 2.364,13.656 3.557,13.364 C6.678,12.599 10.114,12.468 13.298,11.834 C14.186,9.747 15.306,7.711 16.307,5.716 C16.954,4.426 17.496,3.163 18.128,1.931 C18.334,1.531 18.358,1.093 18.603,0.724 C18.845,0.362 19.299,0.273 19.633,-0.000 Z"
                        ></path>
                      </svg>
                      <p className="text-xl font-bold">7.4</p>
                    </div>
                  </div>

                  {/* OverView */}
                  <p className="pt-4 text-gray-300 max-w-xl lg:max-w-4xl line-clamp-5">
                    {SerieDetails.overview}
                  </p>
                </div>
              </div>

              {/* Landing Actions */}
              <div className="w-full flex items-center py-0 sm:py-4 justify-between z-20">
                <div className="flex items-center space-x-4 w-full xs:w-auto font-montserrat z-20">
                  {IsInWatchList == undefined && authenticated ? (
                    <button
                      className="py-3 px-5 rounded-full text-white bg-cyan xs:w-auto w-1/2 xs:text-base text-xs"
                      disabled
                    >
                      loading...
                    </button>
                  ) : IsInWatchList ? (
                    <button
                      className="py-3 px-5 rounded-full text-white bg-cyan xs:w-auto w-1/2 xs:text-base text-xs"
                      onClick={removeFromWatchListHandler}
                    >
                      delete in WatchList
                    </button>
                  ) : (
                    <button
                      className="py-3 px-5 rounded-full text-white bg-cyan xs:w-auto w-1/2 xs:text-base text-xs"
                      onClick={addToWatchListHandler}
                    >
                      + WatchList
                    </button>
                  )}
                </div>

                {/* Votes */}
                <div className="hidden xs:flex items-center w-28 justify-end z-20">
                  <svg
                    className="vodi-svg scale-75 cursor-pointer"
                    width="40px"
                    height="39px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 39"
                    fill="cyan"
                    onClick={() => {
                      if (authenticated) setVoteModal(true);
                      else alert("Login Please");
                    }}
                  >
                    <title>play</title>
                    <path
                      fill-rule="evenodd"
                      d="M19.633,-0.000 C21.509,0.035 21.530,1.174 22.167,2.414 C23.329,4.679 24.406,7.067 25.572,9.338 C25.853,9.886 26.431,11.640 26.918,11.834 C27.486,12.203 29.345,12.109 30.165,12.316 C32.170,12.825 34.489,12.860 36.500,13.364 C37.516,13.618 38.689,13.413 39.430,13.927 C39.689,14.107 39.770,14.504 39.984,14.732 C40.047,16.499 39.096,16.843 38.163,17.792 C36.473,19.509 34.784,21.227 33.095,22.944 C32.585,23.462 31.092,24.543 31.036,25.359 C31.423,25.951 31.307,27.455 31.511,28.258 C32.138,30.727 32.213,33.522 32.857,35.987 C33.142,37.078 33.016,38.241 32.303,38.724 C31.108,39.533 29.632,38.193 28.819,37.758 C26.695,36.623 24.601,35.624 22.483,34.457 C21.979,34.179 20.607,33.178 20.108,33.088 C19.748,33.023 18.163,34.107 17.812,34.296 C15.557,35.505 13.340,36.640 11.080,37.839 C10.548,38.120 9.180,39.226 8.309,38.966 C6.955,38.558 6.874,36.993 7.280,35.423 C7.716,33.733 7.697,31.880 8.151,30.109 C8.527,28.642 8.907,26.529 9.022,24.957 C8.092,24.344 7.202,23.107 6.408,22.300 C4.760,20.625 3.059,18.990 1.340,17.389 C0.646,16.742 -0.578,15.515 0.311,14.249 C0.915,13.388 2.364,13.656 3.557,13.364 C6.678,12.599 10.114,12.468 13.298,11.834 C14.186,9.747 15.306,7.711 16.307,5.716 C16.954,4.426 17.496,3.163 18.128,1.931 C18.334,1.531 18.358,1.093 18.603,0.724 C18.845,0.362 19.299,0.273 19.633,-0.000 Z"
                    ></path>
                  </svg>
                  <div className=" text-white flex flex-col text-center">
                    <p className="text-xl font-bold">
                      {SerieDetails.vote_average.toFixed(1)}
                    </p>
                    <p className="text-[10px]">
                      {SerieDetails.vote_count.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {BackdropVideo && BackdropVideo.key && (
              <BackDrop
                videoKey={BackdropVideo.key}
                onReady={onReady}
                onStateChange={onStateChange}
                isLoading={LoadingBackdrop}
              />
            )}

            {/* Loading backDrop Tumbnail */}
            <div
              className={`w-full h-full absolute top-0 z-10 bg-cover bg-center ${
                LoadingBackdrop ? "block" : "hidden"
              }`}
              style={{
                backgroundImage: `url(${
                  ImageBaseUrl + SerieDetails.backdrop_path
                })`,
              }}
            >
              <div className="overlay"></div>{" "}
            </div>
          </div>

          {/* Movie Details */}
          <div className="w-full py-8 bg-[#131722]">
            <div className="container mx-auto flex flex-col md:flex-row px-4">
              <div className="w-full md:w-1/2 text-white font-montserrat">
                {/* Countries */}
                {SerieDetails &&
                  SerieDetails.production_countries &&
                  SerieDetails.production_countries.length > 0 && (
                    <div className="w-full flex flex-wrap items-center py-2">
                      <h3 className="font-bold mr-2 xs:text-base text-sm">
                        Countries :
                      </h3>
                      {SerieDetails &&
                        SerieDetails.production_countries &&
                        SerieDetails.production_countries.map((country) => (
                          <span className="xs:text-sm text-xs mr-2">
                            {country.name}
                          </span>
                        ))}
                    </div>
                  )}

                {/* Companies */}
                {SerieDetails &&
                  SerieDetails.production_companies &&
                  SerieDetails.production_companies.length > 0 && (
                    <div className="w-full flex flex-wrap items-center py-2">
                      <h3 className="font-bold mr-2 xs:text-base text-sm">
                        Companies :
                      </h3>
                      {SerieDetails &&
                        SerieDetails.production_companies &&
                        SerieDetails.production_companies.map((company) => (
                          <a
                            className="text-sm mr-2 my-1 px-3 space-x-2 flex items-center py-2 rounded-full bg-gray-500"
                            href="#"
                          >
                            {company.logo_path && (
                              <img
                                src={ImageLowQualityUrl + company.logo_path}
                                alt=""
                                className="h-3"
                              />
                            )}

                            <span className="xs:text-xs text-xs">
                              {company.name}
                            </span>
                          </a>
                        ))}
                    </div>
                  )}

                {/* Crews */}
                {SerieCrews &&
                  SerieCrews.cast.length > 0 &&
                  SerieCrews.cast[0].profile_path && (
                    <div className="w-full py-2">
                      <h3 className="font-bold mr-2 xs:text-base text-sm">
                        Casts :
                      </h3>
                      <div className="w-full flex items-center justify-start flex-wrap py-1 md:pr-4">
                        {SerieCrews.cast.slice(0, CastsRow).map(
                          (crew) =>
                            crew.profile_path && (
                              <a
                                className="text-sm mr-4 my-1 space-x-4 flex items-center"
                                href={"/cast/" + crew.id}
                              >
                                <img
                                  src={ImageLowQualityUrl + crew.profile_path}
                                  alt=""
                                  className="rounded-lg h-16 sm:h-20 lg:h-28"
                                />
                              </a>
                            )
                        )}
                      </div>
                    </div>
                  )}
              </div>

              {SerieVideos && (
                <div className="w-full md:w-1/2 text-white md:my-0 my-5">
                  <CustomLightBox allSlides={SerieVideos} />
                </div>
              )}
            </div>
          </div>

          {/* Recommand */}
          {RecommandSeries &&
            RecommandSeries.results &&
            RecommandSeries.results.length > 0 && (
              <div className="w-full bg-[#0e0d12] xs:pt-0 pt-6">
                <div className="container mx-auto">
                  <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
                    <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
                      We Recommanded
                    </h2>
                    <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
                  </div>

                  <SeriesSwiper series={RecommandSeries} low />
                </div>
              </div>
            )}

          {/* Images */}
          {SerieImages && SerieImages.backdrops.length > 0 && (
            <div className="w-full py-12 bg-[#131722]">
              <div className="container mx-auto px-4">
                <div className="w-full flex pb-6 flex-col xs:flex-row  items-center justify-between text-white">
                  <h2 className="text-2xl xs:mb-0 font-semibold">Images</h2>

                  <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>

                  <button
                    className="hover:text-cyan duration-200 hidden xs:block"
                    onClick={() => {
                      setShowImagesLightbox(true);
                    }}
                  >
                    More
                  </button>
                </div>
                <div className="w-full grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 gap-3 flex-wrap">
                  {SerieImages.backdrops.slice(0, 4).map((image, index) => (
                    <button
                      className="w-full"
                      onClick={() => {
                        setShowImagesLightbox(true);
                        setCurrentSlide(index);
                      }}
                    >
                      <img
                        src={ImageLowQualityUrl + image.file_path}
                        className="w-full"
                      ></img>
                    </button>
                  ))}
                </div>
              </div>
              <Lightbox
                open={showImagesLightbox}
                index={currentSlide}
                close={() => setShowImagesLightbox(false)}
                slides={SerieImages.backdrops}
                plugins={[Counter]}
                swipe={{ distance: 50, velocity: 0.5 }}
                counter={{
                  container: { style: { top: 0, left: 0, display: "inline" } },
                }}
                render={{
                  slide: (slide) => {
                    return (
                      <>
                        <div className="w-full h-full flex items-center">
                          <img
                            draggable={false}
                            src={ImageBaseUrl + slide.slide.file_path}
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </>
                    );
                  },
                }}
                carousel={{ finite: true }}
                on={{
                  view: ({ index }) => {
                    setCurrentSlide(index);
                  },
                }}
              />
            </div>
          )}

          {/* episodes */}
          <EpisodeSection
            SerieDetails={SerieDetails}
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            SerieSeason={SerieSeason}
            loading={loading}
            params={params}
          />

          {/* Reviews */}
          {SerieReviews && SerieReviews.results.length > 0 && (
            <div className="w-full bg-[#0e0d12] text-white">
              <div className="container mx-auto py-4 px-4">
                <div className="w-full flex  flex-col xs:flex-row  items-center justify-between text-white">
                  <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
                    Reviews
                  </h2>
                  <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
                </div>

                <div className="w-full relative">
                  <div className="w-full md:grid-cols-1 grid-cols-1 grid gap-3">
                    {SerieReviews.results.map((review, index) => (
                      <div
                        className={`w-full  rounded-xl p-4 ${
                          index == expandReview
                            ? "bg-[#222632]"
                            : "bg-[#131722]"
                        } duration-500`}
                      >
                        {/* Review Header */}
                        <div className="w-full flex items-center justify-between">
                          {/* Review Title */}
                          <div className="flex items-center">
                            <Avatar sx={{ width: 32, height: 32 }}>H</Avatar>
                            <div className="ml-3 font-montserrat">
                              <p className="text-sm text-left">
                                {review.author}
                              </p>
                              <p className="text-xs text-gray-500 text-left">
                                {review.created_at.slice(0, 10)}
                              </p>
                            </div>
                          </div>

                          {/* Review Vote */}
                          <div className="flex items-center space-x-3">
                            {review.author_details.rating && (
                              <div className="hidden xs:flex items-center justify-end z-20">
                                <svg
                                  className="vodi-svg scale-50"
                                  width="40px"
                                  height="39px"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 40 39"
                                  fill="cyan"
                                >
                                  <title>play</title>
                                  <path
                                    fill-rule="evenodd"
                                    d="M19.633,-0.000 C21.509,0.035 21.530,1.174 22.167,2.414 C23.329,4.679 24.406,7.067 25.572,9.338 C25.853,9.886 26.431,11.640 26.918,11.834 C27.486,12.203 29.345,12.109 30.165,12.316 C32.170,12.825 34.489,12.860 36.500,13.364 C37.516,13.618 38.689,13.413 39.430,13.927 C39.689,14.107 39.770,14.504 39.984,14.732 C40.047,16.499 39.096,16.843 38.163,17.792 C36.473,19.509 34.784,21.227 33.095,22.944 C32.585,23.462 31.092,24.543 31.036,25.359 C31.423,25.951 31.307,27.455 31.511,28.258 C32.138,30.727 32.213,33.522 32.857,35.987 C33.142,37.078 33.016,38.241 32.303,38.724 C31.108,39.533 29.632,38.193 28.819,37.758 C26.695,36.623 24.601,35.624 22.483,34.457 C21.979,34.179 20.607,33.178 20.108,33.088 C19.748,33.023 18.163,34.107 17.812,34.296 C15.557,35.505 13.340,36.640 11.080,37.839 C10.548,38.120 9.180,39.226 8.309,38.966 C6.955,38.558 6.874,36.993 7.280,35.423 C7.716,33.733 7.697,31.880 8.151,30.109 C8.527,28.642 8.907,26.529 9.022,24.957 C8.092,24.344 7.202,23.107 6.408,22.300 C4.760,20.625 3.059,18.990 1.340,17.389 C0.646,16.742 -0.578,15.515 0.311,14.249 C0.915,13.388 2.364,13.656 3.557,13.364 C6.678,12.599 10.114,12.468 13.298,11.834 C14.186,9.747 15.306,7.711 16.307,5.716 C16.954,4.426 17.496,3.163 18.128,1.931 C18.334,1.531 18.358,1.093 18.603,0.724 C18.845,0.362 19.299,0.273 19.633,-0.000 Z"
                                  ></path>
                                </svg>

                                <div className=" text-white flex flex-col text-center">
                                  <p className="text-xl font-bold">
                                    {review.author_details.rating}
                                  </p>
                                </div>
                              </div>
                            )}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="12"
                              className={`scale-75 ${
                                expandReview != index && "rotate-180"
                              } cursor-pointer duration-200`}
                              onClick={() => {
                                if (index != expandReview) {
                                  setExpandReview(index);
                                } else {
                                  setExpandReview(-1);
                                }
                              }}
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

                        {/* Review Body */}
                        <div
                          className={`w-full ${
                            index != expandReview &&
                            "line-clamp-2 sm:line-clamp-1"
                          } mt-4 text-left text-gray-300`}
                        >
                          {review.content}
                        </div>
                      </div>
                    ))}
                  </div>

                  {SerieReviews && SerieReviews.total_pages > 1 && (
                    <div className="w-full">
                      <Pagination
                        count={SerieReviews.total_pages}
                        id="reviews-pagination"
                        size="large"
                        page={reviewsPage}
                        onChange={reviewsPageChange}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <Modal
            open={voteModal}
            onClose={() => setVoteModal(false)}
            sx={{ zIndex: 20 }}
          >
            <Box sx={{ ...voteModalStyle, p: 4 }}>
              <div className="h-full text-white font-montserrat sm:w-96 w-[280px] flex flex-col items-start">
                <div className="flex w-full justify-between items-center">
                  <h2 className="text-2xl">Rating</h2>

                  <div className="flex items-center w-28 justify-end  z-20">
                    <svg
                      className="vodi-svg scale-75 cursor-pointer"
                      width="40px"
                      height="39px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 40 39"
                      fill="cyan"
                      onClick={() => setVoteModal(true)}
                    >
                      <title>play</title>
                      <path
                        fill-rule="evenodd"
                        d="M19.633,-0.000 C21.509,0.035 21.530,1.174 22.167,2.414 C23.329,4.679 24.406,7.067 25.572,9.338 C25.853,9.886 26.431,11.640 26.918,11.834 C27.486,12.203 29.345,12.109 30.165,12.316 C32.170,12.825 34.489,12.860 36.500,13.364 C37.516,13.618 38.689,13.413 39.430,13.927 C39.689,14.107 39.770,14.504 39.984,14.732 C40.047,16.499 39.096,16.843 38.163,17.792 C36.473,19.509 34.784,21.227 33.095,22.944 C32.585,23.462 31.092,24.543 31.036,25.359 C31.423,25.951 31.307,27.455 31.511,28.258 C32.138,30.727 32.213,33.522 32.857,35.987 C33.142,37.078 33.016,38.241 32.303,38.724 C31.108,39.533 29.632,38.193 28.819,37.758 C26.695,36.623 24.601,35.624 22.483,34.457 C21.979,34.179 20.607,33.178 20.108,33.088 C19.748,33.023 18.163,34.107 17.812,34.296 C15.557,35.505 13.340,36.640 11.080,37.839 C10.548,38.120 9.180,39.226 8.309,38.966 C6.955,38.558 6.874,36.993 7.280,35.423 C7.716,33.733 7.697,31.880 8.151,30.109 C8.527,28.642 8.907,26.529 9.022,24.957 C8.092,24.344 7.202,23.107 6.408,22.300 C4.760,20.625 3.059,18.990 1.340,17.389 C0.646,16.742 -0.578,15.515 0.311,14.249 C0.915,13.388 2.364,13.656 3.557,13.364 C6.678,12.599 10.114,12.468 13.298,11.834 C14.186,9.747 15.306,7.711 16.307,5.716 C16.954,4.426 17.496,3.163 18.128,1.931 C18.334,1.531 18.358,1.093 18.603,0.724 C18.845,0.362 19.299,0.273 19.633,-0.000 Z"
                      ></path>
                    </svg>

                    <p className="text-xl font-bold">
                      {SerieDetails.vote_average.toFixed(1)}
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs mt-4">
                  What did you think of{" "}
                  <span className="font-bold">{SerieDetails.name}</span>?
                </p>

                <Slider
                  defaultValue={0}
                  value={vote ? vote : 0}
                  valueLabelDisplay="auto"
                  shiftStep={3}
                  step={1}
                  marks
                  min={0}
                  max={10}
                  className="mt-5"
                  sx={{ color: "#24baef" }}
                  onChange={(e) => setVote(e.target.value)}
                />

                <div
                  className={`w-full flex ${
                    IsInRated != undefined ? "justify-between" : "justify-end"
                  } items-center`}
                >
                  {IsInRated != undefined && <h2>Your vote : {IsInRated}</h2>}
                  <button
                    className="bg-cyan rounded-lg p-2 mt-5 self-end"
                    onClick={ratingHandler}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Box>
          </Modal>
        </>
      )}

      {loading && (
        <>
          <div className="w-full h-dvh">
            <FullScreenLoader />
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
