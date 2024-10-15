import React, { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

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
        <div className="w-full h-full flex items-center">
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
          className="w-full relative pb-[56.25%]"
        >
          {videoSlides && videoSlides.length > 0 && (
            // <iframe
            //   src={videoSlides[0].url}
            //   frameborder="0"
            //   className="w-full h-full rounded-2xl pointer-events-none"
            // ></iframe>
            <div className="w-full h-full relative z-10">
              <img
                src={`https://img.youtube.com/vi/${allSlides[0].key}/maxresdefault.jpg`}
                alt=""
                className="w-full h-full rounded-xl z-0"
              />
              <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center z-20">
                <i aria-hidden="true" className="fa fa-play text-6xl text-white z-20"></i>
                <div className="overlay_2"></div>
              </div>
            </div>
          )}
        </button>
      </div>

      <Lightbox
        open={showLightBox}
        close={() => setShowLightBox(false)}
        slides={videoSlides}
        plugins={[Counter]}
        counter={{ container: { style: { top: 0, left: 0 } } }}
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
