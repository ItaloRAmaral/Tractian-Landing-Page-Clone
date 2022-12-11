import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/SecondInfo.css";
import IndicadoresAutomaticos from "./carrouselSlides/IndicadoresAutomaticos";
import Preditiva from "./carrouselSlides/Preditiva";
import CentroCustos from "./carrouselSlides/CentroCustos";
import InteligenciaArtificial from "./carrouselSlides/InteligenciaArtificial";
import RapidaInstalacao from "./carrouselSlides/RapidaInstalacao";
import PlanosPreventivos from "./carrouselSlides/PlanosPreventivos";

function SecondInfo(): JSX.Element {
  return (
    <section className="second">
      <h1>Com TRACTIAN, não existe máquina parada!</h1>
      <h3>
        Todas as ferramentas que você precisa para manter a produção operando e
        usar seu tempo e recursos de forma otimizada estão aqui.
      </h3>

      <Swiper
        slidesPerView={3}
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
        <SwiperSlide className="teste">
          <Preditiva />
        </SwiperSlide>

        <SwiperSlide className="teste">
          <InteligenciaArtificial />
        </SwiperSlide>

        <SwiperSlide className="teste">
          <RapidaInstalacao />
        </SwiperSlide>

        <SwiperSlide className="teste">
          <IndicadoresAutomaticos />
        </SwiperSlide>

        <SwiperSlide className="teste">
          <PlanosPreventivos />
        </SwiperSlide>

        <SwiperSlide className="teste">
          <CentroCustos />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default SecondInfo;
