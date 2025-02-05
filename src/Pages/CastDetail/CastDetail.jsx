import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import Store from "../../Redux/Store";
import {
  FetchCastDetail,
  FetchCastMovieCredits,
} from "../../Redux/Reducers/Movies";
import { useSelector } from "react-redux";
import { ImageBaseUrl } from "../../Redux/FetchConfigs";
import { shuffleArray } from "../../Funcs";
import MoviesSwiper from "../../Components/MoviesSwiper/MoviesSwiper";
import SeriesSwiper from "../../Components/SeriesSwiper/SeriesSwiper";
import Loader from "../../Components/Loader/Loader";
import { FetchCastSerieCredits } from "../../Redux/Reducers/Series";

export default function CastDetail() {
  const [castMoviesList, setCastMoviesList] = useState({ results: [] });
  const [castSeriesList, setCastSeriesList] = useState({ results: [] });

  const params = useParams();

  const CastDetail = useSelector((state) => state.Movies.CastDetail);
  const CastMovies = useSelector((state) => state.Movies.CastMovies);
  const CastSeries = useSelector((state) => state.Series.CastSeries);

  console.log(CastSeries);

  useEffect(() => {
    if (params.id) {
      Store.dispatch(FetchCastDetail({ castId: params.id }));
      Store.dispatch(FetchCastMovieCredits({ castId: params.id }));
      Store.dispatch(FetchCastSerieCredits({ castId: params.id }));
    }
  }, [params]);

  useEffect(() => {
    if (CastMovies) {
      let arr = [];
      let arr2 = [];
      arr = shuffleArray(CastMovies.cast);

      for (let i = 0; arr2.length <= 20 && i < arr.length; i++) {
        if (arr[i].backdrop_path) {
          arr2.push(arr[i]);
        }
        console.log("pushed");
      }

      setCastMoviesList({ results: arr2 });
    }
  }, [CastMovies]);

  useEffect(() => {
    if (CastSeries) {
      let arr = [];
      let arr2 = [];
      arr = shuffleArray(CastSeries.cast);

      for (let i = 0; arr2.length <= 20 && i < arr.length; i++) {
        if (arr[i].backdrop_path) {
          arr2.push(arr[i]);
        }
        console.log("pushed");
      }

      setCastSeriesList({ results: arr2 });
    }
  }, [CastSeries]);

  return (
    <>
      <NavBar />

      {CastDetail ? (
        <>
          <div className="container mx-auto">
            <div className="w-full flex">
              <div className="sm:p-4 p-2">
                <img
                  src={ImageBaseUrl + CastDetail.profile_path}
                  alt=""
                  className="sm:w-44 sm:h-64  w-36 h-52"
                />
              </div>
              <div className="flex-1 sm:p-4 p-2 text-white">
                <h1 className="sm:text-5xl text-3xl">{CastDetail.name}</h1>
                <p className="my-3 sm:text-base text-sm">
                  Gender :{" "}
                  <span className="font-montserrat">
                    {CastDetail.gender == 2 ? "Male" : "Female"}
                  </span>
                </p>
                <p className="my-3 sm:text-base text-sm">
                  Known For :{" "}
                  <span className="font-montserrat">
                    {CastDetail.known_for_department}
                  </span>
                </p>
                <p className="my-3 sm:text-base text-sm">
                  Birthday :{" "}
                  <span className="font-montserrat">{CastDetail.birthday}</span>
                </p>
                <p className="my-3 sm:text-base text-sm">
                  BirthPlace :{" "}
                  <span className="font-montserrat">
                    {CastDetail.place_of_birth}
                  </span>
                </p>
              </div>
            </div>

            <div className="p-4 text-white text-sm">{CastDetail.biography}</div>
          </div>

          {castMoviesList &&
            castMoviesList.results &&
            castMoviesList.results.length > 0 && (
              <div className="w-full bg-[#0e0d12] xs:pt-0 pt-6">
                <div className="container mx-auto">
                  <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
                    <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
                      {CastDetail.name} Movies
                    </h2>
                    <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
                  </div>

                  <MoviesSwiper movies={castMoviesList} low />

                  <div className="border-t-2 border-[#394253] text-end text-white py-3 mt-4 font-montserrat text-sm mx-4">
                    <a href="#" className="hover:text-cyan duration-200">
                      VIEW ALL
                    </a>
                  </div>
                </div>
              </div>
            )}

          {castSeriesList &&
            castSeriesList.results &&
            castSeriesList.results.length > 0 && (
              <div className="w-full bg-[#0e0d12] xs:pt-0 pt-6">
                <div className="container mx-auto">
                  <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
                    <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
                      {CastDetail.name} Series
                    </h2>
                    <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
                  </div>

                  <SeriesSwiper series={castSeriesList} low />

                  <div className="border-t-2 border-[#394253] text-end text-white py-3 mt-4 font-montserrat text-sm mx-4">
                    <a href="#" className="hover:text-cyan duration-200">
                      VIEW ALL
                    </a>
                  </div>
                </div>
              </div>
            )}
        </>
      ) : (
        <div className="h-svh">
          <Loader />
        </div>
      )}

      <Footer />
    </>
  );
}
