import React from "react";
import { Divider, Row, Col } from "antd";
import {
  CurrencyCircleDollar,
  MonitorPlay,
  BookBookmark,
} from "phosphor-react";

function MateriaisItems(): JSX.Element {
  return (
    <div className="fade-in">
      <div className="background" />

      <Row id="sobre-container">
        <Col span={6} id="sobre-col">
          <h1>E-Books e Guias</h1>
          <Divider className="sobre-divider" />

          <div id="single-item">
            <h1>Manutenção Preventiva</h1>
            <h1>Indicadores de Manutenção</h1>
            <h1>Decisão Baseada em Dados</h1>
            <h1>PCM</h1>
            <h1>Manutenção Preditiva</h1>
            <h1>Motores Elétricos</h1>
            <p>Ver todos os guias</p>
          </div>
        </Col>

        <Col span={6} id="sobre-col">
          <h1>Checklists</h1>
          <Divider className="sobre-divider" />

          <div id="single-item">
            <h1>Segurança do Trabalho</h1>
            <h1>Inspeção Geral de Incêndio</h1>
            <h1>Verificação de Avaliação de Perigo</h1>
            <h1>Perigo de Encanamento</h1>
            <h1>Logística e Transporte</h1>
            <h1>Verificação de Segurança</h1>
            <p>Ver todos os checklists</p>
          </div>
        </Col>

        <Col span={6} id="sobre-col">
          <h1>Quiz</h1>
          <Divider className="sobre-divider" />

          <div id="single-item">
            <h1>Criticidade</h1>
            <h1>Indicadores de Manutenção</h1>
            <h1>Tipos de Manutenção</h1>
            <h1>Curva de Banheira</h1>
            <h1>Análise de Vibração</h1>
            <h1>Definição de Confiabilidade</h1>
            <p>Ver todos os quizes</p>
          </div>
        </Col>

        <Col span={6} id="sobre-col">
          <h1>Ferramentas</h1>

          <Divider className="sobre-divider" />

          <div id="col-item">
            <MonitorPlay size={22} color="#4066ce" />
            <div>
              <h1>Tutoriais</h1>
              <p>Domine o TracOS™ e potencialize sua Gestão da Manutenção.</p>
            </div>
          </div>

          <div id="col-item">
            <CurrencyCircleDollar size={22} color="#4066ce" />
            <div>
              <h1>Calculadora ROI</h1>
              <p>
                Qual o peso da sua máquina no seu bolso? Veja se vale a pena
                trocar para a solução da Tractian.
              </p>
            </div>
          </div>

          <div id="col-item">
            <BookBookmark size={22} color="#4066ce" />
            <div>
              <h1>Glossário da Manutenção</h1>
              <p>
                Os termos técnicos e mais comuns encontrados no setor da
                manutenção e a Tractian está aqui para ajudar.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MateriaisItems;
