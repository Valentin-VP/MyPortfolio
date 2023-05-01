import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <Home />
      <About />
      <Projects />
      <Contact />
    </Wrapper>
  );
}

export default App;
