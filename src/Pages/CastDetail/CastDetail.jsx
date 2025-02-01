import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

export default function CastDetail() {
  return (
    <>
      <NavBar />

      <div className="container mx-auto">
        <div className="w-full flex">
          <div className="p-4">
            <img
              src="https://image.tmdb.org/t/p/original/jMOipiHOPkVdx9phhKamwlVKEZT.jpg"
              alt=""
              className="w-44 h-64"
            />
          </div>
          <div className="flex-1 p-4 text-white">
            <h1 className="text-5xl">Lenardo Decaperio</h1>
            <p className="my-3">
              Gender : <span className="font-montserrat">Male</span>
            </p>
            <p className="my-3">
              Known For : <span className="font-montserrat">Acting</span>
            </p>
            <p className="my-3">
              Birthday : <span className="font-montserrat">1974-11-11</span>
            </p>
            <p className="my-3">
              BirthPlace :{" "}
              <span className="font-montserrat">
                Los Angeles, California, USA
              </span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
