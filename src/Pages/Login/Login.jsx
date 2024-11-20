import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Store from "../../Redux/Store";
import { useSelector } from "react-redux";
import { fetchRequestToken } from "../../Redux/Reducers/Auth";

export default function Login() {
  useEffect(() => {
    Store.dispatch(fetchRequestToken());
  }, []);

  const ReqToken = useSelector((state) => state.Auth.ReqToken);

  useEffect(() => {
    if (ReqToken && ReqToken.success) 
      // Store.dispatch();
    console.log("a");
    
  }, [ReqToken]);

  console.log(ReqToken);

  return (
    <>
      <NavBar />

      <div className="w-full h-dvh flex justify-center items-center"></div>

      <Footer />
    </>
  );
}
