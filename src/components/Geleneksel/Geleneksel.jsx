import React, { useContext } from "react";
import "../../components/Sdg/Sdg.css";

import { themeContext } from "../../Context";

import WrapperComponentForOne from "../WrapperComponentForOne";
import NavbarRegister from "../../components/Navbar/NavbarCocukSdg";
import gelenekselData from "../../gelenekselData.json";

const Geleneksel = () => {
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
      {/* left side */}
      <div className="t-heading ">
        <span>Geleneksel Oyunlarımızı</span>
        <span> Öğrenelim!</span>
        <span style={{ fontSize: "14pt" }}>
          <br />
          Açıklamalar için kartlara tıklayınız.
        </span>
      </div>
      {/* right */}
      <div>
        <div style={{ display: "flex", position: "absolute", zIndex: "-1" }}>
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
            // backgroundImage: `url(${tkc_kuslar2_edit})`,
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            width: "22rem",
            height: "22rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "58rem",
            marginTop: "-18rem",
          }}
        />
        <WrapperComponentForOne data={gelenekselData} />
      </div>
    </>
  );
};

export default Geleneksel;
