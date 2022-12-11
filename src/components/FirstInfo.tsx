import React from "react";
import { useAppContext } from "../context/hook";
import { Row, Col, Button } from "antd";
import "../styles/FirstInfo.css";
import overview from "../images/overview.png";
import google from "../images/google.png";
import capterra from "../images/capterra.png";
import embraerLogo from "../images/embraerLogo.png";
import yaraLogo from "../images/yaraLogo.png";
import danoneLogo from "../images/danoneLogo.png";
import boschLogo from "../images/boschLogo.png";
import hyundaiLogo from "../images/hyundaiLogo.png";

function FirstInfo(): JSX.Element {
  const { showModal } = useAppContext();

  return (
    <section id="first">
      <Row id="first-container" gutter={[16, 16]}>
        <Col span={12} id="first-col">
          <div className="first-content-container">
            <h1>Monitoramento Online e Gestão de Ativos em um só lugar?</h1>

            <div className="avaliation-container">
              <img src={capterra} alt="Capterra Avaliation" />
              <img src={google} alt="Google Avaliation" />
            </div>
            <h3>
              Evite falhas nas suas máquinas e deixe o tempo de inatividade no
              passado com o melhor sistema preditivo do mercado.
            </h3>
            <Button
              type="primary"
              htmlType="button"
              onClick={showModal}
              id="demo-btn-first"
            >
              Demonstração
            </Button>
            <span>
              Já é cliente? <a>Acesse Aqui.</a>
            </span>
          </div>
        </Col>

        <Col span={12} id="overview-img">
          <img src={overview} alt="Overview" />
        </Col>
      </Row>

      <div className="logos-container">
        <img src={embraerLogo} />
        <img src={yaraLogo} />
        <img src={danoneLogo} />
        <img src={hyundaiLogo} />
        <img src={boschLogo} />
      </div>
    </section>
  );
}

export default FirstInfo;
