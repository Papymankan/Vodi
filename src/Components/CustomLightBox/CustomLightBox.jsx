import React, { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function CustomLightBox({ allSlides }) {
  const [showLightBox, setShowLightBox] = useState(false);
  const [videoSlides, setvideoSlides] = useState([]);

  useEffect(() => {
    let arr = [];

    allSlides.map((slide, index) => {
      if (slide.site == "YouTube") {
        arr.push({
          url: "https://www.youtube.com/embed/" + slide.key + "?rel=0",
          type: "youtube",
          id: index,
          title: slide.name,
        });
      }
    });

    setvideoSlides(arr);
  }, [allSlides]);

  const iframeRefs = useRef([]);

  function CustomSlide({ slide }) {
    if (slide.type === "youtube") {
      return (
        <div style={{ width: "100%", height: "100%" }}>
          <iframe
            ref={iframeRefs.current[slide.id]}
            width="100%"
            height="100%"
            src={slide.url}
            title={slide.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={(e) => {
              iframeRefs.current[slide.id] = e.target;
            }}
          ></iframe>
        </div>
      );
    }
    return null;
  }

  return (
    <>
      <div className="w-full">
        <button
          onClick={() => setShowLightBox(true)}
          className="w-full relative"
        >
          {videoSlides && videoSlides.length > 0 && (
            <iframe
              src={videoSlides[0].url}
              frameborder="0"
              className="w-full lg:h-96 xs:h-80 h-60 rounded-2xl pointer-events-none"
            ></iframe>
          )}
        </button>
      </div>

      <Lightbox
        open={showLightBox}
        close={() => setShowLightBox(false)}
        slides={videoSlides}
        render={{
          slide: (slide) => {
            return <CustomSlide slide={slide.slide} />;
          },
        }}
        carousel={{ finite: true }}
        controller={{ iframeRefs }}
        on={{
          view: ({ index }) => {
            iframeRefs.current.map((e, i) => {
              if (i != index) {
                var iframeSrc = e.src;
                e.src = iframeSrc;
              }
            });
          },
        }}
      />
    </>
  );
}
