import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ImageBaseUrl } from "../../Redux/FetchConfigs";
import { useSelector } from "react-redux";

export default function SeriesSwiper({ series }) {
  const SerieGenres = useSelector((state) => state.Series.SerieGenres);

  return (
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
        {series &&
          series.results &&
          series.results.length > 0 &&
          series.results.map((serie) => (
            <SwiperSlide className="w-1/2 sm:w-1/4 lg:w-1/6">
              <a href={"/serie/" + serie.id} className="relative w-full h-full">
                <img
                  src={ImageBaseUrl + serie.poster_path}
                  alt=""
                  className="h-full w-full"
                />
                <div className="w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                  <p className="text-slate-300 text-sm font-light line-clamp-1 text-start w-full">
                    {SerieGenres &&
                      serie.genre_ids.map((id, index) => {
                        let genre = SerieGenres.find((genre) => genre.id == id);
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
  );
}
