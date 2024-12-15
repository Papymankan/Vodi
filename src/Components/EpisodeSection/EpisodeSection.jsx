import React from "react";
import Loader from "../Loader/Loader";

export default function EpisodeSection({
  SerieDetails,
  selectedSeason,
  setSelectedSeason,
  SerieSeason,
  loading,
  params,
}) {
  return (
    <>
      {SerieSeason &&
        SerieSeason.episodes &&
        SerieSeason.episodes.length > 0 && (
          <div className="w-full bg-[#0e0d12] pt-6">
            <div className="container mx-auto px-4">
              {/* Seasons Row */}

              <div className="w-full flex items-center py-3 font-montserrat text-white flex-wrap border-b border-[#394253]">
                {SerieDetails.seasons.map((season) => {
                  if (season.season_number != 0) {
                    return (
                      <button
                        className={`xs:p-3 p-2 text-xs mr-2 mb-2 rounded-lg ${
                          season.season_number == selectedSeason
                            ? "bg-cyan"
                            : "bg-gray-600"
                        }`}
                        onClick={() => {
                          setSelectedSeason(season.season_number);
                        }}
                      >
                        {season.name}
                      </button>
                    );
                  }
                })}
              </div>

              {/* episodes row */}
              {!loading ? (
                <div className="w-full py-3 space-y-2">
                  {SerieSeason.episodes.map((episode) => (
                    <div className="w-full rounded-xl p-1.5 sm:p-3 bg-[#222632] flex items-center">
                      <img
                        src={
                          episode.still_path
                            ? "https://image.tmdb.org/t/p/w300" +
                              episode.still_path
                            : "/img/istockphoto-1409329028-612x612.jpg"
                        }
                        alt=""
                        className="sm:h-44 sm:w-80 xs:w-52 w-40 rounded-xl episode-img"
                      />

                      <div className="flex-1 sm:ml-6 ml-3 sm:h-44 h-full flex flex-col justify-between">
                        <div className="w-full">
                          <div className="w-full flex items-center justify-between font-montserrat">
                            {/* episode title */}
                            <div className="flex items-center">
                              <span className="sm:w-8 sm:h-8 w-5 h-5 sm:text-base text-xs rounded-full bg-[#131722] flex items-center justify-center text-white sm:mr-3 mr-1">
                                {episode.episode_number}
                              </span>
                              <h2 className="sm:text-xl xs:text-sm text-[12px] text-white font-semibold line-clamp-1 sm:line-clamp-none">
                                {episode.name}
                              </h2>
                            </div>

                            {/* episode vote */}
                            <div className="xs:flex hidden items-center">
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

                              <p className="sm:text-lg text-sm font-semibold text-white">
                                {episode.vote_average &&
                                  episode.vote_average.toFixed(1)}
                              </p>
                            </div>
                          </div>

                          <p className="xs:text-xs text-[9px]  text-gray-400 sm:mt-3 sm:line-clamp-3 line-clamp-2">
                            {episode.overview}
                          </p>
                        </div>

                        <div className="w-full flex flex-row-reverse items-center xs:flex-row mt-2 xs:justify-start justify-between ">
                          <a
                            href={
                              `/serie/` +
                              params.id +
                              "/" +
                              SerieSeason.season_number +
                              "/" +
                              episode.episode_number
                            }
                            className="px-2 hidden xs:flex items-center sm:px-4 text-center text-[10px] sm:text-xs py-1 xs:py-2 bg-cyan text-white rounded-md hover:opacity-60 duration-200"
                          >
                            Explore
                          </a>

                          <button
                            className="px-2 hidden xs:flex items-center sm:px-4 text-center text-[10px] sm:text-xs py-1 xs:py-2 border border-cyan text-cyan 
                    rounded-md hover:bg-cyan hover:text-white duration-200 ml-2"
                          >
                            + WatchList
                          </button>

                          <button className="px-2 hidden xs:flex items-center sm:px-4 text-center text-[10px] sm:text-xs py-1 xs:py-2 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-white duration-200 ml-2">
                            + My Lists
                          </button>

                          <a
                            href={
                              `/serie/` +
                              params.id +
                              "/" +
                              SerieSeason.season_number +
                              "/" +
                              episode.episode_number
                            }
                            className="flex xs:hidden text-cyan text-[10px] font-montserrat"
                          >
                            Explore
                          </a>

                          {/* episode vote */}
                          <div className="xs:hidden flex items-center">
                            <svg
                              className="vodi-svg scale-50"
                              width="25px"
                              height="25px"
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

                            <p className="sm:text-lg xs:text-sm text-xs font-semibold text-white">
                              {episode.vote_average &&
                                episode.vote_average.toFixed(1)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-svh flex items-center justify-center">
                  <Loader />
                </div>
              )}
            </div>
          </div>
        )}
    </>
  );
}
