import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import Home from "./containers/Home/Home";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
