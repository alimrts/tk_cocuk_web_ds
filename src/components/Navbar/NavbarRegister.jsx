import React, { useState, useRef, useEffect } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import tkc_logo from "../../img/tkc_logo.png";
import FloatinDivForNavbarLogo from "../FloatingDiv/FloatingDivForNavbarLogo";
import useZustandStore from "../../zustandStore";

const Navbar = () => {
  const { language, setLanguage, languageData } = useZustandStore();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const strings = languageData[language];

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);

    //to remember which select value
    setSelectedLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };
  return (
    <div id="Navbar">
      {/* left */}
      <div className="n-left" style={{ marginTop: "-4rem" }}>
        <Link to="Intro" smooth={true} spy={true}>
          <FloatinDivForNavbarLogo img={tkc_logo} />
        </Link>
      </div>
      {/* right */}
      <div
        className="n-right"
        style={{ display: "flex", flexDirection: "row", marginTop: "-4rem" }}
      >
        {/* <span style={{ marginRight: "2rem", marginTop: "" }}>
          Hoş geldin!{" "}
        </span> */}

        <div className="n-list" style={{ marginRight: "2rem", color: "grey" }}>
          <div style={{ marginLeft: "auto" }}>
            <select
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
              style={{ color: "grey" }}
            >
              <option value="default">Türkçe</option>
              <option value="eng">English</option>
              <option value="ger">Deutsch</option>
              <option value="french">Français</option>
              <option value="spanish">Española</option>
              <option value="arab">عربي</option>
            </select>
          </div>
        </div>
        <Toggle />
      </div>
    </div>
  );
};

export default Navbar;
