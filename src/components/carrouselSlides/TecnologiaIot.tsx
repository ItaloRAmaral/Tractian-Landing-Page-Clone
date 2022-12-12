import React from "react";
import { Button } from "antd";
import tecnologiaImg from "../../images/tecnologia-iot.png";

function TecnologiaIot(): JSX.Element {
  return (
    <>
      <h1>Tecnologia IoT </h1>
      <div>
        <p>
          Toda falha apresenta sintomas antes de acontecer – e o Smart Trac não
          deixa passar nenhum. Receba <b>alertas automáticos</b> ao menor sinal
          de defeito e elimine os gastos com corretivas.
        </p>
        <img src={tecnologiaImg} alt="" />
      </div>
      <Button type="default" id="how-works-btn">
        Saiba mais sobre os insights
      </Button>
    </>
  );
}

export default TecnologiaIot;
