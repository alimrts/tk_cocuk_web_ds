import React, { useContext, useState } from "react";
import "./VideoIzle.css";

import VideoPopup from "./VideoPopup";
import { themeContext } from "../../Context";

import FloatinDivForIntroRight from "../FloatingDiv/FloatinDivForIntroRight";
import ReactPlayer from "react-player";

import tkc_video_istatistiknedir from "../../img/tkc_video_istatistiknedir.png";
import tkc_video_ulkemizitaniyalim from "../../img/tkc_video_ulkemizitaniyalim.png";
import tkc_video_cocukhaklari from "../../img/tkc_video_cocukhaklari.png";
import tkc_video_guvenailesi from "../../img/tkc_video_guvenailesi.png";

import IstatistikNedir from "../../video/IstatistikNedir.mp4";
import UlkemiziTaniyalim from "../../video/UlkemiziTaniyalim.mp4";
import CocukHaklari from "../../video/CocukHaklari.mp4";
import GuvenAilesi from "../../video/GuvenAilesi.mp4";

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
            onClick={() => handleVideoClick(IstatistikNedir)}
          >
            <FloatinDivForIntroRight img={tkc_video_istatistiknedir} />
            <span>İstatistik Nedir?</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => handleVideoClick(UlkemiziTaniyalim)}
          >
            <FloatinDivForIntroRight img={tkc_video_ulkemizitaniyalim} />
            <span>Ülkemizi Tanıyalım</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => handleVideoClick(CocukHaklari)}
          >
            <FloatinDivForIntroRight img={tkc_video_cocukhaklari} />
            <span>Çocuk Hakları</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => handleVideoClick(GuvenAilesi)}
          >
            <FloatinDivForIntroRight img={tkc_video_guvenailesi} />
            <span>Güven Ailesi</span>
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
