import React from "react";
import NavBar from "../../Components/NavBar/NavBar";

export default function MovieDetail() {
  return (
    <>
      <NavBar />
      <div className="w-full bg-[#131722] movie-detail-landing">
        <div className="container mx-auto px-4">
          {/* BreadCrumb */}
          <div className="w-full  text-xs xs:text-base flex items-center text-gray-500 py-4 font-montserrat">
            <a href="#" className="hover:text-cyan duration-200">
              Home
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
              className="scale-50 mt-1 -rotate-90"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
            <a href="#" className="hover:text-cyan duration-200">
              Movies
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
              className="scale-50 mt-1 -rotate-90"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
            <a href="#" className="hover:text-cyan duration-200 text-white">
              Inception
            </a>
          </div>

          {/* Landing Details */}
          <div className="w-full my-3 md:my-6 flex items-start sm:flex-row flex-col relative sm:h-96">
            <div className="sm:hidden block absolute top-0 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="red"
                  d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
                />
              </svg>

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="rgb(128, 139, 144)"
                  d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"
                />
              </svg> */}
            </div>

            <img
              src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/33-a-woman-under-the-influence-300x450.jpg"
              alt=""
              className="h-52 xs:h-60 sm:h-96"
            />

            <div className="flex-1 sm:pl-6 md:pl-8 lg:pl-12 text-white py-2 mt-4 sm:mt-0">
              {/* Genres & favorite */}
              <div className="w-full flex justify-between items-center pr-4">
                <div className="flex items-center space-x-3 text-gray-400 text-xs xs:text-sm font-light">
                  <a className="hover:text-cyan duration-200" href="#">
                    Drama
                  </a>
                  <a className="hover:text-cyan duration-200" href="#">
                    Action
                  </a>
                  <a className="hover:text-cyan duration-200" href="#">
                    Sci-fic
                  </a>
                </div>

                <div className="sm:block hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="red"
                      d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
                    />
                  </svg>

                  {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  
                >
                  <path
                  fill="rgb(128, 139, 144)"
                  d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" />
                </svg> */}
                </div>
              </div>

              <h1 className="w-full text-lg xs:text-3xl lg:text-5xl font-bold max-w-4xl pt-4">
                Harry Potter and the Philosopher's Stone Harry Potter and the
                Philosopher's Stone
              </h1>

              <div className="text-sm xs:text-base w-full flex items-center justify-between pt-3 xs:pt-6 font-montserrat">
                <div className="flex items-center space-x-3 text-slate-400">
                  <span>2013</span>
                  <span>|</span>
                  <span>1h 48min</span>
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

              <p className="pt-4 text-gray-300 max-w-xl lg:max-w-4xl line-clamp-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                pariatur eveniet molestiae modi suscipit eligendi eius enim
                itaque saepe nisi, quae minima aliquid ipsam aperiam placeat,
                beatae corrupti voluptate, alias optio id ad non ratione.
                Tempore praesentium facilis officiis optio facere, excepturi
                consectetur harum asperiores veritatis fugiat beatae maiores
                iste consequatur fugit. Ea numquam veritatis quasi, explicabo
                placeat modi suscipit veniam nulla alias nesciunt reprehenderit,
                aliquam laudantium corrupti soluta quas!
              </p>
            </div>
          </div>

          <div className="w-full flex items-center py-0 sm:py-4 justify-between">
            <div className="flex items-center space-x-4 w-full xs:w-auto">
              <button className="py-3 px-5 rounded-full text-white bg-cyan xs:w-auto w-1/2">
                + WatchList
              </button>
              <button className="py-3 px-5 rounded-full text-white bg-green-400 xs:w-auto w-1/2">
                + My Lists
              </button>
            </div>

            <div className="hidden xs:flex items-center w-28 justify-end font-montserrat">
              <svg
                className="vodi-svg scale-75"
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
                <p className="text-xl font-bold">7.4</p>
                <p className="text-[10px]">144234 Votes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
