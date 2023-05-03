import React from "react";
import "./Cocukhaklari.css";
import Grid from "./Grid";
import NavbarRegister from "../../components/Navbar/NavbarRegister";

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
        <Grid />
      </div>
    </>
  );
};

export default Cocukhaklari;
