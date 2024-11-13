import React from "react";
import { ImageLowQualityUrl } from "../../Redux/FetchConfigs";

export default function MoviesList({moviesList , MovieGenres}) {
  return (
    <div className="mt-16 w-full grid lg:grid-cols-6 md:grid-cols-5 xs:grid-cols-4 grid-cols-3 lg:gap-4 gap-3">
      {moviesList.length > 0 &&
        moviesList.map((movie) => {
          if (movie.poster_path) {
            return (
              <div className="w-full">
                <a
                  href={"/movie/" + movie.id}
                  className="relative w-full h-full"
                >
                  <img
                    src={ImageLowQualityUrl + movie.poster_path}
                    alt=""
                    className="w-full h-full"
                  />
                  <div className="text-slate-300 w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-xs font-light line-clamp-1 text-start w-full">
                      {MovieGenres &&
                        movie.genre_ids &&
                        movie.genre_ids.length > 0 &&
                        movie.genre_ids.map((id) => {
                          let genre = MovieGenres.find(
                            (genre) => genre.id == id
                          );
                          return <span>{genre.name}, </span>;
                        })}
                    </p>
                    <p className="group-hover:text-cyan duration-200 line-clamp-1 w-full text-start">
                      {movie.title}
                    </p>
                  </div>
                </a>
              </div>
            );
          }
        })}
    </div>
  );
}
