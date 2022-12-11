import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/hook";
import tractianLogo from "../images/tractianLogo.png";
import "../styles/Header.css";
import { Header } from "antd/es/layout/layout";
import { Button } from "antd";
import SolucoesItems from "./dropdownMenuItems/SolucoesMenuItems";
import SobreItems from "./dropdownMenuItems/sobreMenuItems";
import MateriaisItems from "./dropdownMenuItems/materiaisMenuItems";
import IndustriasItems from "./dropdownMenuItems/industriasMenuItems";
import DemoModal from "./DemoModal";

function MyHeader(): JSX.Element {
  const { isModalOpen, showModal, handleNavBar, current } = useAppContext();

  const bgColorProp = "linear-gradient(to right, #1e3a8a, #2563eb)";
  const [bgColor, setBgColor] = useState(bgColorProp);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setBgColor("rgb(30,58,138)");
      } else {
        setBgColor("linear-gradient(to right, #1e3a8a, #2563eb)");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Header id="header-container" style={{ background: bgColor }}>
        <img src={tractianLogo} alt="Tractian Logo" id="logo-img" />
        <nav id="nav-container">
          <li onClick={handleNavBar} id="solucoes">
            Soluções
          </li>
          <li onClick={handleNavBar} id="industria">
            Indústria
          </li>
          <li onClick={handleNavBar} id="sobre">
            Sobre
          </li>
          <li onClick={handleNavBar} id="materiais">
            Materiais
          </li>
          <li onClick={handleNavBar} id="blog">
            <a
              href="https://tractian.com/blog"
              rel="noreferrer"
              target="_blank"
            >
              Blog
            </a>
          </li>
        </nav>

        <nav id="nav-client">
          <a
            href="https://app.tractian.com/login"
            rel="noreferrer"
            target="_blank"
          >
            Área do Cliente
          </a>
          <Button
            type="primary"
            htmlType="button"
            onClick={showModal}
            id="demo-btn"
          >
            Demonstração
          </Button>
        </nav>
      </Header>
      {(current.solucoes as boolean) && <SolucoesItems />}
      {(current.industria as boolean) && <IndustriasItems />}
      {(current.sobre as boolean) && <SobreItems />}
      {(current.materiais as boolean) && <MateriaisItems />}
      {(isModalOpen as boolean) && <DemoModal />}
    </>
  );
}

export default MyHeader;
