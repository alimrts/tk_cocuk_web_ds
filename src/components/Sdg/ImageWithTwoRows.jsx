// import React from "react";
// import "./Sdg.css";

// const ImageWithTwoRows = ({ src, row1 }) => {
//   return (
//     <div className="imageWithRow">
//       <img src={src} alt="" style={{ margin: "6px", height: "150px" }} />
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <span
//           style={{
//             marginBottom: "5px",
//             marginTop: "5px",
//             fontSize: "14pt",
//             lineHeight: "1.2",
//           }}
//         >
//           {row1}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default ImageWithTwoRows;
import React, { useState } from "react";

const ImageWithTwoRows = ({ src1, src2, row1, rowTitle }) => {
  const [hovered, setHovered] = useState(false);

  const [showTextPopup, setShowTextPopup] = useState(false);

  const handleImageHover = () => {
    setHovered(true);
  };

  const handleImageHoverLeave = () => {
    setHovered(false);
  };

  const handleImageClick = () => {
    setShowTextPopup(!showTextPopup);
  };

  const handleTextClose = () => {
    setShowTextPopup(!showTextPopup);
  };

  return (
    <>
      <div className="imageWithRowEdit">
        <div
          className="imageWrapperEdit"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageHoverLeave}
        >
          <div className={"imageContainer"}>
            <img
              src={src2}
              alt=""
              style={{
                margin: "6px",
                span: "6px",
                height: "400px",
                position: "absolute",
                filter: !hovered ? "blur(4px)" : "none",
                zIndex: !hovered ? -1 : 1,
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            />

            <img
              src={src1}
              alt=""
              style={{
                margin: "6px",
                span: "6px",
                height: "150px",
                borderRadius: "5px",
                boxShadow: "0 12px 18px rgba(0, 0, 0, 0.6)",
              }}
            />
          </div>
        </div>
      </div>
      {hovered && (
        <div
          className="textPopup"
          style={{ pointerEvents: !hovered ? "auto" : "none" }}
        >
          <span
            style={{
              color: "orange",
            }}
          >
            {rowTitle}
            <br /> <br />
          </span>
          <span>{row1}</span>
          {/* <button onClick={handleTextClose}> Kapat</button> */}
        </div>
      )}
    </>
  );
};

export default ImageWithTwoRows;
