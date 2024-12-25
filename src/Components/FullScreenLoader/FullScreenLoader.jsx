import { Backdrop } from "@mui/material";
import React from "react";
import Loader from "../Loader/Loader"

export default function FullScreenLoader() {
  return (
    <div>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 10 })}
        open={true}
      >
        <Loader/>
      </Backdrop>
    </div>
  );
}
