import React from "react";
import "./Footer.css";
// import Wave from "../../img/wave.png";
// import Wave from "../../img/Wave.svg";
import FooterBg from "../../img/tkc_footer_bg.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={FooterBg} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        {/* <span>TÜİK Çocuk 2023 - Tüm Hakları Saklıdır</span> */}
        <div className="f-icons">{/* © 2024, Tüm hakları saklıdır. */}</div>
      </div>
    </div>
  );
};

export default Footer;
