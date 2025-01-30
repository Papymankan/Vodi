import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { Avatar, Box, Modal } from "@mui/material";
import { useSelector } from "react-redux";
import MoviesSwiper from "../../Components/MoviesSwiper/MoviesSwiper";
import SeriesSwiper from "../../Components/SeriesSwiper/SeriesSwiper";
import CloseIcon from "@mui/icons-material/Close";
import { ApiKey, BaseUrl } from "../../Redux/FetchConfigs";
import Store from "../../Redux/Store";
import { DeleteList, fetchLists } from "../../Redux/Reducers/Movies";
import FullScreenLoader from "../../Components/FullScreenLoader/FullScreenLoader";

export default function Login() {
  const [DeleteListModal, setDeleteListModal] = useState(false);
  const [DeleteListId, setDeleteListId] = useState(0);

  const AccountDetail = useSelector((state) => state.Auth.AccountDetail);

  const WatchListMovies = useSelector((state) => state.Movies.WatchListMovies);
  const WatchListSeries = useSelector((state) => state.Series.WatchListSeries);

  const FavoriteMovies = useSelector((state) => state.Movies.FavoriteMovies);
  const FavoriteSeries = useSelector((state) => state.Series.FavoriteSeries);

  const RatedMovies = useSelector((state) => state.Movies.RatedMovies);
  const RatedSeries = useSelector((state) => state.Series.RatedSeries);

  const MovieLists = useSelector((state) => state.Movies.MovieLists);

  const fullScreenLoading = useSelector(
    (state) => state.Movies.fullScreenLoading
  );

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

  const deleteListHandler = () => {
    setDeleteListModal(false);
    Store.dispatch(
      DeleteList({ listId: DeleteListId, accountId: AccountDetail.id })
    );
  };

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

                <p className="mt-2 sm:text-xl text-base text-cyan">
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
                  Your Movie Lists
                </h2>
                <div className="flex-1 border-t-2 border-[#394253] mx-4 hidden xs:block"></div>
              </div>

              <div className="w-full grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4">
                {MovieLists &&
                  MovieLists.results.length > 0 &&
                  MovieLists.results.map((list) => (
                    <>
                      <a
                        href={"/list/" + list.id}
                        className="relative w-full xs:p-3 p-2 rounded-md bg-[#bdbdbd] text-white hover:bg-[#aaaaaa] duration-200 cursor-pointer"
                      >
                        <h2 className="sm:text-xl text-base font-bold">
                          {list.name}
                        </h2>
                        <h3 className="text-xs">{list.item_count} Movies</h3>
                        <p className="text font-montserrat line-clamp-2 lg:text-sm text-xs my-3">
                          {list.description}
                        </p>

                        <button
                          className="absolute top-2 right-2 p-1 rounded-full bg-[#aaaaaa] flex justify-center items-center"
                          onClick={(e) => {
                            e.preventDefault();
                            setDeleteListModal(true);
                            setDeleteListId(list.id);
                          }}
                        >
                          <CloseIcon />
                        </button>
                      </a>
                    </>
                  ))}
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

      <Modal
        open={DeleteListModal}
        onClose={() => setDeleteListModal(false)}
        sx={{ zIndex: 20 }}
      >
        <Box sx={{ ...voteModalStyle, p: 4 }}>
          <div className="w-96">
            <h2 className="text-white text-xl font-bold">
              Are You Sure You Want to Delete a Movie List ?
            </h2>
            <div className="w-full flex items-center space-x-2 mt-3">
              <button
                className="font-montserrat p-2 rounded-md bg-red-600 text-sm text-white"
                onClick={() => deleteListHandler()}
              >
                Delete
              </button>
              <button
                className="font-montserrat p-2 rounded-md bg-slate-500 text-sm text-white"
                onClick={() => setDeleteListModal(false)}
              >
                Cancle
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      {fullScreenLoading && <FullScreenLoader />}
    </>
  );
}
