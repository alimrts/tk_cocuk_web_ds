import React from "react";
import "./Cocukhaklari.css";
import Grid from "./Grid";
// import NavbarRegister from "../../components/Navbar/NavbarRegister";

import NavbarRegister from "../../components/Navbar/NavbarCocukSdg";

import tkc_kuslar2_edit from "../../img/tkc_kuslar2_edit.png";

const Cocukhaklari = () => {
  return (
    <>
      {" "}
      <NavbarRegister />
      <div className="t-heading">
        <span>
          Haklarımızı Öğrenelim... <br />{" "}
        </span>
        <span>Çocuk Hakları </span>
        <span>Nedir?</span>
        <span style={{ fontSize: "14pt" }}>
          <br />
          Açıklamalar için çocuk hakları logolarına tıklayınız.
        </span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "#ccffee" }}></div>
      </div>
      <div style={{ marginTop: "9rem" }}>
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
            marginTop: "-26rem",
          }}
        />
        <Grid />
      </div>
    </>
  );
};

export default Cocukhaklari;
