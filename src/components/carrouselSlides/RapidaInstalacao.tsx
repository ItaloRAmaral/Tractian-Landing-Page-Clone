import React from "react";
import rapidaImg from "../../images/rapida-instalacao.png";

function RapidaInstalacao(): JSX.Element {
  return (
    <>
      <img src={rapidaImg} alt="" />
      <h1>Rápida Instalação</h1>
      <p>
        Você só precisa <b>plugar o sensor no ativo</b> – o resto ele faz
        sozinho. Com <b>conexão 3G/4G e bateria de 3 anos</b>, não é preciso
        WiFi ou infraestrutura. Toda a coleta é <b>criptografada</b> e não há
        risco de perda de dados.
      </p>
    </>
  );
}

export default RapidaInstalacao;
