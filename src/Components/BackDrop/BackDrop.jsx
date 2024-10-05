import { height } from "@mui/system";
import React from "react";
import YouTube from "react-youtube";

export default function BackDrop({ videoKey }) {
  const opts = {
    playerVars: {
      autoplay: 1, // Auto-play the video
      controls: 0, // Hide player controls
      showinfo: 0,
      modestbranding: 1, // No YouTube logo
      loop: 1, // Loop the video
      mute: 1, // Mute the video so it can autoplay
      playlist: videoKey, // Loop back to the same video
      cc_load_policy: 0, // Turn off subtitles
    },
  };

  return (
    <>
      <YouTube
        videoId={videoKey}
        opts={opts}
        className="youtube-video"
      />
      <div className="overlay"></div>{" "}
    </>
  );
}
