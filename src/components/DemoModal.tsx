/* eslint-disable max-len */
import React from "react";
import { Button, Col, Row } from "antd";
import { X } from "phosphor-react";
import "../styles/DemoModal.css";
import { useAppContext } from "../context/hook";

function DemoModal(): JSX.Element {
  const { showModal } = useAppContext();

  return (
    <section className="demoModal-container">
      <div className="demo-background" />
      <div className="demo-content-container">
        <Row>
          <Button
            type="text"
            htmlType="button"
            name="demoModal"
            id="x-btn"
            onClick={showModal}
          >
            <X size={16} />
          </Button>
          <Col span={24}>
            <div className="demo-info-content">
              <h1>Agende uma demonstração!</h1>
              <h3>
                Que tal conversar com um especialista e entender os benefícios
                que a Tractian pode oferecer para as suas operações de
                manutenção?
              </h3>
            </div>
            <p>Qual é a sua função?</p>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={6}>
            <div className="card-item">
              <img
                src="https://imgix.tractian.com/website/components/modal-demo-form/general/boss.png?auto=format&fit=max&w=64"
                alt="Gerente Icon"
              />
              <h2>Gerência de Manutenção</h2>
            </div>
          </Col>
          <Col span={6}>
            <div className="card-item">
              <img
                src="https://imgix.tractian.com/website/components/modal-demo-form/general/management.png?auto=format&fit=max&w=64"
                alt="Surpervisão Icon"
              />
              <h2>Supervisão de Manutenção</h2>
            </div>
          </Col>
          <Col span={6}>
            <div className="card-item">
              <img
                src="https://imgix.tractian.com/website/components/modal-demo-form/general/laborers.png?auto=format&fit=max&w=64"
                alt="Técnico Icon"
              />
              <h2>Técnico de Manutenção</h2>
            </div>
          </Col>
          <Col span={6}>
            <div className="card-item">
              <img
                src="https://imgix.tractian.com/website/components/modal-demo-form/general/others.png?auto=format&fit=max&w=64"
                alt="Outro Icon"
              />
              <h2>Outro</h2>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default DemoModal;
