import React from "react";
import { Button } from "antd";
import monitoramentoImg from "../../images/monitoramento-online.png";

function MonitoramentoOnline(): JSX.Element {
  return (
    <>
      <h1>Monitoramento Online</h1>
      <div>
        <p>
          A TRACTIAN é a ferramenta que remove barreiras para você manter sua
          operação rodando <b>sem interrupções.</b>
        </p>
        <img src={monitoramentoImg} alt="Imagem do Sensor Tractian" />
      </div>
      <Button type="default" id="how-works-btn">
        Conheça o Sensor Inteligente
      </Button>
    </>
  );
}

export default MonitoramentoOnline;
