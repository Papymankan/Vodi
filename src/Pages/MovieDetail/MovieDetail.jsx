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

          <div className="w-full py-6 flex items-start sm:flex-row flex-col relative">
            <div className="sm:hidden block absolute top-6 right-4">
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
                Harry Potter and the Philosopher's Stone
              </h1>

              <div className="text-sm xs:text-base w-full flex items-center space-x-3 text-slate-400 pt-3 xs:pt-6 font-montserrat">
                <span>2013</span>
                <span>|</span>
                <span>1h 48min</span>
              </div>

              <p className="pt-4 text-gray-300 max-w-xl lg:max-w-4xl">
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
        </div>
      </div>
    </>
  );
}
