import React from "react";
import { Button } from "antd";
import manutencaoImg from "../../images/manutencao-preditiva.png";

function ManutencaoPreditiva(): JSX.Element {
  return (
    <>
      <h1>Manutenção Preditiva</h1>
      <div>
        <p>
          Com a fusão perfeita de hardware e software, você consegue controlar
          suas máquinas, automatizar processos e gerenciar as atividades. Tudo
          isso em <b>uma só ferramenta.</b>
        </p>
        <img src={manutencaoImg} alt="" />
      </div>
      <Button type="default" id="how-works-btn">
        Descubra o sistema preditivo
      </Button>
    </>
  );
}

export default ManutencaoPreditiva;
