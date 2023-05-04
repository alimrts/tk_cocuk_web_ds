import React, { useContext, useRef, useEffect, Fragment } from "react";
import "./VideoIzle.css";

import { themeContext } from "../../Context";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import FloatinDivForIntroRight from "../FloatingDiv/FloatinDivForIntroRight";
import ReactPlayer from "react-player";
import tkc_video1 from "../../img/tkc_video1.png";
import tkc_video2 from "../../img/tkc_video2.png";
import tkc_video3 from "../../img/tkc_video3.png";

import GuvenVideo from "../../video/GuvenAilesi.mp4";
const VideoIzle = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // const videoRef = useRef();

  // useEffect(() => {
  //   videoRef.current.addEventListener(
  //     "contextmenu",
  //     function (e) {
  //       e.preventDefault();
  //     },
  //     false
  //   );

  //   return videoRef.current.removeEventListener(
  //     "contextmenu",
  //     function (e) {
  //       e.preventDefault();
  //     },
  //     false
  //   );
  // }, []);

  // transition
  return (
    <>
      <div>
        <span
          style={{
            color: darkMode ? "white" : "#99cc33",
            display: "flex",
            justifyContent: "right",
            marginRight: "12rem",
            fontSize: "2.25rem",
          }}
        >
          Video izleyelim
        </span>
      </div>

      <div className="works" id="works">
        {/* left side */}

        <div className="w-right">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
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
          >
            <FloatinDivForIntroRight img={tkc_video3} />
            <span style={{ marginTop: "5.5rem", color: "#99cc33" }}>
              TÜİK tanıtımı
            </span>
          </div>

          <div></div>
          {/* <Fragment>
          <div ref={videoRef}>
            <ReactPlayer
              width="100%"
              height="100%"
              controls={true}
              url={GuvenVideo}
              config={{ file: { attributes: { controlsList: "nodownload" } } }}
            />
          </div>
        </Fragment> */}
        </div>
      </div>
    </>
  );
};

export default VideoIzle;
