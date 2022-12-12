import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/ThirdInfo.css";
import MonitoramentoOnline from "./carrouselSlides/MonitoramentoOnline";
import TecnologiaIot from "./carrouselSlides/TecnologiaIot";
import GestaoAtivos from "./carrouselSlides/GestaoAtivos";
import ManutencaoPreditiva from "./carrouselSlides/ManutencaoPreditiva";

// rgb(34,197,94)

function ThirdInfo(): JSX.Element {
  return (
    <section className="third">
      <h1>Como Funciona?</h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        grabCursor={true}
        loop={true}
        // breakpoints={}
      >
        <SwiperSlide className="how-works-card">
          <MonitoramentoOnline />
        </SwiperSlide>

        <SwiperSlide className="how-works-card">
          <TecnologiaIot />
        </SwiperSlide>

        <SwiperSlide className="how-works-card">
          <GestaoAtivos />
        </SwiperSlide>

        <SwiperSlide className="how-works-card">
          <ManutencaoPreditiva />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default ThirdInfo;
