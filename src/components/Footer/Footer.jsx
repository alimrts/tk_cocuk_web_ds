import React from "react";
import "./Footer.css";

import FooterBg from "../../img/tkc_footer_bg.png";

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
