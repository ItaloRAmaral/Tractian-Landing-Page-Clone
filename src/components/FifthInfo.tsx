/* eslint-disable max-len */
import React from "react";
import { useAppContext } from "../context/hook";
import { Button, Col, Row } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import clientOpinions from "../helper/clientOpinions";
import UserOpinion from "./carrouselSlides/UserOpinion";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/FifthInfo.css";

function FifthInfo(): JSX.Element {
  const { showModal } = useAppContext();

  return (
    <div className="fifth-background">
      <div className="fifth">
        <h1>O que nossos clientes dizem:</h1>

        <Row gutter={[32, 16]} id="client-opinion-container">
          <Col flex="30%" id="capterra-info">
            <img
              src="https://imgix.tractian.com/website/pages/home/general/capterra-badge-2022.png?auto=format&fit=max&w=384"
              alt="capterra"
              id="client-opinion-img"
            />
            <p>
              Nomeada solução favorita de CMMS e OEE no ranking da Capterra 2022
            </p>
            <Button
              type="primary"
              id="demo-btn-fifth"
              name="demoModal"
              onClick={showModal}
            >
              Demonstração
            </Button>
          </Col>

          <Col flex="auto" id="opinions-carrousel">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="opinions-swiper"
              grabCursor={true}
              loop={true}
              // breakpoints={}
            >
              {clientOpinions.map((opinion, index) => (
                <SwiperSlide key={index} id="client-opinion">
                  <UserOpinion userOpinion={opinion} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FifthInfo;
