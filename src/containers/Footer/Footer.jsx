import React from "react";
import { Container } from "./footerStyles";
import { DiGithubFull } from "react-icons/di";

const Footer = () => {
  return (
    <Container>
      <h3>This page was made with React, check it out here:</h3>
      <a href="https://github.com/Valentin-VP/MyPortfolio" target="_blank">
        <DiGithubFull color="white" size="5rem" />
      </a>
    </Container>
  );
};

export default Footer;
