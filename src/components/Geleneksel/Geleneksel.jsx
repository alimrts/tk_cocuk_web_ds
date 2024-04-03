import React, { useContext } from "react";
import "../../components/Geleneksel/Geleneksel.css";

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
      <NavbarRegister />
      <div className="geleneksel">
        <div className="t-heading-geleneksel ">
          <span>Geleneksel Oyunlarımızı</span>
          <span> Öğrenelim!</span>
          <span style={{ fontSize: "14pt" }}>
            <br />
            Açıklamalar için kartlara tıklayınız.
          </span>
        </div>

        <WrapperComponentForOne data={gelenekselData} />
      </div>
    </>
  );
};

export default Geleneksel;
