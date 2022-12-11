import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import { AppProvider } from "./context/app-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ConfigProvider locale={ptBR}>
      <AppProvider>
        <App />
      </AppProvider>
    </ConfigProvider>
  </BrowserRouter>
);
