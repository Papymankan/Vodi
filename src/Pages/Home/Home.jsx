import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="w-full relative">
        <Swiper className="mySwiper" threshold={0}>
          <SwiperSlide>
            <div
              className="w-full md:h-[644px] sm:h-[500px] ms:h-[400px] h-[350px] bg-cover bg-center"
              style={{ backgroundImage: "url(/img/swiperLanding.jpg)" }}
            >
              <div className="container mx-auto h-full">
                <div className="md:w-1/2 w-full px-3 flex flex-col md:justify-end h-full text-white md:text-left text-center">
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
                  "url(https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/05/h5-slider-6.jpg)",
              }}
            >
              <div className="container mx-auto h-full">
                <div className="md:w-1/2 w-full px-3 flex flex-col md:justify-end h-full text-white md:text-left text-center">
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
        </Swiper>
      </div>
    </>
  );
}
