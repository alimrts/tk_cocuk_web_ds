import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import tkc_logo from "../../img/tkc_logo.png";
import FloatinDivForNavbarLogo from "../FloatingDiv/FloatingDivForNavbarLogo";

const navbar = () => {
  return (
    <div id="Navbar">
      {/* left */}
      <div className="n-left" style={{ marginTop: "-4rem" }}>
        <Link to="Intro" smooth={true} spy={true}>
          <FloatinDivForNavbarLogo img={tkc_logo} />
        </Link>
      </div>
      {/* right */}
      <div className="n-right" style={{ marginTop: "0rem" }}>
        {/* <span style={{ marginRight: "2rem", marginTop: "-4rem" }}>
          Hoş geldin!{" "}
        </span> */}

        <div
          className="n-list"
          style={{ marginRight: "2rem", marginTop: "-4rem" }}
        >
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default navbar;
