import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ImageWithText from "./ImageWithText";

import sertifika1 from "../../img/certs/sertifika1.png";
import sertifika1_thumb from "../../img/certs/sertifika1_thumb.png";
import sertifika2 from "../../img/certs/sertifika2.png";
import sertifika2_thumb from "../../img/certs/sertifika2_thumb.png";
import sertifika3 from "../../img/certs/sertifika3.png";
import sertifika3_thumb from "../../img/certs/sertifika3_thumb.png";
import sertifika4 from "../../img/certs/sertifika4.png";
import sertifika4_thumb from "../../img/certs/sertifika4_thumb.png";
import sertifika5 from "../../img/certs/sertifika5.png";
import sertifika5_thumb from "../../img/certs/sertifika5_thumb.png";
import sertifika6 from "../../img/certs/sertifika6.png";
import sertifika6_thumb from "../../img/certs/sertifika6_thumb.png";
import sertifika7 from "../../img/certs/sertifika7.png";
import sertifika7_thumb from "../../img/certs/sertifika7_thumb.png";
import sertifika8 from "../../img/certs/sertifika8.png";
import sertifika8_thumb from "../../img/certs/sertifika8_thumb.png";
import sertifika9 from "../../img/certs/sertifika9.png";
import sertifika9_thumb from "../../img/certs/sertifika9_thumb.png";
import sertifika10 from "../../img/certs/sertifika10.png";
import sertifika10_thumb from "../../img/certs/sertifika10_thumb.png";
import sertifika11 from "../../img/certs/sertifika11.png";
import sertifika11_thumb from "../../img/certs/sertifika11_thumb.png";

import tkc_sertifika from "../../img/tkc_sertifika.png";

import FloatinDivForNavbarMenu from "../FloatingDiv/FloatinDivForNavbarMenu";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      margin: theme.spacing(1),
      width: "85%",
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid lightblue",
    borderRadius: "6px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down("sm")]: {
      width: "85%",
      maxWidth: "400px",
    },
  },
}));

export default function AnimatedModal(props) {
  const isMale = props.cinsiyet === "1";

  // -- set -/+ ortanca
  let boyMessage = "";
  let unsignedBoy =
    typeof props?.boyOrtancaDeger === "number"
      ? Math.abs(Number(props?.boyOrtancaDeger) ?? 0)
      : 0;

  if (typeof props?.boyOrtancaDeger === "number") {
    if (props?.boyOrtancaDeger < 0) {
      boyMessage = "altında.";
    } else {
      boyMessage = "üstünde.";
    }
  } else {
    boyMessage = "tam ortanca değerde.";
  }

  let kiloMessage = "";
  let unsignedKilo =
    typeof props?.kiloOrtancaDeger === "number"
      ? Math.abs(Number(props?.kiloOrtancaDeger) ?? 0)
      : 0;

  if (typeof props?.kiloOrtancaDeger === "number") {
    if (props?.kiloOrtancaDeger < 0) {
      kiloMessage = "altında.";
    } else {
      kiloMessage = "üstünde.";
    }
  } else {
    kiloMessage = "tam ortanca değerde.";
  }

  const fullText =
    "Bugün itibarıyla " +
    props.yilYas +
    " yıl " +
    props.ayYas +
    " ay " +
    props.gunYas +
    " günlüksün." +
    "\n" +
    "\n" +
    "Senin isminde " +
    props.il +
    " ilinde " +
    props.ayniIsimdeIlSayi +
    ", Türkiye’de  " +
    props.ayniIsimdeTurkiyeSayi +
    " kişi var. " +
    "\n" +
    "\n" +
    props.il +
    " ilinde seninle aynı tarihte doğan " +
    props.ayniTarihDoganIlSayi +
    ", Türkiye’de " +
    props.ayniTarihDoganTurkiyeSayi +
    " kişi var." +
    "\n" +
    "\n" +
    "Senin yaş ve cinsiyetine göre boyun, ortanca değerin " +
    unsignedBoy +
    " cm " +
    boyMessage +
    "\n" +
    "\n" +
    "Senin yaş ve cinsiyetine göre kilon, ortanca değerin " +
    unsignedKilo +
    " kg " +
    kiloMessage;

  console.log("fulltext: ", fullText);

  // const text1Left = 160;
  // const text1Top = 90;

  // const text2Left = 320;
  // const text2Top = 120;

  // const text3Left = 210;
  // const text3Top = 160;

  // const text4Left = 500;
  // const text4Top = 420;
  const [textPositions, setTextPositions] = useState({
    text1Left: 160,
    text1Top: 90,
    text2Left: 320,
    text2Top: 120,
    text3Left: 210,
    text3Top: 160,
    text3Width: 280,
    text4Left: 500,
    text4Top: 420,
  });

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let str = props.ad;
  let words = str.split(" "); // split the string into an array of words
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); // capitalize the first letter of each word
  }
  let capitalizedStr = words.join(" "); // join the words back into a string

  /// to select cert
  const [selectedImage, setSelectedImage] = useState(sertifika1);

  const handleImageClick = (image) => {
    setSelectedImage(image);

    console.log("selected Image is: ", image);

    // Update the text positions based on the selected image
    if (image === sertifika1) {
      setTextPositions({
        text1Left: 160,
        text1Top: 90,
        text2Left: 320,
        text2Top: 120,
        text3Left: 210,
        text3Top: 160,
        text3Width: 280,
        text4Left: 500,
        text4Top: 420,
      });
    } else if (image === sertifika2) {
      setTextPositions({
        text1Left: 280,
        text1Top: 60,
        text2Left: 360,
        text2Top: 130,
        text3Left: 220,
        text3Top: 160,
        text3Width: 320,
        text4Left: 80,
        text4Top: 460,
      });
    } else if (image === sertifika3) {
      setTextPositions({
        text1Left: 200,
        text1Top: 170,
        text2Left: 320,
        text2Top: 220,
        text3Left: 180,
        text3Top: 260,
        text3Width: 420,
        text4Left: 450,
        text4Top: 440,
      });
    } else if (image === sertifika4) {
      setTextPositions({
        text1Left: 200,
        text1Top: 170,
        text2Left: 320,
        text2Top: 220,
        text3Left: 180,
        text3Top: 260,
        text3Width: 420,
        text4Left: 450,
        text4Top: 440,
      });
    } else if (image === sertifika5) {
      setTextPositions({
        text1Left: 200,
        text1Top: 150,
        text2Left: 320,
        text2Top: 200,
        text3Left: 180,
        text3Top: 240,
        text3Width: 420,
        text4Left: 410,
        text4Top: 420,
      });
    } else if (image === sertifika6) {
      setTextPositions({
        text1Left: 200,
        text1Top: 150,
        text2Left: 320,
        text2Top: 200,
        text3Left: 180,
        text3Top: 240,
        text3Width: 420,
        text4Left: 410,
        text4Top: 420,
      });
    } else if (image === sertifika7) {
      setTextPositions({
        text1Left: 200,
        text1Top: 125,
        text2Left: 320,
        text2Top: 175,
        text3Left: 180,
        text3Top: 215,
        text3Width: 420,
        text4Left: 410,
        text4Top: 420,
      });
    } else if (image === sertifika8) {
      setTextPositions({
        text1Left: 60,
        text1Top: 55,
        text2Left: 170,
        text2Top: 105,
        text3Left: 60,
        text3Top: 145,
        text3Width: 420,
        text4Left: 150,
        text4Top: 320,
      });
    } else if (image === sertifika9) {
      setTextPositions({
        text1Left: 200,
        text1Top: 125,
        text2Left: 320,
        text2Top: 175,
        text3Left: 180,
        text3Top: 215,
        text3Width: 420,
        text4Left: 490,
        text4Top: 400,
      });
    } else if (image === sertifika10) {
      setTextPositions({
        text1Left: 200,
        text1Top: 125,
        text2Left: 320,
        text2Top: 175,
        text3Left: 180,
        text3Top: 215,
        text3Width: 420,
        text4Left: 200,
        text4Top: 400,
      });
    } else if (image === sertifika11) {
      setTextPositions({
        text1Left: 200,
        text1Top: 125,
        text2Left: 320,
        text2Top: 175,
        text3Left: 180,
        text3Top: 215,
        text3Width: 420,
        text4Left: 200,
        text4Top: 380,
      });
    }
  };

  const isSelected = (image) => {
    return image === selectedImage;
  };

  return (
    <div>
      {/* <button className="button i-buttonSertifika" onClick={handleOpen}>
        Sertifikanı Oluştur
      </button> */}
      <FloatinDivForNavbarMenu img={tkc_sertifika} onClick={handleOpen} />
      {/* <Button
        variant="contained"
        radius="10px"
        textTransform="none"
        color="primary"
        onClick={handleOpen}
      >
        Sertifikanı Oluştur
      </Button> */}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 style={{ textAlign: "center", fontSize: "10pt" }}>
              Sertifikalar
            </h2>
            <div>
              <button
                onClick={() => handleImageClick(sertifika1)}
                style={{
                  boxShadow: isSelected(sertifika1)
                    ? "0 0 8px rgba(0, 255, 0, 0.8) inset"
                    : "",
                }}
              >
                <img src={sertifika1_thumb} alt="Thumb 1" />
              </button>
              <button
                onClick={() => handleImageClick(sertifika2)}
                style={{
                  boxShadow: isSelected(sertifika2)
                    ? "0 0 8px rgba(0, 255, 0, 0.8) inset"
                    : "",
                }}
              >
                <img src={sertifika2_thumb} alt="Thumb 2" />
              </button>
              <button
                onClick={() => handleImageClick(sertifika3)}
                style={{
                  boxShadow: isSelected(sertifika3)
                    ? "0 0 8px rgba(0, 255, 0, 0.8) inset"
                    : "",
                }}
              >
                <img src={sertifika3_thumb} alt="Thumb 3" />
              </button>
              <button
                onClick={() => handleImageClick(sertifika4)}
                style={{
                  boxShadow: isSelected(sertifika4)
                    ? "0 0 8px rgba(0, 255, 0, 0.8) inset"
                    : "",
                }}
              >
                <img src={sertifika4_thumb} alt="Thumb 3" />
              </button>
              <button
                onClick={() => handleImageClick(sertifika5)}
                style={{
                  boxShadow: isSelected(sertifika5)
                    ? "0 0 8px rgba(0, 255, 0, 0.8) inset"
                    : "",
                }}
              >
                <img src={sertifika5_thumb} alt="Thumb 3" />
              </button>
              <button
                onClick={() => handleImageClick(sertifika6)}
                style={{
                  boxShadow: isSelected(sertifika6)
                    ? "0 0 8px rgba(0, 255, 0, 0.8) inset"
                    : "",
                }}
              >
                <img src={sertifika6_thumb} alt="Thumb 3" />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleImageClick(sertifika7)}
                style={{
                  boxShadow: isSelected(sertifika7)
                    ? "0 0 8px rgba(0, 255, 0, 0.8) inset"
                    : "",
                }}
              >
                <img src={sertifika7_thumb} alt="Thumb 3" />
              </button>

              <button
                onClick={() => handleImageClick(sertifika8)}
                style={{
                  boxShadow: isSelected(sertifika8)
                    ? "0 0 8px rgba(0, 255, 0, 0.8) inset"
                    : "",
                }}
              >
                <img src={sertifika8_thumb} alt="Thumb 3" />
              </button>

              <button
                onClick={() => handleImageClick(sertifika9)}
                style={{
                  boxShadow: isSelected(sertifika9)
                    ? "0 0 8px rgba(0, 255, 0, 0.8) inset"
                    : "",
                }}
              >
                <img src={sertifika9_thumb} alt="Thumb 3" />
              </button>

              <button
                onClick={() => handleImageClick(sertifika10)}
                style={{
                  boxShadow: isSelected(sertifika10)
                    ? "0 0 8px rgba(0, 255, 0, 0.8) inset"
                    : "",
                }}
              >
                <img src={sertifika10_thumb} alt="Thumb 3" />
              </button>

              <button
                onClick={() => handleImageClick(sertifika11)}
                style={{
                  boxShadow: isSelected(sertifika11)
                    ? "0 0 8px rgba(0, 255, 0, 0.8) inset"
                    : "",
                }}
              >
                <img src={sertifika11_thumb} alt="Thumb 3" />
              </button>
            </div>

            <p style={{ fontSize: "10pt" }}>
              Sertifika yazılarını büyültüp küçültebilir ve yerlerini
              düzenleyebilirsin.
            </p>

            <div className="imageWithTex">
              <ImageWithText
                key={selectedImage} // to rerender with new state
                imageUrl={selectedImage}
                text={capitalizedStr}
                fullText={fullText}
                fontColor={isMale ? "#0099ff" : "#ff0080"}
                fontFamily="Bradley Hand, cursive, sans-serif"
                text1Left={textPositions.text1Left}
                text1Top={textPositions.text1Top}
                text2Left={textPositions.text2Left}
                text2Top={textPositions.text2Top}
                text3Left={textPositions.text3Left}
                text3Top={textPositions.text3Top}
                text3Width={textPositions.text3Width}
                text4Left={textPositions.text4Left}
                text4Top={textPositions.text4Top}
              />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
