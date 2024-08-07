import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import tkc_istatistik from "../../img/Intro_images/tkc_istatistik.png";

import FloatinDivForAltMenu from "../FloatingDiv/FloatinDivForAltMenu";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

import LoadingIntro from "./LoadingIntro";

import texts from "./texts_intro.json";

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
      maxWidth: "900px",
    },
  },
  variablesInfo: {
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
  },
  boxes1: {
    display: "flex",
    backgroundColor: "lightgray",
    width: "10rem",
    height: "4.5rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  boxes2: {
    display: "flex",
    backgroundColor: "#F8B12F",
    width: "12rem",
    height: "4.5rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  boxes3: {
    display: "flex",
    backgroundColor: "lightblue",
    width: "12rem",
    height: "4.5rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  boxes4: {
    display: "flex",
    backgroundColor: "lightgreen",
    width: "10rem",
    height: "4.5rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
      { dogumYil: 1950, sira: 368 },
      { dogumYil: 1951, sira: 371 },
      { dogumYil: 1952, sira: 386 },
      { dogumYil: 1953, sira: 360 },
      { dogumYil: 1954, sira: 373 },
      { dogumYil: 1955, sira: 354 },
      { dogumYil: 1956, sira: 370 },
      { dogumYil: 1957, sira: 384 },
      { dogumYil: 1958, sira: 356 },
      { dogumYil: 1959, sira: 366 },
      { dogumYil: 1960, sira: 355 },
      { dogumYil: 1961, sira: 376 },
      { dogumYil: 1962, sira: 379 },
      { dogumYil: 1963, sira: 378 },
      { dogumYil: 1964, sira: 358 },
      { dogumYil: 1965, sira: 444 },
      { dogumYil: 1966, sira: 359 },
      { dogumYil: 1967, sira: 364 },
      { dogumYil: 1968, sira: 377 },
      { dogumYil: 1969, sira: 360 },
      { dogumYil: 1970, sira: 382 },
      { dogumYil: 1971, sira: 369 },
      { dogumYil: 1972, sira: 357 },
      { dogumYil: 1973, sira: 389 },
      { dogumYil: 1974, sira: 371 },
      { dogumYil: 1975, sira: 365 },
      { dogumYil: 1976, sira: 354 },
      { dogumYil: 1977, sira: 367 },
      { dogumYil: 1978, sira: 373 },
      { dogumYil: 1979, sira: 379 },
      { dogumYil: 1980, sira: 388 },
      { dogumYil: 1981, sira: 391 },
      { dogumYil: 1982, sira: 375 },
      { dogumYil: 1983, sira: 364 },
      { dogumYil: 1984, sira: 354 },
      { dogumYil: 1985, sira: 370 },
      { dogumYil: 1986, sira: 380 },
      { dogumYil: 1987, sira: 357 },
      { dogumYil: 1988, sira: 368 },
      { dogumYil: 1989, sira: 359 },
      { dogumYil: 1990, sira: 385 },
      { dogumYil: 1991, sira: 372 },
      { dogumYil: 1992, sira: 366 },
      { dogumYil: 1993, sira: 390 },
      { dogumYil: 1994, sira: 358 },
      { dogumYil: 1995, sira: 376 },
      { dogumYil: 1996, sira: 369 },
      { dogumYil: 1997, sira: 355 },
      { dogumYil: 1998, sira: 301 },
      { dogumYil: 1999, sira: 360 },
      { dogumYil: 2000, sira: 379 },
      { dogumYil: 2001, sira: 371 },
      { dogumYil: 2002, sira: 364 },
      { dogumYil: 2003, sira: 388 },
      { dogumYil: 2004, sira: 357 },
      { dogumYil: 2005, sira: 370 },
      { dogumYil: 2006, sira: 385 },
      { dogumYil: 2007, sira: 354 },
      { dogumYil: 2008, sira: 367 },
      { dogumYil: 2009, sira: 373 },
      { dogumYil: 2010, sira: 376 },
      { dogumYil: 2011, sira: 359 },
      { dogumYil: 2012, sira: 386 },
      { dogumYil: 2013, sira: 366 },
      { dogumYil: 2014, sira: 391 },
      { dogumYil: 2015, sira: 375 },
      { dogumYil: 2016, sira: 354 },
      { dogumYil: 2017, sira: 368 },
      { dogumYil: 2018, sira: 377 },
      { dogumYil: 2019, sira: 364 },
      { dogumYil: 2020, sira: 389 },
      { dogumYil: 2021, sira: 361 },
      { dogumYil: 2022, sira: 370 },
    ],

    isminIlkVerildigiYil: 1950,
    isminVerilisSirasiEnDusukYil: 1998,
    isminVerilisSirasiEnYuksekYil: 1965,
    isminEnSonVerildigiYil: 2022,
  };

  const [minValue, setMinValue] = useState(null);
  const [maxValue, setMaxValue] = useState(null);

  const turkishUpperCase = (str) => {
    return str.replace(/i/g, "İ").replace(/ı/g, "I").toUpperCase();
  };

  const getYearFromDataPointIndex = (dataPointIndex) => {
    const yearEntry = dummyData.yilSiraList[dataPointIndex];
    return yearEntry ? yearEntry.dogumYil : "";
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
      enabled: false, // Disable data labels on the chart
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: turkishUpperCase(props.ad ?? "") + " " + texts.isminSirasi,
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
      hover: {
        size: 6,
      },
    },
    xaxis: {
      categories: dummyData.yilSiraList.map((item) => item.dogumYil),
      title: {
        text: texts.yil,
      },
      labels: {
        formatter: function (value) {
          return value % 10 === 0 ? value : "";
        },
      },
    },
    yaxis: {
      title: {
        text: texts.sira,
      },
      tickAmount: 10,
      labels: {
        formatter: function (value) {
          return Math.floor(value / 10) * 10;
        },
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
    tooltip: {
      shared: true,
      intersect: false,
      x: {
        formatter: function (value, { seriesIndex, dataPointIndex, w }) {
          return getYearFromDataPointIndex(dataPointIndex) || value;
        },
      },
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  });

  const [series, setSeries] = useState([]);

  const getInfo = () => {
    if (props.cinsiyet != null) {
      // .get(process.env.REACT_APP_PROXY_URL + "/dashboard", {
      axios
        .post(
          process.env.REACT_APP_PROXY_FOR_NIP_URL +
            "/External/GetYilCocukIsimListWithParams",
          {
            isim: turkishUpperCase(props.ad ?? ""),
            cinsiyet: parseInt(props.cinsiyet, 10),
          }
        )
        .then((dashboardResponse) => {
          const data = dashboardResponse.data;

          const filteredData = data.yilSiraList.sort(
            (a, b) => a.dogumYil - b.dogumYil
          );

          const minY = Math.min(...filteredData.map((item) => item.sira));
          const maxY = Math.max(...filteredData.map((item) => item.sira));

          setMinValue(minY);
          setMaxValue(maxY);

          setOptions((prevOptions) => ({
            ...prevOptions,
            xaxis: {
              ...prevOptions.xaxis,
              categories: filteredData.map((item) => item.dogumYil),
            },
            yaxis: {
              ...prevOptions.yaxis,
              min: minY,
              max: maxY,
            },
          }));
          setSeries([
            {
              name: texts.sira,
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

          const minY = Math.min(
            ...dummyData.yilSiraList.map((item) => item.sira)
          );
          const maxY = Math.max(
            ...dummyData.yilSiraList.map((item) => item.sira)
          );

          setMinValue(minY);
          setMaxValue(maxY);

          setOptions((prevOptions) => ({
            ...prevOptions,
            xaxis: {
              ...prevOptions.xaxis,
              categories: dummyData.yilSiraList.map((item) => item.dogumYil),
            },
            yaxis: {
              ...prevOptions.yaxis,
              min: minY,
              max: maxY,
            },
          }));
          setSeries([
            {
              name: texts.sira,
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
            <div style={{ marginLeft: "10rem" }}>
              <button className="certCloseBtn" onClick={handleClose}>
                X
              </button>
            </div>

            <h2
              style={{ textAlign: "center", fontSize: "12pt", color: "orange" }}
            >
              {texts.istatistikler}
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
                    width={900}
                  />
                </div>
                <div
                  className={classes.variablesInfo}
                  style={{ marginTop: "20px" }}
                >
                  <div className={classes.boxes1}>
                    <p style={{ fontSize: "12pt" }}>
                      {texts.isminIlkVerildigiYil} <br />
                      {variables.isminIlkVerildigiYil}
                    </p>
                  </div>
                  <div className={classes.boxes2}>
                    <p style={{ fontSize: "12pt" }}>
                      {texts.isminVerilisSirasiEnDusukYil}
                      <br />
                      {variables.isminVerilisSirasiEnDusukYil}
                      {" - "}
                      {texts.sira}
                      {": "}
                      {minValue}
                    </p>
                  </div>
                  <div className={classes.boxes3}>
                    <p style={{ fontSize: "12pt" }}>
                      {texts.isminVerilisSirasiEnYuksekYil}
                      <br />
                      {variables.isminVerilisSirasiEnYuksekYil} {" - "}
                      {texts.sira}
                      {": "}
                      {maxValue}
                    </p>
                  </div>
                  <div className={classes.boxes4}>
                    <p style={{ fontSize: "12pt" }}>
                      {texts.isminEnSonVerildigiYil}
                      <br />
                      {variables.isminEnSonVerildigiYil}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
