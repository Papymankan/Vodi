import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

export default function Login() {
  const AccountDetail = useSelector((state) => state.Auth.AccountDetail);

  return (
    <>
      <NavBar />
      {AccountDetail && (
        <div className="w-full min-h-dvh">
          <div className="Profile_Drop w-full border flex">
            <div className="h-full px-20 py-10 flex items-center flex-col">
              <Avatar sx={{ width: 128, height: 128, fontSize: 60 }}>
                {AccountDetail.username[0].toUpperCase()}
              </Avatar>

              <p className="mt-2 text-xl text-cyan">
                {AccountDetail.username}
              </p>

              {AccountDetail.name && (
                <p className="mt-1 text-xl text-white">
                  {AccountDetail.name}
                </p>
              )}
            </div>

            
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
