import React, { useState } from "react";

const TextPopup = ({ rowTitle, row1, onClose }) => {
  return (
    <div className="textPopup">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-4rem",
        }}
      >
        <button onClick={onClose}>X</button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "orange",
          paddingTop: "1rem",
        }}
      >
        {rowTitle}
        <br /> <br />
      </div>

      <span>{row1}</span>
    </div>
  );
};

const ImageWithTwoRows = ({ src1, src2, row1, rowTitle, onClick, isOpen }) => {
  const [hovered, setHovered] = useState(false);

  const handleImageHover = () => {
    setHovered(true);
  };

  const handleImageHoverLeave = () => {
    setHovered(false);
  };

  const handleImageClick = () => {
    onClick();
  };
  const handleTextClose = () => {
    onClick();
  };

  return (
    <>
      <div className="imageWithRowEdit">
        <div
          className="imageWrapperEdit"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageHoverLeave}
          onClick={handleImageClick}
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
                filter: !hovered ? "blur(18px) brightness(90%)" : "none",

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
      {isOpen && (
        <TextPopup rowTitle={rowTitle} row1={row1} onClose={handleTextClose} />
      )}
    </>
  );
};

export default ImageWithTwoRows;
