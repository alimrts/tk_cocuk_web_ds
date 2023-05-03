import React from "react";
import "./Sdg.css";

const ImageWithTwoRows = ({ src, row1 }) => {
  return (
    <div className="imageWithRow">
      <img src={src} alt="" style={{ margin: "6px", height: "150px" }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            marginBottom: "5px",
            marginTop: "5px",
            fontSize: "14pt",
            lineHeight: "1.2",
          }}
        >
          {row1}
        </span>
      </div>
    </div>
  );
};

export default ImageWithTwoRows;
