import React from "react";
import "./Cocukhaklari.css";
import Grid from "./Grid";
// import NavbarRegister from "../../components/Navbar/NavbarRegister";

import NavbarRegister from "../../components/Navbar/NavbarCocukSdg";

import tkc_kuslar2_edit from "../../img/tkc_kuslar2_edit.png";

/// for first texts
import "../../components/Tuik/Tuik.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

// Initialize the Navigation module
SwiperCore.use([Navigation]);
const swiperProps = {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
};

const text1 = (
  <span>
    Bu sayfada olduğuna göre sanırım on sekiz yaşın altındasın ve henüz on sekiz
    yaşın altındaysan benim gibi sana da çocuk diyeceğim.
  </span>
);

const text2 = (
  <span>
    Sadece çocuk olduğumuz için doğuştan ediniğimiz ve her çocuk için geçerli
    olan bazı haklar var. <br />
    Bu haklar, çocukların daha iyi koşullarda yaşamasını, korunmasını ve
    düşüncelerini özgürce ifade edebilmesini amaçlıyor.
  </span>
);

const text3 = (
  <span>
    Birleşmiş Milletler Çocuk Haklarına Dair Sözleşme, Birleşmiş Milletler Genel
    Kurulu tarafından 20 Kasım 1989 yılında kabul edilmiş.
    <br /> Haydi gel, şimdi haklarımızın neler olduğunu birlikte öğrenelim.
  </span>
);

const Cocukhaklari = () => {
  const icerikler = [
    {
      header: "Çocuk Hakları",
      review: text1,
    },
    {
      header: "Çocuk Hakları",
      review: text2,
    },
    {
      header: "Çocuk Hakları",
      review: text3,
    },
  ];

  return (
    <>
      {" "}
      <NavbarRegister />
      <div className="t-heading">
        {/* <span>
          Haklarımızı Öğrenelim... <br />{" "}
        </span> */}
        <span>Çocuk Hakları </span>
        <span>Nedir?</span>
        <span style={{ fontSize: "14pt" }}>
          <br />
          Açıklamalar için çocuk hakları logolarına tıklayınız.
        </span>
      </div>
      <div style={{ marginTop: "1 rem" }}>
        {/* <div
          style={{
            backgroundImage: `url(${tkc_kuslar2_edit})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "22rem",
            height: "22rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "58rem",
            marginTop: "-26rem",
          }}
        /> */}
        <div
          className="right-column"
          style={{ marginLeft: "7rem", marginTop: "1rem" }}
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
                    {/* <div class="istatistik-bg-image"> */}
                    <div className="istatistik-card">
                      <span
                        className="istatistik-card-text"
                        style={{ color: "orange" }}
                      >
                        {info.header}
                        <br />
                        <br />
                      </span>
                      <span
                        className="istatistik-card-text"
                        style={{ color: "grey" }}
                      >
                        {info.review}
                      </span>{" "}
                    </div>

                    {/* </div> */}
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
        </div>
        <Grid />
      </div>
    </>
  );
};

export default Cocukhaklari;
