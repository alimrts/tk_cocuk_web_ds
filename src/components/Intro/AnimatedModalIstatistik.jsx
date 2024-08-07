import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import tkc_istatistik from "../../img/Intro_images/tkc_istatistik.png";

import texts from "./texts_intro.json";
import FloatinDivForAltMenu from "../FloatingDiv/FloatinDivForAltMenu";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

import LoadingIntro from "./LoadingIntro";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90vw",
    height: "90vh",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    // overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      width: "94vw",
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid lightblue",
    borderRadius: "6px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
    overflowY: "auto", // Add overflow-y property
    maxHeight: "calc(100% - 88px)",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      maxWidth: "720px",
    },
  },
}));

export default function AnimatedModalIstatistik(props) {
  // const isMale = props.cinsiyet === "1";

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [loading, setLoading] = useState(true);

  const [variables, setVariables] = useState({
    isminIlkVerildigiYil: 1950,
    isminVerilisSirasiEnDusukYil: 1998,
    isminVerilisSirasiEnYuksekYil: 1965,
    isminEnSonVerildigiYil: 2022,
  });

  const dummyData = {
    yilSiraList: [
      { dogumYil: 1950, sira: 467 },
      { dogumYil: 1960, sira: 507 },
      { dogumYil: 1970, sira: 457 },
      { dogumYil: 1980, sira: 283 },
      { dogumYil: 1990, sira: 122 },
      { dogumYil: 2000, sira: 190 },
      { dogumYil: 2010, sira: 433 },
      { dogumYil: 2020, sira: 398 },
    ],
    isminIlkVerildigiYil: 1950,
    isminVerilisSirasiEnDusukYil: 1998,
    isminVerilisSirasiEnYuksekYil: 1965,
    isminEnSonVerildigiYil: 2022,
  };

  const turkishUpperCase = (str) => {
    return str.replace(/i/g, "İ").replace(/ı/g, "I").toUpperCase();
  };

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#77B6EA", "#545454"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text:
        turkishUpperCase(props.ad ?? "") +
        " İsminin Yıllara Göre Veriliş Sırası",
      align: "left",
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: [],
      title: {
        text: "Yıl",
      },
    },
    yaxis: {
      title: {
        text: "Sıra",
      },
      min: 0,
      max: 600,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  });

  const [series, setSeries] = useState([]);

  const getInfo = () => {
    if (props.cinsiyet != null) {
      // .get(process.env.REACT_APP_PROXY_URL + "/dashboard", {
      axios
        .post(
          "https://nip.tuik.gov.tr/External/GetYilCocukIsimListWithParams",
          {
            isim: turkishUpperCase(props.ad ?? ""),
            cinsiyet: parseInt(props.cinsiyet, 10),
          }
        )
        .then((dashboardResponse) => {
          const data = dashboardResponse.data;

          const filteredData = data.yilSiraList
            .filter((item) => item.dogumYil % 10 === 0)
            .sort((a, b) => a.dogumYil - b.dogumYil);

          setOptions((prevOptions) => ({
            ...prevOptions,
            xaxis: {
              ...prevOptions.xaxis,
              categories: filteredData.map((item) => item.dogumYil),
            },
          }));
          setSeries([
            {
              name: "Sıra",
              data: filteredData.map((item) => item.sira),
            },
          ]);

          setVariables({
            isminIlkVerildigiYil:
              data.isminIlkVerildigiYil || dummyData.isminIlkVerildigiYil,
            isminVerilisSirasiEnDusukYil:
              data.isminVerilisSirasiEnDusukYil ||
              dummyData.isminVerilisSirasiEnDusukYil,
            isminVerilisSirasiEnYuksekYil:
              data.isminVerilisSirasiEnYuksekYil ||
              dummyData.isminVerilisSirasiEnYuksekYil,
            isminEnSonVerildigiYil:
              data.isminEnSonVerildigiYil || dummyData.isminEnSonVerildigiYil,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error getting istatistik data:", error);
          setOptions((prevOptions) => ({
            ...prevOptions,
            xaxis: {
              ...prevOptions.xaxis,
              categories: dummyData.yilSiraList.map((item) => item.dogumYil),
            },
          }));
          setSeries([
            {
              name: "Sıra",
              data: dummyData.yilSiraList.map((item) => item.sira),
            },
          ]);
          setVariables(dummyData);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    getInfo();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FloatinDivForAltMenu img={tkc_istatistik} onClick={handleOpen} />
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
            <button className="certCloseBtn" onClick={handleClose}>
              X
            </button>
            <h2
              style={{ textAlign: "center", fontSize: "12pt", color: "orange" }}
            >
              İstatistikler
            </h2>
            {loading ? (
              <LoadingIntro />
            ) : (
              <>
                <div>
                  <ReactApexChart
                    options={options}
                    series={series}
                    type="line"
                    height={400}
                    width={700}
                  />
                </div>
                <div className="variables-info" style={{ marginTop: "20px" }}>
                  <p>
                    İsmin İlk Verildiği Yıl: {variables.isminIlkVerildigiYil}
                  </p>
                  <p>
                    İsmin Veriliş Sırası En Düşük Yıl:{" "}
                    {variables.isminVerilisSirasiEnDusukYil}
                  </p>
                  <p>
                    İsmin Veriliş Sırası En Yüksek Yıl:{" "}
                    {variables.isminVerilisSirasiEnYuksekYil}
                  </p>
                  <p>
                    İsmin En Son Verildiği Yıl:{" "}
                    {variables.isminEnSonVerildigiYil}
                  </p>
                </div>
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
