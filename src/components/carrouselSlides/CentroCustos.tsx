import React from "react";
import centroImg from "../../images/centro-custos.png";

function CentroCustos(): JSX.Element {
  return (
    <>
      <img src={centroImg} alt="" />
      <h1>Centro de Custos</h1>
      <p>
        Rastreie os custos e as mudanças nos principais indicadores de gastos
        com manutenção. Ative notificações para os gastos mais críticos, otimize
        o uso de recursos e <b>reduza os custos em até 60%.</b>
      </p>
    </>
  );
}

export default CentroCustos;
