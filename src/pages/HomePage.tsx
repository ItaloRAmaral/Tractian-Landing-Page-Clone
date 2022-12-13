/* eslint-disable max-len */
import React from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import MyHeader from "../components/Header";
import FirstInfo from "../components/FirstInfo";
import SecondInfo from "../components/SecondInfo";
import ThirdInfo from "../components/ThirdInfo";
import FourthInfo from "../components/FourthInfo";
import FifthInfo from "../components/FifthInfo";
import ClientsLogoSlider from "../components/ClientsLogoSlider";
import clientsLogo from "../helper/logos";
import MyFooter from "../components/MyFooter";

function HomePage(): JSX.Element {
  return (
    <Layout>
      <MyHeader />
      <Content>
        <FirstInfo />
        <SecondInfo />
        <ThirdInfo />
        <FourthInfo />
        <ClientsLogoSlider images={clientsLogo} />
        <FifthInfo />
      </Content>
      <MyFooter />
    </Layout>
  );
}

export default HomePage;
