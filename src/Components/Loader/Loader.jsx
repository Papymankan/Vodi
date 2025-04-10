import React from "react";

export default function () {
  return (
    <div className="w-full h-full">
      <div class="loader w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 66 66"
          height="100px"
          width="100px"
          class="spinner"
        >
          <circle
            stroke="url(#gradient)"
            r="20"
            cy="33"
            cx="33"
            stroke-width="1"
            fill="transparent"
            class="path"
          ></circle>
          <linearGradient id="gradient">
            <stop stop-opacity="1" stop-color="#24baef" offset="0%"></stop>
            <stop stop-opacity="0" stop-color="#af3dff" offset="100%"></stop>
          </linearGradient>
        </svg>
      </div>
    </div>
  );
}
