import React from "react";
import { Divider, Row, Col } from "antd";
import {
  Eye,
  UsersFour,
  PlayCircle,
  EnvelopeOpen,
  Newspaper,
  ChartLineUp,
  IdentificationBadge,
} from "phosphor-react";

function SobreItems(): JSX.Element {
  return (
    <div className="fade-in">
      <div className="background" />

      <Row id="sobre-container">
        <Col span={8} id="sobre-col">
          <h1>Visão Geral</h1>
          <Divider className="sobre-divider" />

          <div id="col-item">
            <Eye size={22} color="#4066ce" />
            <div>
              <h1>Conheça a Tractian</h1>
              <p>Saiba mais sobre a equipe e a história por trás do produto.</p>
            </div>
          </div>

          <div id="col-item">
            <IdentificationBadge size={22} color="#4066ce" />
            <div>
              <h1>Trabalhe Conosco</h1>
              <p>
                Vagas abertas: faça parte da startup que mais cresce na América
                Latina.
              </p>
            </div>
          </div>
        </Col>

        <Col span={8} id="sobre-col">
          <h1>Nossos Clientes</h1>
          <Divider className="sobre-divider" />

          <div id="col-item">
            <ChartLineUp size={22} color="#4066ce" />
            <div>
              <h1>Cases de Sucesso</h1>
              <p>Descubra como a solução melhora a rotina dos mantenedores.</p>
            </div>
          </div>

          <div id="col-item">
            <PlayCircle size={22} color="#4066ce" />
            <div>
              <h1>Quem usa, recomenda</h1>
              <p>
                Veja a multinacional que aprimorou seu dia a dia de manutenção
                usando a nossa solução.
              </p>
            </div>
          </div>
        </Col>

        <Col span={8} id="sobre-col">
          <h1>Institucional</h1>
          <Divider className="sobre-divider" />

          <div id="col-item">
            <Newspaper size={22} color="#4066ce" />
            <div>
              <h1>Notícias</h1>
              <p>
                Veja o que os principais veículos de informação falam sobre a
                Tractian.
              </p>
            </div>
          </div>

          <div id="col-item">
            <UsersFour size={22} color="#4066ce" />
            <div>
              <h1>Comunidade</h1>
              <p>
                Confira nossas principais iniciativas para empoderar os
                profissionais da indústria.
              </p>
            </div>
          </div>

          <div id="col-item">
            <EnvelopeOpen size={22} color="#4066ce" />
            <div>
              <h1>Contato</h1>
              <p>Rua Azevedo Macedo, N°20 - 10° andar</p>
              <p>Vila Mariana, São Paulo - SP, 04013-060</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SobreItems;
