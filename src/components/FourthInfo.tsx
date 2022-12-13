import React from "react";
import { Button, Col, Row } from "antd";
import {
  Buildings,
  Car,
  CirclesFour,
  Factory,
  Flask,
  ForkKnife,
  HandbagSimple,
  ShoppingCart,
  SketchLogo,
} from "phosphor-react";
import "../styles/FourthInfo.css";
import thumbnail from "../images/thumbnail-video.jpeg";
import play from "../images/play-button.png";
import { useAppContext } from "../context/hook";
import VideoModal from "./VideoModal";

function FourthInfo(): JSX.Element {
  const { showModal, isModalOpen } = useAppContext();

  return (
    <div className="fourth">
      <h1>Feito para indústrias de todos os setores</h1>
      <div>
        <Row gutter={[16, 16]} id="fourth-items-container">
          <Col xs={8} sm={8} md={6} id="items-col">
            <div id="types-col">
              <ForkKnife size={28} color="rgb(208,225,247)" />
              <h2>Alimentícia e Bebidas</h2>
            </div>
            <div id="types-col">
              <HandbagSimple size={28} color="rgb(208,225,247)" />
              <h2>Embalagens e Plástico</h2>
            </div>
            <div id="types-col">
              <SketchLogo size={28} color="rgb(208,225,247)" />
              <h2> Mineração e Fundição</h2>
            </div>
          </Col>

          <Col xs={8} sm={8} md={6} id="items-col">
            <div id="types-col">
              <Car size={28} color="rgb(208,225,247)" />
              <h2>Automobilística</h2>
            </div>
            <div id="types-col">
              <Flask size={28} color="rgb(208,225,247)" />
              <h2>Química e Farmacêutica</h2>
            </div>
            <div id="types-col">
              <Factory size={28} color="rgb(208,225,247)" />
              <h2>Usinas e Agrícola</h2>
            </div>
          </Col>

          <Col xs={8} sm={8} md={6} id="items-col">
            <div id="types-col">
              <ShoppingCart size={28} color="rgb(208,225,247)" />
              <h2>Bens de Consumo</h2>
            </div>
            <div id="types-col">
              <Buildings size={28} color="rgb(208,225,247)" />
              <h2>Facilities</h2>
            </div>
            <div id="types-col">
              <CirclesFour size={28} color="rgb(208,225,247)" />
              <h2>Outras</h2>
            </div>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={6}
            id="thumbnail-col"
            style={{ padding: "1.5vh 1.5vw" }}
          >
            <picture className="thumbnail-container">
              <img src={thumbnail} alt="Thumbnail do video" />
              <Button
                type="text"
                id="play-button"
                name="videoModal"
                onClick={showModal}
              >
                <img src={play} alt="Play Button" />
              </Button>
            </picture>
            <p>
              De preditivas mensais a coletas em tempo real: como a Suspensys{" "}
              <b>aumentou a confiabilidade</b> com o monitoramento online
            </p>
          </Col>
        </Row>
      </div>
      {(isModalOpen.videoModal as boolean) && <VideoModal />}
    </div>
  );
}

export default FourthInfo;
