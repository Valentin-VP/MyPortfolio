import React from "react";
import { Container, Options, Option } from "./navbarStyles";

const Navbar = () => {
  return (
    <Container>
      <h3>Valentín-VP</h3>
      <Options>
        <Option>Home</Option>
        <Option>About</Option>
        <Option>Projects</Option>
        <Option>Contact</Option>
      </Options>
    </Container>
  );
};

export default Navbar;
