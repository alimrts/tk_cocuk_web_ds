import React from "react";

import "./FloatingDiv.css";

const FloatinDivForNavbarMenu = ({ img, onClick }) => {
  return (
    // darkMode
    <div className="floatingDivForMenu" onClick={onClick}>
      <img src={img} alt="" />
    </div>
  );
};

export default FloatinDivForNavbarMenu;
