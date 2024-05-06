import React from "react";
import React, { useState } from "react";
import "./FloatingDiv.css";

const FloatinDivForIntroRight = ({ img, onClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(
      !!userAgent.match(
        /android|webos|iphone|ipad|ipod|blackberry|windows phone/i
      )
    );
  }, []);

  const classNames = `floatingDivForIntroRight ${isMobile ? "mobile" : ""}`;
  return (
    // darkMode
    <div className={classNames} onClick={onClick}>
      <img src={img} alt="" />
    </div>
  );
};

export default FloatinDivForIntroRight;
