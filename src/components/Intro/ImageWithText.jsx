import React, { useEffect, useState } from "react";
import { fabric } from "fabric";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootOfCanvas: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  canvas: {
    border: "1px solid black",
    width: "100%",
    height: "100%",
  },
}));

const ImageWithText = ({
  text,
  fullText,
  imageUrl,
  fontColor,
  text1Left,
  text1Top,
  text2Left,
  text2Top,
  text3Left,
  text3Top,
  text3Width,
  text4Left,
  text4Top,

  fontFamily,
}) => {
  const [canvas, setCanvas] = useState(null);

  const [canvasInitialized, setCanvasInitialized] = useState(false);

  console.log("fullText: ", fullText);

  const classes = useStyles();

  useEffect(() => {
    const img = new Image();

    const options = { year: "numeric", month: "long", day: "numeric" };
    const today = new Date().toLocaleDateString("tr", options);
    // Load the image and create a new Fabric.js canvas
    if (!canvasInitialized) {
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
          selectable: false,
          // left: 160, // Custom x position
          // top: 90, // Custom y position
          left: text1Left, // Custom x position
          top: text1Top, // Custom y position
          fontSize: 18,
          fontFamily: fontFamily,
          fontStyle: "italic",
          fill: "grey",
        });
        newCanvas.add(fabricText1);

        // Add the second text object to the canvas
        const fabricText2 = new fabric.Text(text, {
          selectable: false,
          // left: 320, // Custom x position
          // top: 120, // Custom y position
          left: text2Left, // Custom x position
          top: text2Top, // Custom y position
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
          selectable: false,
          // left: 210, // Custom x position
          // top: 160, // Custom y position
          left: text3Left, // Custom x position
          top: text3Top, // Custom y position
          fontSize: 12,
          fontFamily: fontFamily,
          fontStyle: "italic",
          fill: "grey",
          // width: 280, // set width to allow line-wrapping
          width: text3Width, // set width to allow line-wrapping

          lineHeight: 1.2, // set line-height for better readability
        });
        newCanvas.add(fabricText3); // add the text object to the canvas
        //   fabricText3.setCoords(); // update the coordinates of the text object
        //   fabricText3.splitTextIntoLines(); // split text into lines

        const fabricText4 = new fabric.Text("Tarih: " + today, {
          selectable: false,
          // left: 500, // Custom x position
          // top: 420, // Custom y position
          left: text4Left, // Custom x position
          top: text4Top, // Custom y position
          fontSize: 14,
          fontFamily: fontFamily,
          fontStyle: "italic",
          fill: "grey",
        });
        newCanvas.add(fabricText4);

        // Save the canvas to state
        setCanvas(newCanvas);
        setCanvasInitialized(true);
      };
    }
    img.src = imageUrl;
  }, [
    imageUrl,
    fontColor,
    fontFamily,
    text,
    fullText,
    text1Left,
    text1Top,
    text2Left,
    text2Top,
    text3Left,
    text3Top,
    text3Width,
    text4Left,
    text4Top,
  ]);

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
    <div className={classes.rootOfCanvas}>
      <canvas className={classes.canvas} id="canvas" />
      {canvas && (
        <button
          className={`button i-button`}
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
