import React from "react";

export default function SeriesList({seriesList , SerieGenres}) {
  return (
    <div className="mt-16 w-full grid lg:grid-cols-6 md:grid-cols-5 xs:grid-cols-4 grid-cols-3 lg:gap-4 gap-3">
      {seriesList.length > 0 &&
        seriesList.map((serie) => {
          if (serie.poster_path) {
            return (
              <div className="w-full">
                <a
                  href={"/serie/" + serie.id}
                  className="relative w-full h-full"
                >
                  <img
                    src={"https://image.tmdb.org/t/p/w300" + serie.poster_path}
                    alt=""
                    className="w-full h-full"
                  />
                  <div className="text-slate-300 w-full h-full poster-cover flex justify-end p-3 items-start flex-col group transition-all absolute top-0">
                    <p className="text-xs font-light line-clamp-1 text-start w-full">
                      {SerieGenres &&
                        serie.genre_ids &&
                        serie.genre_ids.length > 0 &&
                        serie.genre_ids.map((id) => {
                          let genre = SerieGenres.find(
                            (genre) => genre.id == id
                          );
                          return <span>{genre.name}, </span>;
                        })}
                    </p>
                    <p className="group-hover:text-cyan duration-200 line-clamp-1 w-full text-start">
                      {serie.name}
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
