import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import Store from "../../Redux/Store";
import {
  FetchCastDetail,
  FetchCastImages,
  FetchCastMovieCredits,
} from "../../Redux/Reducers/Movies";
import { useSelector } from "react-redux";
import { ImageBaseUrl, ImageLowQualityUrl } from "../../Redux/FetchConfigs";
import { shuffleArray } from "../../Funcs";
import MoviesSwiper from "../../Components/MoviesSwiper/MoviesSwiper";
import SeriesSwiper from "../../Components/SeriesSwiper/SeriesSwiper";
import Loader from "../../Components/Loader/Loader";
import { FetchCastSerieCredits } from "../../Redux/Reducers/Series";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

export default function CastDetail() {
  const [castMoviesList, setCastMoviesList] = useState({ results: [] });
  const [castSeriesList, setCastSeriesList] = useState({ results: [] });
  const [showImagesLightbox, setShowImagesLightbox] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const params = useParams();

  const CastDetail = useSelector((state) => state.Movies.CastDetail);
  const CastMovies = useSelector((state) => state.Movies.CastMovies);
  const CastSeries = useSelector((state) => state.Series.CastSeries);
  const CastImages = useSelector((state) => state.Movies.CastImages);

  console.log(CastSeries);

  useEffect(() => {
    if (params.id) {
      Store.dispatch(FetchCastDetail({ castId: params.id }));
      Store.dispatch(FetchCastMovieCredits({ castId: params.id }));
      Store.dispatch(FetchCastSerieCredits({ castId: params.id }));
      Store.dispatch(FetchCastImages({ castId: params.id }));
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
                {CastDetail.known_for_department && (
                  <p className="my-3 sm:text-base text-sm">
                    Known For :{" "}
                    <span className="font-montserrat">
                      {CastDetail.known_for_department}
                    </span>
                  </p>
                )}

                {CastDetail.birthday && (
                  <p className="my-3 sm:text-base text-sm">
                    Birthday :{" "}
                    <span className="font-montserrat">
                      {CastDetail.birthday}
                    </span>
                  </p>
                )}

                {CastDetail.place_of_birth && (
                  <p className="my-3 sm:text-base text-sm">
                    BirthPlace :{" "}
                    <span className="font-montserrat">
                      {CastDetail.place_of_birth}
                    </span>
                  </p>
                )}
              </div>
            </div>

            <div className="p-4 text-white text-sm">{CastDetail.biography}</div>
          </div>

          {castMoviesList &&
            castMoviesList.results &&
            castMoviesList.results.length > 0 && (
              <div className="w-full bg-[#0e0d12] xs:pt-0 py-6">
                <div className="container mx-auto">
                  <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
                    <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
                      {CastDetail.name} Movies
                    </h2>
                    <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
                  </div>

                  <MoviesSwiper movies={castMoviesList} low />

                </div>
              </div>
            )}

          {CastImages && CastImages.profiles.length > 0 && (
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
                <div className="w-full grid md:grid-cols-6 md:grid-rows-1 grid-cols-3 grid-rows-2 gap-3 flex-wrap">
                  {CastImages.profiles.slice(0, 6).map((image, index) => (
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
                slides={CastImages.profiles}
                plugins={[Counter]}
                swipe={{ distance: 50, velocity: 0.5 }}
                counter={{
                  container: { style: { top: 0, left: 0, display: "inline" } },
                }}
                render={{
                  slide: (slide) => {
                    return (
                      <>
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            draggable={false}
                            src={ImageBaseUrl + slide.slide.file_path}
                            alt=""
                            className="h-full"
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

          {castSeriesList &&
            castSeriesList.results &&
            castSeriesList.results.length > 0 && (
              <div className="w-full bg-[#0e0d12] xs:pt-0 py-6">
                <div className="container mx-auto">
                  <div className="w-full flex  flex-col xs:flex-row  items-center justify-between px-4 text-white">
                    <h2 className="text-2xl xs:py-7 mb-8 xs:mb-0 font-semibold">
                      {CastDetail.name} Series
                    </h2>
                    <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
                  </div>

                  <SeriesSwiper series={castSeriesList} low />

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
