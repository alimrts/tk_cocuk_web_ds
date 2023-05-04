import React from "react";
import "./Istatistik.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";

import sutunGrafik from "../../img/sutun_grafik.jpg";
import pastaGrafik from "../../img/pasta_grafik.jpg";
import cizgiGrafik from "../../img/cizgi_grafik.jpg";
import SwiperCore, { Navigation } from "swiper/core";
import tkc_istatistik_timeline from "../../img/tkc_istatistik_timeline.png";
// import tkc_istatistik_icerik_bg from "../../img/tkc_istatistik_icerik_bg.png";
import tkc_kuslar1 from "../../img/tkc_kuslar1.png";

// Initialize the Navigation module
SwiperCore.use([Navigation]);

const swiperProps = {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
};

let bullet;
bullet = "\u007F" + "\u007F" + "\u2022";
const text1 = (
  <span style={{ fontSize: "14pt" }}>
    İstatistik, çevremizdeki olup bitenin sayılarla ifadesidir. Belirli bir
    araştırmadan toplanan sayısal değerler ile bu sayısal değerlerden
    yararlanarak hazırlanan tablo, şekil ve grafiklerdir.
  </span>
);

const text2 = (
  <span style={{ fontSize: "14pt" }}>
    İstatistik ayrıca, geçmişin ve şimdiki durumu çeşitli sayısal tekniklerle
    analiz ederek gelecek hakkında karar vermeyi sağlayan bir bilim dalıdır.
    <br /> <br /> Örneğin,
    <br /> {bullet} Evde yaşayan kişi sayısı
    <br /> {bullet} Okuldaki sınıf sayısı
    <br /> {bullet} Trafikteki otomobil sayısı
    <br /> {bullet} Günlük tüketilen ekmek sayısı
  </span>
);

const text3 = (
  <span style={{ fontSize: "14pt" }}>
    Bir amaca yönelik yapılan sayım, anket, araştırma veya gözlem sonucunda elde
    edilen değerlerin her birine veri denir.
    <br /> <br /> Bir okuldaki öğrencilerin; yaş, kilo ve boylarının incelenmesi
    için bir araştırma sonucunda elde edilen yaş, kilo ve boy değerlerinin her
    biri araştırmanın verileridir.
  </span>
);

const text4 = (
  <span style={{ fontSize: "14pt" }}>
    Toplanan verilerin işlenmesi ve değerlendirilmesi sonucu elde edilen
    değerlere bilgi denir.
    <br /> <br />
    Bilgi verinin işlenmiş halidir.
    <br /> <br /> Örneğin, bir okulda yapılan araştırma sonucunda ulaşılan
    bilgiye örnek olarak; 12 yaşındaki kız öğrencilerin %40’ının 150 cm boyunda
    ve 45 kg ağırlığında olduğu gösterilebilir.
  </span>
);

const text5 = (
  <span style={{ fontSize: "14pt" }}>
    Bir olayın tekrarlanma sıklığını gösteren verilerden oluşan tabloya sıklık
    (frekans) tablosu denir.
    <br />
    <br />
    Örnek 1: <br />
    {bullet} 10 arkadaşımızın ağırlıklarını ölçelim. <br />
    {bullet} Çıkan değerler; 20, 23, 25, 28, 21, 20, 25, 22, 25, 27 kg olsun.{" "}
    <br />
    {bullet} Önce bu değerler aşağıdaki gibi küçükten büyüğe sıralanır.
    <br />
    {bullet} 20 20 21 22 23 25 25 25 27 28 <br />
    {bullet} Verileri incelediğimizde; ağırlığı 25 kg olan 3 kişi olduğu
    görülür.
    <br />
    {bullet} Buradaki 3 sayısı frekansı gösterir.
    <br />
  </span>
);

const tableStyle = {
  borderCollapse: "collapse",
  margin: "20px",
};

const headerCellStyle = {
  backgroundColor: "#f5eccd",
  padding: "10px",
  border: "1px solid #999",
};

const cellStyle = {
  width: "200px",
  padding: "10px",
  paddingLeft: "10px",
  border: "1px solid #999",
};

const tableObject = (
  <table style={tableStyle}>
    <thead>
      <tr>
        <th style={headerCellStyle}>Spor Dalı</th>
        <th style={headerCellStyle}>Kişi Sayısı</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={cellStyle}>Basketbol</td>
        <td style={cellStyle}>36</td>
      </tr>
      <tr>
        <td style={cellStyle}>Voleybol</td>
        <td style={cellStyle}>27</td>
      </tr>
      <tr>
        <td style={cellStyle}>Tenis</td>
        <td style={cellStyle}>45</td>
      </tr>
      <tr>
        <td style={cellStyle}>Futbol</td>
        <td style={cellStyle}>54</td>
      </tr>
    </tbody>
  </table>
);

const text6 = (
  <>
    {" "}
    <span style={{ fontSize: "14pt" }}>
      Örnek 2: <br />
      Okulumuzdaki öğrencilerin en sevdiği spor türlerine ait sıklık tablosunun
      aşağıdaki şekilde olduğunu düşünürsek, okulumuzdaki en sevilen sporun
      futbol, frekansının 54 olduğu görülür.
    </span>
    {tableObject}
  </>
);

const text7 = (
  <>
    {" "}
    <span style={{ fontSize: "14pt" }}>
      Aritmetik ortalama, bir sayı dizisindeki verilerin toplamının veri
      sayısına bölünmesi ile elde edilen değerdir. <br /> <br />
      {bullet} Bir ailede bulunan fertlerin yaşları 36, 40, 14, 4, 6 olsun.{" "}
      <br />
      {bullet} Bu sayı dizisinde veri sayısı 5’tir
      <br />
      {bullet} 36 + 40 + 14 + 4 + 6 = 100
      <br />
      {bullet} Aritmetik ortalama = 100 ÷ 5 = 20’dir
    </span>
  </>
);

const text8 = (
  <>
    {" "}
    <span style={{ fontSize: "14pt" }}>
      Sayı dizisi, büyükten küçüğe veya küçükten büyüğe sıralandıktan sonra,
      dizinin ortasındaki değere medyan denir.
      <br />
      <br />
      {bullet} Bir marketteki dondurma fiyatları 6, 12, 15, 4, 8 TL’dir
      <br />
      {bullet} Önce bu değerler küçükten büyüğe sıralanır (4 6 8 12 15)
      <br />
      {bullet} Ortada yer alan 8 değeri medyandır
    </span>
  </>
);

const text9 = (
  <>
    {" "}
    <span style={{ fontSize: "14pt" }}>
      Bir sayı dizisinde en çok tekrarlanan değerdir.
      <br /> <br />
      Örnek:
      <br />
      {bullet} 10 arkadaşımızın ağırlıklarını ölçelim. <br />
      {bullet} Çıkan değerler; 20, 23, 25, 28, 21, 20, 25, 22, 25, 27 kg olsun.{" "}
      <br />
      {bullet} Önce bu değerler aşağıdaki gibi küçükten büyüğe sıralanır.
      <br />
      {bullet} 20 20 21 22 23 25 25 25 27 28
      <br />
      {bullet} Verileri incelediğimizde; en çok tekrarlanan değerin 25 olduğu
      görülür.
      <br />
      {bullet} En çok tekrarlanan 25 değerine mod (tepe değeri) denir.
    </span>
  </>
);

const text10 = (
  <>
    {" "}
    <span style={{ fontSize: "14pt" }}>
      Veriler arasında karşılaştırma yapmaya yarayan şekle grafik denir.
      <br />
      Veri, grafikle gösterildiğinde daha kolay anlaşılabilir.
      <br /> <br />
      Aşağıdakiler, en çok kullanılan grafik türleridir: <br />
      {bullet} Sütun grafik <br />
      {bullet} Pasta grafik <br /> {bullet} Çizgi grafik
    </span>
  </>
);

const text11 = (
  <>
    {" "}
    <span style={{ fontSize: "14pt" }}>
      Verilerin sütun şeklinde gösterildiği grafik türüne sütun grafiği denir.
      <br />
      {bullet} Verinin değeri arttıkça sütunların yüksekliği de artar.
      <br />
      {bullet} Sütun grafiği yatay veya dikey olabilir.
      <br />
      <br />
    </span>
    <img src={sutunGrafik} alt="sutun_grafik" />
  </>
);

const text12 = (
  <>
    {" "}
    <span style={{ fontSize: "14pt" }}>
      Verilerin, pastanın dilimleri şeklinde gösterildiği grafik türüne pasta
      grafiği denir.
      <br />
      {bullet} Verinin değeri arttıkça pastanın diliminin büyüklüğü de artar.
      <br />
      <br />
    </span>
    <img src={pastaGrafik} alt="pasta_grafik" />
  </>
);

const text13 = (
  <>
    {" "}
    <span style={{ fontSize: "14pt" }}>
      Verilerin zaman içindeki değişimini göstermek amacıyla çizgi şeklinde
      hazırlanan grafik türüne çizgi grafik denir. <br /> <br />
    </span>
    <img style={{ width: "90%" }} src={cizgiGrafik} alt="cizgi_grafik" />
  </>
);
// ---
const Istatistik = () => {
  const infos = [
    {
      header: "İstatistik Nedir?",
      review: text1,
    },
    {
      header: "İstatistik Nedir?",
      review: text2,
    },
    {
      header: "Veri nedir?",
      review: text3,
    },
    {
      header: "Bilgi nedir?",
      review: text4,
    },
    {
      header: "Sıklık (frekans) tablosu nedir?",
      review: text5,
    },
    {
      header: "Sıklık (frekans) tablosu nedir?",
      review: text6,
    },
    {
      header: "Aritmetik ortalama nedir?",
      review: text7,
    },
    {
      header: "Medyan (ortanca) nedir?",
      review: text8,
    },
    {
      header: "Mod (tepe değeri) nedir?",
      review: text9,
    },
    {
      header: "Grafik nedir?",
      review: text10,
    },
    {
      header: "Sütun grafik nedir?",
      review: text11,
    },
    {
      header: "Pasta grafik nedir?",
      review: text12,
    },

    {
      header: "Çizgi grafik nedir?",
      review: text13,
    },
  ];

  return (
    <div className="container-istatistik" id="istatistik">
      <div className="left-column">
        <div style={{ marginLeft: "2rem" }}>
          <img src={tkc_istatistik_timeline} alt="" />
        </div>
      </div>
      <div className="right-column">
        <div>
          <Swiper
            {...swiperProps}
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {infos.map((info, index) => {
              return (
                <SwiperSlide key={index}>
                  {/* <div class="istatistik-bg-image"> */}
                  <div className="istatistik">
                    <div
                      style={{
                        marginLeft: "2rem",
                        marginRight: "2rem",
                        marginTop: "2rem",
                      }}
                    >
                      <span
                        className="istatistik-header"
                        style={{ color: "orange" }}
                      >
                        {info.header}
                        <br />
                        <br />
                      </span>
                      <span
                        className="istatistik-review"
                        style={{ color: "grey" }}
                      >
                        {info.review}
                      </span>{" "}
                    </div>
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
        <div style={{ marginLeft: "2rem" }}>
          <img src={tkc_kuslar1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Istatistik;
