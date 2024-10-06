import React from "react";
import YouTube from "react-youtube";

export default function BackDrop({ videoKey, onReady }) {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1, // Auto-play the video
      controls: 0, // Hide player controls
      showinfo: 0,
      modestbranding: 1, // No YouTube logo
      loop: 1, // Loop the video
      mute: 1, // Mute the video so it can autoplay
      playlist: videoKey, // Loop back to the same video
      cc_load_policy: 0, // Turn off subtitles
      iv_load_policy: 3,
      disablekb: 1,
    },
  };

  return (
    <>
      <YouTube
        videoId={videoKey}
        opts={opts}
        className="youtube-video"
        onReady={onReady}
      />
      <div className="overlay"></div>{" "}
    </>
  );
}
