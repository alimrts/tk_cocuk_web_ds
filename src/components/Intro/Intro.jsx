import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Intro.css";

import balonlar from "../../img/balonlar.png";
import istatistik from "../../img/g_istatistik.png";
import cocukhaklari from "../../img/g1.png";
import oyun from "../../img/g2.png";
import tuiktani from "../../img/g3.png";
// import uniceftani from "../../img/g4.png";
import sdg from "../../img/g5.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import Model from "./Model";

import { Suspense } from "react";
import IntroLeft from "./IntroLeft";
import leftBg from "../../img/intro_left_bg.png";
import leftFrameBg from "../../img/left_frame_bg.png";
import AnimatedModal from "./AnimatedModal";
import Metaverse from "../Metaverse";
import axios from "axios";

import tkc_basla from "../../img/tkc_basla.png";
import tkc_oyun_oynayalim from "../../img/tkc_oyun_oynayalim.png";
import tkc_istatistik_ogrenelim from "../../img/tkc_istatistik_ogrenelim.png";
import tkc_cocuk_haklari from "../../img/tkc_cocuk_haklari.png";
import tkc_tuiki_taniyalim from "../../img/tkc_tuiki_taniyalim.png";
import tkc_sdg_amaclari from "../../img/tkc_sdg_amaclari.png";
import tkc_balon from "../../img/tkc_balon.png";
import FloatinDivForNavbarMenu from "../FloatingDiv/FloatinDivForNavbarMenu";
import FloatinDivForIntroRight from "../FloatingDiv/FloatinDivForIntroRight";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {" "}
      <div
        style={{
          fontSize: 24,
          color: "black",
        }}
      >
        {Math.round(progress)} % yükleniyor
      </div>
    </Html>
  );
}

const Loading = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    style={{ width: "100%", height: "200px" }}
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
  >
    <path
      fill="#fdc50f"
      d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="2s"
        from="0 50 50"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </path>
    <path
      fill="#fdc50f"
      d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="1s"
        from="0 50 50"
        to="-360 50 50"
        repeatCount="indefinite"
      />
    </path>
    <path
      fill="#fff"
      d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="2s"
        from="0 50 50"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

const Intro = (props) => {
  // for motion

  // Transition
  const transition = { duration: 2, type: "spring" };
  const transitionOfBalloon = {
    duration: 3,
    ease: "easeInOut",
    loop: Infinity,
  };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const {
    setShowMetaverse,
    ad,
    dogumGunu,
    dogumAyi,
    dogumYili,
    boy,
    kilo,
    sehir,
    cinsiyet,
    onButtonClick,
  } = props;

  const handleButtonClick = () => {
    onButtonClick();
    setShowMetaverse(true);
  };

  console.log("gelen cinsiyet intro: ", cinsiyet);

  const [state, setState] = useState({
    infoText: "",
    loading: false,
    adi: "",
    yilYas: "",
    ayYas: "",
    gunYas: "",
    il: "",
    ayniIsimdeIlSayi: "",
    ayniIsimdeTurkiyeSayi: "",
    ayniTarihDoganIlSayi: "",
    ayniTarihDoganTurkiyeSayi: "",
    boyOrtancaDeger: "",
    kiloOrtancaDeger: "",
  });

  const {
    infoText,
    loading,
    adi,
    yilYas,
    ayYas,
    gunYas,
    il,
    ayniIsimdeIlSayi,
    ayniIsimdeTurkiyeSayi,
    ayniTarihDoganIlSayi,
    ayniTarihDoganTurkiyeSayi,
    boyOrtancaDeger,
    kiloOrtancaDeger,
  } = state;

  const getInfo = async () => {
    try {
      const data = {
        ad: ad,
        gun: dogumGunu,
        ay: dogumAyi,
        dogumyil: dogumYili,
        boy: boy,
        kilo: kilo,
        ilKodu: sehir,
        cinsiyet: cinsiyet,
      };
      setState({
        ...state,
        loading: false,
      });
      const response_data = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}GetDashboard`,
        {
          params: data,
        }
      );

      if (response_data.data) {
        setState({
          ...state,
          adi: response_data.data.Ad,
          yilYas: response_data.data.Yil,
          ayYas: response_data.data.Ay,
          gunYas: response_data.data.Gun,
          il: response_data.data.Il,
          ayniIsimdeIlSayi: response_data.data.AyniIsimdeIlSayi,
          ayniIsimdeTurkiyeSayi: response_data.data.AyniIsimdeTurkiyeSayi,
          ayniTarihDoganIlSayi: response_data.data.AyniTarihDoganIlSayi,
          ayniTarihDoganTurkiyeSayi:
            response_data.data.ayniTarihDoganTurkiyeSayi,
          boyOrtancaDeger: response_data.data.BoyOrtancaDeger,
          kiloOrtancaDeger: response_data.data.KiloOrtancaDeger,
          loading: true,
        });
      }
    } catch (error) {
      console.log(error);
      // test if network error
      setState({
        ...state,
        adi: "Adi",
        yilYas: 5,
        ayYas: 11,
        gunYas: 13,
        il: "Bilecik",
        ayniIsimdeIlSayi: 0,
        ayniIsimdeTurkiyeSayi: 140,
        ayniTarihDoganIlSayi: 3,
        ayniTarihDoganTurkiyeSayi: 1214,
        boyOrtancaDeger: 13,
        kiloOrtancaDeger: -3,
        loading: true,
      });
    }
  };

  useEffect(() => {
    getInfo();
  }, []); // Empty dependency array to ensure effect only runs once

  let str = props.ad;
  let words = str.split(" "); // split the string into an array of words
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); // capitalize the first letter of each word
  }
  let capitalizedStr = words.join(" "); // join the words back into a string
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>TÜİK Çocuk Platformu'na</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            Hoş geldin {capitalizedStr} !
          </span>

          <div
            style={{
              backgroundImage: `url(${leftFrameBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "769px",
              height: "524px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // padding: "0 60px ", // added padding to help with layout

              marginLeft: "0rem",
              marginTop: "0rem",
            }}
          >
            {!loading ? (
              <Loading />
            ) : (
              <IntroLeft
                sehir={sehir}
                kilo={kilo}
                boy={boy}
                ad={capitalizeFirstLetter(ad)}
                il={il}
                cinsiyet={cinsiyet}
                yilYas={yilYas}
                ayYas={ayYas}
                gunYas={gunYas}
                ayniIsimdeIlSayi={ayniIsimdeIlSayi}
                ayniIsimdeTurkiyeSayi={ayniIsimdeTurkiyeSayi}
                ayniTarihDoganIlSayi={ayniTarihDoganIlSayi}
                ayniTarihDoganTurkiyeSayi={ayniTarihDoganTurkiyeSayi}
                boyOrtancaDeger={boyOrtancaDeger}
                kiloOrtancaDeger={kiloOrtancaDeger}
              />
            )}
          </div>
        </div>
        {/* <Link to="contact" smooth={true} spy={true}> */}
        {/* <Link
        to={{ pathname: "https://tuikcocuk-webdemo.vercel.app/" }}
        target="_blank"
      >
        <button className="button i-button">Başla</button>
      </Link> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "-2.5rem",
          }}
        >
          <Link
            to="/metaverse"
            state={{ cinsiyetGonder: cinsiyet }}
            onClick={handleButtonClick}
          >
            <FloatinDivForNavbarMenu img={tkc_basla} />
          </Link>

          <AnimatedModal
            ad={capitalizeFirstLetter(ad)}
            il={il}
            cinsiyet={cinsiyet}
            yilYas={yilYas}
            ayYas={ayYas}
            gunYas={gunYas}
            ayniIsimdeIlSayi={ayniIsimdeIlSayi}
            ayniIsimdeTurkiyeSayi={ayniIsimdeTurkiyeSayi}
            ayniTarihDoganIlSayi={ayniTarihDoganIlSayi}
            ayniTarihDoganTurkiyeSayi={ayniTarihDoganTurkiyeSayi}
            boyOrtancaDeger={boyOrtancaDeger}
            kiloOrtancaDeger={kiloOrtancaDeger}
          />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* animation */}

        {/* animation */}
        <motion.div
          initial={{ left: "-34%", top: "-8rem" }}
          whileInView={{ left: "-6%", top: "-8rem" }}
          style={{ left: "calc(100vw * -0.32)", top: "2%" }}
          transition={transition}
          className="floating-div"
        >
          <Link to="istatistik" smooth={true} spy={true}>
            <FloatinDivForIntroRight img={tkc_istatistik_ogrenelim} />
          </Link>
          {/* floatinDiv mein change hy dark mode ka */}
        </motion.div>

        <motion.div
          initial={{ top: "-8rem", left: "30%" }}
          whileInView={{ left: "36%", top: "-8rem" }}
          style={{ left: "calc(100vw * -0.06)", top: "30%" }}
          transition={transition}
          className="floating-div"
        >
          <Link to="tuik" smooth={true} spy={true}>
            <FloatinDivForIntroRight img={tkc_tuiki_taniyalim} />
          </Link>
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "14%", top: "38%" }}
          whileInView={{ left: "11%", top: "0rem" }}
          style={{ left: "calc(100vw * -0.01)", top: "38%" }}
          transition={transition}
          className="floating-div"
        >
          <NavLink to={{ pathname: "/cocukhaklari" }} target="_blank">
            <FloatinDivForIntroRight img={tkc_cocuk_haklari} />
          </NavLink>
          {/* floatinDiv mein change hy dark mode ka */}
        </motion.div>

        <motion.div
          initial={{ left: "-6%", top: "38%" }}
          whileInView={{ left: "-18%", top: "2.5rem" }}
          style={{ left: "calc(100vw * -0.18)", top: "38%" }}
          transition={transition}
          className="floating-div"
        >
          {" "}
          <Link
            to="/metaverse"
            state={{ cinsiyetGonder: cinsiyet }}
            onClick={handleButtonClick}
          >
            <FloatinDivForIntroRight img={tkc_oyun_oynayalim} />
          </Link>
          {/* floatinDiv mein change hy dark mode ka */}
        </motion.div>

        {/* <motion.div
        initial={{ top: "-12%", left: "74%" }}
        whileInView={{ left: "18%" }}
        transition={transition}
        className="floating-div"
      >
        <Link to="unicef" smooth={true} spy={true}>
          <FloatinDiv img={uniceftani} text1="UNICEF'i " text2="Tanıyalım" />
        </Link>
      </motion.div> */}

        <motion.div
          initial={{ left: "48%", top: "2%" }}
          whileInView={{ left: "40%", top: "6rem" }}
          style={{ left: "calc(100vw * 0.04)", top: "2%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <NavLink to={{ pathname: "/sdg" }} target="_blank">
            <FloatinDivForIntroRight img={tkc_sdg_amaclari} />
          </NavLink>
        </motion.div>
        <motion.img
          style={{
            marginLeft: "18rem",
            marginTop: "14rem",
            width: "160px",
            height: "234px",
          }}
          // initial={{ left: "-20%" }}
          // whileInView={{ left: "-14%" }}
          animate={{ top: ["-2%", "2%", "-2%"] }} // array of values to loop
          transition={transitionOfBalloon}
          src={tkc_balon}
          alt=""
        />

        {/* <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#F6FFBF",
            top: "-6rem",
            width: "21rem",
            height: "11rem",
            left: "4rem",
          }}
        ></div>

        <div
          className="blur"
          style={{
            background: "#FFAAFB",
            top: "0rem",
            width: "21rem",
            height: "11rem",
            left: "-18rem",
          }}
        ></div>

        <div
          className="blur"
          style={{
            background: "#80ffff",
            top: "0rem",
            width: "21rem",
            height: "11rem",
            left: "22rem",
          }}
        ></div>

        <div
          className="blur"
          style={{
            background: "#AAFFCD",
            top: "10rem",
            width: "21rem",
            height: "11rem",
            left: "-14rem",
          }}
        ></div> */}
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "14rem",
            width: "91rem",
            height: "21rem",
            left: "-48rem",
            zIndex: "-999",
          }}
        ></div>
        {/* <div
          className="blur"
          style={{
            background: "#ffb3b3",
            top: "10rem",
            width: "21rem",
            height: "11rem",
            left: "16rem",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Intro;
