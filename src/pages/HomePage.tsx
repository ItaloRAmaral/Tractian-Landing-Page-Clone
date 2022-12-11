import React from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import MyHeader from "../components/Header";
import FirstInfo from "../components/FirstInfo";
import SecondInfo from "../components/SecondInfo";

function HomePage(): JSX.Element {
  return (
    <Layout>
      <MyHeader />
      <Content>
        <FirstInfo />
        <SecondInfo />
      </Content>
    </Layout>
  );
}

export default HomePage;
