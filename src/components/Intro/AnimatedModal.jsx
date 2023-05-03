import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ImageWithText from "./ImageWithText";
import sertifika1 from "../../img/sertifika1.png";
import tkc_sertifika from "../../img/tkc_sertifika.png";
import FloatinDivForNavbarMenu from "../FloatingDiv/FloatinDivForNavbarMenu";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid lightblue",
    borderRadius: "6px",

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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

            <p style={{ fontSize: "10pt" }}>
              Sertifika yazılarını büyültüp küçültebilir ve yerlerini
              düzenleyebilirsin.
            </p>

            <ImageWithText
              imageUrl={sertifika1}
              text={capitalizedStr}
              fullText={fullText}
              fontColor={isMale ? "#0099ff" : "#ff0080"}
              fontFamily="Bradley Hand, cursive, sans-serif"
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
