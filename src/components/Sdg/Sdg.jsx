import React, { useContext } from "react";
import "./Sdg.css";
import Card from "../Card/Card";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Dokuman from "./ÇOCUKLAR İÇİN SÜRDÜRÜLEBİLİR KALKINMA GÖSTERGELERİ.pdf";
import WrapperComponent from "./WrapperComponent";
import NavbarRegister from "../../components/Navbar/NavbarRegister";
import tkc_kuslar2_edit from "../../img/tkc_kuslar2_edit.png";

const Sdg = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <>
      {" "}
      <NavbarRegister />
      <div className="sdg" id="sdg">
        {/* left side */}
        <div className="awesome">
          {/* dark mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Sürdürülebilir Kalkınma
          </span>
          <span> Amaçları</span>
          {/* <span>
          Lorem ispum is simpley dummy text of printing of
          <br />
          ispum is simpley dummy text of printing
        </span> */}
          {/* <a href={Dokuman} download>
          <button className="button s-button">Dokumanı İndir</button>
        </a> */}
        </div>
        {/* right */}
      </div>
      <div>
        <div style={{ display: "flex", position: "absolute", zIndex: "-1" }}>
          <div
            className="blur"
            style={{
              background: "#FFAAFB",
              top: "0rem",
              width: "21rem",
              height: "11rem",
              left: "18rem",
            }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#F6FFBF",
              top: "20rem",
              width: "25rem",
              height: "11rem",
              left: "58rem",
            }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#AAFFDF",
              top: "40rem",
              width: "25rem",
              height: "18rem",
              left: "8rem",
            }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "60rem",
              width: "25rem",
              height: "11rem",
              left: "58rem",
            }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#ffccdd",
              top: "80rem",
              width: "25rem",
              height: "18rem",
              left: "8rem",
            }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#F6FFBF",
              top: "100rem",
              width: "25rem",
              height: "11rem",
              left: "58rem",
            }}
          ></div>
          <div
            className="blur"
            style={{
              background: "rgb(238 210 255)",
              top: "120rem",
              width: "25rem",
              height: "18rem",
              left: "8rem",
            }}
          ></div>
        </div>
        <div
          style={{
            backgroundImage: `url(${tkc_kuslar2_edit})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "22rem",
            height: "22rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "58rem",
            marginTop: "-18rem",
          }}
        />
        <WrapperComponent />
      </div>
    </>
  );
};

export default Sdg;
