import React from "react";
import { Divider, Row, Col } from "antd";
import {
  Broadcast,
  Lightning,
  TreeStructure,
  Desktop,
  PresentationChart,
  PlayCircle,
  CirclesFour,
  Question,
  Chat,
} from "phosphor-react";

function SolucoesItems(): JSX.Element {
  return (
    <div className="fade-in">
      <div className="background" />

      <Row id="sobre-container">
        <Col span={8} id="sobre-col">
          <div>
            <h4>Sensores </h4>
            <h1>Monitoramento Online</h1>
          </div>

          <Divider className="sobre-divider" />

          <div id="col-item">
            <Broadcast size={22} color="#4066ce" />
            <div>
              <h1>Sensor de Vibração</h1>
              <p>
                Análise de vibração e temperatura em tempo real com o Smart
                Trac.
              </p>
            </div>
          </div>

          <div id="col-item">
            <Lightning size={22} color="#4066ce" />
            <div>
              <h1>Sensor de Energia</h1>
              <p>
                Detecte falhas elétricas e monitore o consumo de energia com o
                Energy Trac.
              </p>
            </div>
          </div>

          <div id="col-item">
            <TreeStructure size={22} color="#4066ce" />
            <div>
              <h1>Supervisório</h1>
              <p>
                Visualize o status de funcionamento de todos os seus ativos em
                uma única tela.
              </p>
            </div>
          </div>
        </Col>

        <Col span={8} id="sobre-col">
          <div>
            <h4>TracOS™</h4>
            <h1>Gestão de Ativos</h1>
          </div>

          <Divider className="sobre-divider" />

          <div id="col-item">
            <Desktop size={22} color="#4066ce" />
            <div>
              <h1>Software Gestão Manutenção</h1>
              <p>
                Gestão da Manutenção com a plataforma mais completa do mercado.
              </p>
            </div>
          </div>

          <div id="col-item">
            <PresentationChart size={22} color="#4066ce" />
            <div>
              <h1>Funcionalidades do CMMS</h1>
              <p>
                Centralize as atividades do seu time e potencialize seus
                resultados.
              </p>
            </div>
          </div>

          <div id="col-item">
            <PlayCircle size={22} color="#4066ce" />
            <div>
              <h1>Entenda a Solução</h1>
              <p>
                Descubra como a <span>TRACTIAN</span> facilita a rotina do
                profissional de manutenção.
              </p>
              <p>Ver vídeo</p>
            </div>
          </div>
        </Col>

        <Col span={8} id="sobre-col">
          <div className="fix-margin">
            <br></br>
            <h1>Visão Geral</h1>
          </div>

          <Divider className="sobre-divider" />

          <div id="col-item">
            <CirclesFour size={22} color="#4066ce" />
            <div>
              <h1>Preços</h1>
              <p>Saiba como obter nossa solução.</p>
            </div>
          </div>

          <div id="col-item">
            <Question size={22} color="#4066ce" />
            <div>
              <h1>Perguntas Frequentes</h1>
              <p>Entenda a fundo como funciona a nossa solução.</p>
            </div>
          </div>

          <div id="col-item">
            <Chat size={22} color="#4066ce" />
            <div>
              <h1>Fale com um especialista</h1>
              <p>
                Conheça o sistema de perto e descruba todas as suas vantagens.
              </p>
              <p>Ver vídeo</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SolucoesItems;
