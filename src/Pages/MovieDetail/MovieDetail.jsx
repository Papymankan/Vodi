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

          <div className="w-full py-6"></div>

        </div>
      </div>
    </>
  );
}
