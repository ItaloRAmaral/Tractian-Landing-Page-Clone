import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import "antd/dist/reset.css";
import "./App.css"

function App(): JSX.Element {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
