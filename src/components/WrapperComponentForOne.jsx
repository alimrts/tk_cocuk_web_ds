import React, { useState } from "react";

import ImageWithOne from "./ImageWithOne";

const WrapperComponentForOne = ({ data }) => {
  const [openPopupIndex, setOpenPopupIndex] = useState(null);

  const handleImageClick = (index) => {
    setOpenPopupIndex(index === openPopupIndex ? null : index);
  };

  return (
    <>
      <div className="sdgGrid-container">
        {data.map((item, index) => (
          <ImageWithOne
            key={index} // Use a unique key for each item
            title={item.title}
            src_cover={item.src_cover}
            src_image={item.src_image}
            onClick={() => handleImageClick(index)}
            isOpen={openPopupIndex === index}
          />
        ))}
      </div>
    </>
  );
};

export default WrapperComponentForOne;
