import React from "react";
import { Divider, Row, Col } from "antd";
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

function IndustriasItems(): JSX.Element {
  return (
    <div className="fade-in">
      <div className="background" />

      <Row id="sobre-container">
        <h1>Segmentos da Indústria</h1>
        <Divider className="sobre-divider" />

        <Col span={8} id="sobre-col">
          <div id="col-item">
            <ForkKnife size={22} color="#4066ce" />
            <h1>Alimentícia e Bebidas</h1>
          </div>
          <div id="col-item">
            <HandbagSimple size={22} color="#4066ce" />
            <h1>Embalagens e Plástico</h1>
          </div>
          <div id="col-item">
            <SketchLogo size={22} color="#4066ce" />
            <h1> Mineração, Fundição e Usinagem</h1>
          </div>
        </Col>

        <Col span={8} id="sobre-col">
          <div id="col-item">
            <Car size={22} color="#4066ce" />
            <h1>Automobilística</h1>
          </div>
          <div id="col-item">
            <Flask size={22} color="#4066ce" />
            <h1>Química e Farmacêutica</h1>
          </div>
          <div id="col-item">
            <Factory size={22} color="#4066ce" />
            <h1>Usinas e Agrícola</h1>
          </div>
        </Col>

        <Col span={8} id="sobre-col">
          <div id="col-item">
            <ShoppingCart size={22} color="#4066ce" />
            <h1>Bens de Consumo</h1>
          </div>
          <div id="col-item">
            <Buildings size={22} color="#4066ce" />
            <h1>Facilities</h1>
          </div>
          <div id="col-item">
            <CirclesFour size={22} color="#4066ce" />
            <h1>Outras</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default IndustriasItems;
