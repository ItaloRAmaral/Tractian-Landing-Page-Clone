import React from "react";
import preditivaImg from "../../images/preditiva.png";

function Preditiva(): JSX.Element {
  return (
    <>
      <img src={preditivaImg} alt="" />
      <h1>Preditiva de Verdade</h1>
      <p>
        Saiba tudo o que acontece com seu ativo e monitore o{" "}
        <b>status da operação</b> em tempo real. Com as coletas de dados{" "}
        <b>a cada 5 minutos</b>, você reduz em <b>até 55%</b> as falhas e
        corretivas emergenciais.
      </p>
    </>
  );
}

export default Preditiva;
