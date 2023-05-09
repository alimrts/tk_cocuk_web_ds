import React from "react";
import "./Tuik.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/g3.png";
import profilePic2 from "../../img/g3.png";
import profilePic3 from "../../img/g3.png";
import profilePic4 from "../../img/g4.png";
import SwiperCore, { Navigation } from "swiper/core";
import tkc_tuik_timeline from "../../img/tkc_tuik_timeline.png";

import tkc_kuslar1 from "../../img/tkc_kuslar1.png";

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
    Ülkemize ait çeşitli bilgileri toplar, topladığı bu bilgilerle hesaplamalar
    yapar ve açıklar.
    <br />
    - Ülkemizde kaç kişi yaşıyor, bunların ne kadarı çocuk, yaşadığım yerde kaç
    kişi var, benim adım kaç kişide var gibi nüfus bilgilerini <br />
    - Ülkemizde kaç okul, kaç öğrenci var gibi eğitim bilgilerini <br />-
    Ülkemizde kaç doktor ve kaç hastane var gibi sağlık bilgilerini
  </span>
);

const text2 = (
  <span>
    - Cep telefonunu ve İnterneti ne kadar kullanıyoruz gibi teknoloji
    bilgilerini
    <br />
    - Trafikte kaç araç var, hangi markadan kaç otomobil var, yollarımızın
    uzunluğu ne kadar gibi ulaştırma bilgilerini
    <br />- ve daha pek çok merak ettiğin bilgiyi TÜİK’ten öğrenebilirsin.
  </span>
);

const text3 = (
  <span>
    TÜİK ayrıca, ülkemizdeki diğer kurumlara ve uluslararası kuruluşlara
    istatistik üretimi ile ilgili çalışmalarda da yardımcı olur.
  </span>
);

const Tuik = () => {
  const icerikler = [
    {
      header: "TÜİK Ne İş Yapar?",
      review: text1,
    },
    {
      header: "TÜİK Ne İş Yapar?",
      review: text2,
    },
    {
      header: "TÜİK Ne İş Yapar?",
      review: text3,
    },
  ];

  return (
    // <div className="t-wrapper" id="tuik">
    //   <div className="t-heading">
    //     <span>
    //       TÜİK'i Tanıyalım.. <br />{" "}
    //     </span>
    //     <span>TÜİK </span>
    //     <span>Nedir?</span>
    //     <div
    //       className="blur t-blur1"
    //       style={{ background: "var(--purple)" }}
    //     ></div>
    //     <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
    //   </div>
    //   <Swiper
    //     // install Swiper modules
    //     {...swiperProps}
    //     modules={[Pagination]}
    //     slidesPerView={1}
    //     pagination={{ clickable: true }}
    //   >
    //     {icerikler.map((icerik, index) => {
    //       return (
    //         <SwiperSlide key={index}>
    //           <div className="tuik">
    //             {/* <img src={client.img} alt="" /> */}
    //             <span
    //               style={{
    //                 color: "orange",
    //                 fontSize: "18pt",
    //               }}
    //             >
    //               {icerik.title}
    //               <br />
    //               <br />
    //             </span>
    //             <span>{icerik.review}</span>
    //           </div>
    //         </SwiperSlide>
    //       );
    //     })}
    //   </Swiper>
    //   <div className="swiper-button-prev">
    //     <svg
    //       id="right-arrow"
    //       viewBox="0 0 24 24"
    //       xmlns="http://www.w3.org/2000/svg"
    //       style={{ transform: "rotate(-180deg)", zIndex: 2 }}
    //     >
    //       <path d="M6 18L18 12L6 6V18Z" fill="orange" />
    //     </svg>
    //   </div>

    //   <div className="swiper-button-next">
    //     <svg
    //       id="right-arrow"
    //       viewBox="0 0 24 24"
    //       xmlns="http://www.w3.org/2000/svg"
    //       style={{ zIndex: 2 }}
    //     >
    //       <path d="M6 18L18 12L6 6V18Z" fill="orange" />
    //     </svg>
    //   </div>
    // </div>
    <div className="container-istatistik" id="tuik">
      <div className="left-column">
        <img src={tkc_tuik_timeline} alt="" />
      </div>
      <div className="right-column">
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
        >
          {/* <img src={tkc_kuslar1} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Tuik;
