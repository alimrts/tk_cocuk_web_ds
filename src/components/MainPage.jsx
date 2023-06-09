import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Istatistik from "../components/Istatistik/Istatistik";

import VideoIzle from "./VideoIzle/VideoIzle";

import Tuik from "../components/Tuik/Tuik";

import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../Context";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Metaverse from "./Metaverse";

const MainPage = () => {
  const [showMetaverse, setShowMetaverse] = useState(false);

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      // ESC key
      setShowMetaverse(false);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMetaverseButtonClick = () => {
    setShowMetaverse(true);
  };

  const location = useLocation();
  const userInfo = location.state.userInfo;

  console.log("gelen userinfo: ", userInfo);

  ///
  const ad = userInfo?.firstName;
  const soyad = userInfo?.lastName;
  const dogumGunu = userInfo?.birthDay;
  const dogumAyi = userInfo?.birthMonth;
  const dogumYili = userInfo?.birthYear;
  const boy = userInfo?.height;
  const kilo = userInfo?.weight;
  const sehir = userInfo?.city;
  const cinsiyet = userInfo?.gender;

  return (
    <div>
      {showMetaverse ? (
        <>
          <div className="metaverse">
            <button
              className="button i-button"
              onClick={() => {
                setShowMetaverse(false);
              }}
              style={{
                position: "absolute",
                zIndex: 2,
                transform: "scale(0.6)",
                lineHeight: 1.4,
                fontSize: 34,
              }}
            >
              X
            </button>
            <Metaverse cinsiyet={cinsiyet} />
          </div>
        </>
      ) : (
        <div>
          <Navbar />
          <Intro
            setShowMetaverse={setShowMetaverse}
            ad={ad}
            // soyad={soyad}
            dogumGunu={dogumGunu}
            dogumAyi={dogumAyi}
            dogumYili={dogumYili}
            boy={boy}
            kilo={kilo}
            sehir={sehir}
            cinsiyet={cinsiyet}
            onButtonClick={handleMetaverseButtonClick}
          />

          <BrowserRouter>
            <Istatistik />
            <VideoIzle />
            <Tuik />
            <Contact />
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </div>
  );
};

export default MainPage;
