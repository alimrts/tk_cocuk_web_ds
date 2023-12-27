import React from "react";
import "./Tuik.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import tkc_tuik_timeline from "../../img/tkc_tuik_timeline.png";
import tkc_kuslar1 from "../../img/tkc_kuslar1.png";

import tuik1i from "../../img/tuik_cards/tuik1.png";
import tuik2i from "../../img/tuik_cards/tuik2.png";
import tuik3i from "../../img/tuik_cards/tuik3.png";
import tuik4i from "../../img/tuik_cards/tuik4.png";

// Initialize the Navigation module
SwiperCore.use([Navigation]);
const swiperProps = {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
};

const tuik1 = <img src={tuik1i} width="640px" alt="" />;
const tuik2 = <img src={tuik2i} width="640px" alt="" />;
const tuik3 = <img src={tuik3i} width="640px" alt="" />;
const tuik4 = <img src={tuik4i} width="640px" alt="" />;

const Tuik = () => {
  const icerikler = [
    {
      image: tuik1,
    },
    {
      image: tuik2,
    },
    {
      image: tuik3,
    },
    {
      image: tuik4,
    },
  ];

  return (
    <div className="container-istatistik" id="tuik">
      <div className="left-column">
        <img src={tkc_tuik_timeline} alt="" />
      </div>
      <div
        className="right-column"
        style={{ width: "700px", marginRight: "20rem" }}
      >
        <div>
          <Swiper
            {...swiperProps}
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {icerikler.map((info, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      aligntItems: "center",
                      marginBottom: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    {info.image}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="swiper-button-prev">
          <svg
            id="right-arrow"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(-180deg)", zIndex: 8 }}
          >
            <path d="M6 18L18 12L6 6V18Z" fill="#0099ff" />
          </svg>
        </div>
        <div className="swiper-button-next">
          <svg
            id="right-arrow"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 8 }}
          >
            <path d="M6 18L18 12L6 6V18Z" fill="#0099ff" />
          </svg>
        </div>
        <div
          style={{
            backgroundImage: `url(${tkc_kuslar1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "18rem",
            height: "8rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "-4rem",
            marginTop: "-4rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Tuik;
