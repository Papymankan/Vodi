import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import Store from "../../Redux/Store";
import { FetchCastDetail } from "../../Redux/Reducers/Movies";
import { useSelector } from "react-redux";
import { ImageBaseUrl } from "../../Redux/FetchConfigs";

export default function CastDetail() {
  const params = useParams();

  const CastDetail = useSelector((state) => state.Movies.CastDetail);

  useEffect(() => {
    if (params.id) {
      Store.dispatch(FetchCastDetail({ castId: params.id }));
    }
  }, [params]);

  return (
    <>
      <NavBar />

      {CastDetail && (
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
              <p className="my-3 sm:text-base text-sm">
                Known For : <span className="font-montserrat">{CastDetail.known_for_department}</span>
              </p>
              <p className="my-3 sm:text-base text-sm">
                Birthday : <span className="font-montserrat">{CastDetail.birthday}</span>
              </p>
              <p className="my-3 sm:text-base text-sm">
                BirthPlace :{" "}
                <span className="font-montserrat">
                  {CastDetail.place_of_birth}
                </span>
              </p>
            </div>
          </div>

          <div className="p-4 text-white">
            {CastDetail.biography}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
