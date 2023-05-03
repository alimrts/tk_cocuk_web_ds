import React, { useContext, useRef, useEffect, Fragment } from "react";
import "./Works.css";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";

import GuvenVideo from "../../video/GuvenAilesi.mp4";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      false
    );

    return videoRef.current.removeEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      false
    );
  }, []);

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Video izleyelim
          </span>
          <span>Güven Ailesi</span>
          {/* <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </span> */}
          {/* <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Başla</button>
          </Link> */}
          {/* <NavLink
            to={{ pathname: "https://tuikcocuk-webdemo.vercel.app/" }}
            target="_blank"
          >
            <button className="button i-button">Başla</button>
          </NavLink> */}
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <Fragment>
          <div ref={videoRef}>
            <ReactPlayer
              width="100%"
              height="100%"
              controls={true}
              url={GuvenVideo}
              config={{ file: { attributes: { controlsList: "nodownload" } } }}
            />
          </div>
        </Fragment>

        {/* <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
           <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div> 
        </motion.div> */}
        {/* background Circles */}
        {/* <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div> */}
      </div>
    </div>
  );
};

export default Works;
