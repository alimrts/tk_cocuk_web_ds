import React, { useEffect, useState } from "react";
import { fabric } from "fabric";

const ImageWithText = ({ text, fullText, imageUrl, fontColor, fontFamily }) => {
  const [canvas, setCanvas] = useState(null);
  console.log("fullText: ", fullText);
  useEffect(() => {
    // Load the image and create a new Fabric.js canvas
    const img = new Image();
    img.onload = () => {
      const newCanvas = new fabric.Canvas("canvas");
      newCanvas.setWidth(img.naturalWidth);
      newCanvas.setHeight(img.naturalHeight);

      // Add the image as a Fabric.js image object to the canvas
      const fabricImg = new fabric.Image(img, {
        selectable: false, // Make the image non-selectable
      });
      newCanvas.add(fabricImg);

      // Add the first text object to the canvas
      const fabricText1 = new fabric.Text("Sevgili", {
        left: 160, // Custom x position
        top: 90, // Custom y position
        fontSize: 18,
        fontFamily: fontFamily,
        fontStyle: "italic",
        fill: "grey",
      });
      newCanvas.add(fabricText1);

      // Add the second text object to the canvas
      const fabricText2 = new fabric.Text(text, {
        left: 320, // Custom x position
        top: 120, // Custom y position
        fontSize: 38,
        fontFamily: fontFamily,
        fontStyle: "italic",
        fill: fontColor,
        textAlign: "center",
        originX: "center",
        originY: "center",
      });
      newCanvas.add(fabricText2);

      // Add the third text object to the canvas
      const fabricText3 = new fabric.Textbox(fullText, {
        left: 210, // Custom x position
        top: 160, // Custom y position
        fontSize: 12,
        fontFamily: fontFamily,
        fontStyle: "italic",
        fill: "grey",
        width: 280, // set width to allow line-wrapping
        lineHeight: 1.2, // set line-height for better readability
      });
      newCanvas.add(fabricText3); // add the text object to the canvas
      //   fabricText3.setCoords(); // update the coordinates of the text object
      //   fabricText3.splitTextIntoLines(); // split text into lines

      // Save the canvas to state
      setCanvas(newCanvas);
    };

    img.src = imageUrl;
  }, [imageUrl, fontColor, fontFamily, text, fullText]);

  const handleDownload = () => {
    const dataURL = canvas.toDataURL({ format: "png" });
    const link = document.createElement("a");
    link.download = text + "-tuik-cocuk-sertifika.png";
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ position: "relative" }}>
      <canvas id="canvas" style={{ border: "1px solid black" }} />
      {canvas && (
        <button
          className="button i-button"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          onClick={handleDownload}
        >
          İndir
        </button>
      )}
    </div>
  );
};

export default ImageWithText;
