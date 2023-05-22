import React, { useContext, useState } from "react";
import "./VideoIzle.css";

import VideoPopup from "./VideoPopup";
import { themeContext } from "../../Context";

import FloatinDivForIntroRight from "../FloatingDiv/FloatinDivForIntroRight";
import ReactPlayer from "react-player";
import tkc_video1 from "../../img/tkc_video1.png";
import tkc_video2 from "../../img/tkc_video2.png";
import tkc_video3 from "../../img/tkc_video3.png";

import GuvenVideo from "../../video/GuvenAilesi.mp4";
import TuikCocukVideo from "../../video/GuvenAilesi.mp4";
import TanitimVideo from "../../video/GuvenAilesi.mp4";

const VideoIzle = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [showPopup, setShowPopup] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleVideoClick = (videoSrc) => {
    // const video = document.getElementById("videoElement");
    // video.src = videoSrc;
    // video.play();

    setSelectedVideo(videoSrc);
    setShowPopup(true);

    console.log("click worked...");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedVideo("");
  };

  return (
    <>
      <div className="videolar">
        <span
          className="video-izle-text"
          style={{
            color: darkMode ? "white" : "#99cc33",
            display: "flex",
          }}
        >
          Video izleyelim
        </span>
      </div>

      <div className="videorow" id="works">
        {/* left side */}

        <div className="w-right">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => handleVideoClick(TuikCocukVideo)}
          >
            <FloatinDivForIntroRight img={tkc_video1} />
            <span style={{ marginTop: "5.5rem", color: "#99cc33" }}>
              TÜİK Çocuk
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => handleVideoClick(GuvenVideo)}
          >
            <FloatinDivForIntroRight img={tkc_video2} />
            <span style={{ marginTop: "5.5rem", color: "#99cc33" }}>
              Güven Ailesi
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => handleVideoClick(TanitimVideo)}
          >
            <FloatinDivForIntroRight img={tkc_video3} />
            <span style={{ marginTop: "5.5rem", color: "#99cc33" }}>
              TÜİK Tanıtımı
            </span>
          </div>
        </div>
      </div>
      {showPopup && (
        <VideoPopup videoSrc={selectedVideo} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default VideoIzle;
