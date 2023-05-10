import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import tkc_logo from "../../img/tkc_logo.png";
import tkc_anasayfa from "../../img/tkc_anasayfa.png";
import tkc_istatistik from "../../img/tkc_istatistik.png";
import tkc_video from "../../img/tkc_video.png";
import tkc_tuik from "../../img/tkc_tuik.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import FloatinDivForNavbarLogo from "../FloatingDiv/FloatingDivForNavbarLogo";
import FloatinDivForNavbarMenu from "../FloatingDiv/FloatinDivForNavbarMenu";

import tkc_kuslar1 from "../../img/tkc_kuslar1.png";
import tkc_kuslar2 from "../../img/tkc_kuslar2.png";
import kus1 from "../../img/kus1.png";

const Navbar = () => {
  const transitionOfKus1 = {
    duration: 3,
    ease: "easeInOut",
    loop: Infinity,
  };
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const ulRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ulRef.current && !ulRef.current.contains(event.target)) {
        setIsNavExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navigation">
      <div className="n-left">
        <div
          style={{
            backgroundImage: `url(${tkc_kuslar2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "12rem",
            height: "6rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "-12rem",
            marginTop: "4rem",
          }}
        >
          {" "}
        </div>

        <Link to="Intro" smooth={true} spy={true}>
          <FloatinDivForNavbarLogo img={tkc_logo} />
        </Link>

        <div
          style={{
            backgroundImage: `url(${tkc_kuslar1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "12rem",
            height: "6rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "4rem",
            marginTop: "4rem",
          }}
        ></div>
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
        ref={ulRef}
      >
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }} className="n-list">
              <li className="n-list">
                <Link
                  to="Intro"
                  spy={true}
                  smooth={true}
                  onClick={() => {
                    setTimeout(() => setIsNavExpanded(false), 300);
                  }}
                >
                  <FloatinDivForNavbarMenu img={tkc_anasayfa} />
                </Link>
              </li>
              <li className="n-list">
                <Link
                  to="istatistik"
                  spy={true}
                  smooth={true}
                  onClick={() => {
                    setTimeout(() => setIsNavExpanded(false), 300);
                  }}
                >
                  <FloatinDivForNavbarMenu img={tkc_istatistik} />
                </Link>
              </li>
              <li className="n-list">
                <Link
                  to="works"
                  spy={true}
                  smooth={true}
                  onClick={() => {
                    setTimeout(() => setIsNavExpanded(false), 300);
                  }}
                >
                  <FloatinDivForNavbarMenu img={tkc_video} />
                </Link>
              </li>
              <li className="n-list">
                <Link
                  to="tuik"
                  spy={true}
                  smooth={true}
                  onClick={() => {
                    setTimeout(() => setIsNavExpanded(false), 300);
                  }}
                >
                  <FloatinDivForNavbarMenu img={tkc_tuik} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Toggle />
      </div>
    </nav>
  );
};

export default Navbar;
