import React from "react";
import indicadoresImg from "../../images/indicadores-automaticos.png";

function IndicadoresAutomaticos(): JSX.Element {
  return (
    <>
      <img src={indicadoresImg} alt="" />
      <h1>Indicadores Automáticos</h1>
      <p>
        Tenha todos os seus indicadores de manutenção atualizados em uma só
        página. Diminua o MTTR e o MTTA, aumente o MTBF e alcance os{" "}
        <b>melhores índices</b> de disponibilidade e confiabilidade.
      </p>
    </>
  );
}

export default IndicadoresAutomaticos;
