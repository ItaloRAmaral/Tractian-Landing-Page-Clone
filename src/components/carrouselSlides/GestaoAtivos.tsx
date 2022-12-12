import React from "react";
import { Button } from "antd";
import gestaoImg from "../../images/gestao-ativos.png";

function GestaoAtivos(): JSX.Element {
  return (
    <>
      <h1>Gestão de Ativos</h1>
      <div>
        <p>
          Saiba o que deve ser feito no dia antes mesmo de sair de casa.{" "}
          <b>Controle e organize</b> todas as suas Ordens de Serviço na
          interface móvel do TracOS™.
        </p>
        <img src={gestaoImg} alt="Imagem de" />
      </div>
      <Button type="default" id="how-works-btn">
        Confira o CMMS na prática
      </Button>
    </>
  );
}

export default GestaoAtivos;
