import React from "react";
import planosImg from "../../images/planos-preventivos.png";

function PlanosPreventivos(): JSX.Element {
  return (
    <>
      <img src={planosImg} alt="" />
      <h1>Planos Preventivos</h1>
      <p>
        Crie, gerencie e automatize <b>Ordens de Serviço</b>. Planeje
        preventivas com múltiplas visões e categorias, acesse{" "}
        <b>relatórios operacionais completos</b> e reduza o tempo de reação de
        cada OS.
      </p>
    </>
  );
}

export default PlanosPreventivos;
