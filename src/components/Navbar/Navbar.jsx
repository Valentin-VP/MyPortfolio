import React from "react";
import { Container, Options } from "./navbarStyles";

function handleScroll(event, id) {
  event.preventDefault();
  const section = document.querySelector(`#${id}`);
  const navbarHeight = 66.44;
  window.scrollTo({
    top: section.offsetTop - navbarHeight,
    behavior: "smooth",
  });
}

const Navbar = () => {
  return (
    <Container>
      <h3>Valentín-VP</h3>
      <Options>
        <a href="#home" onClick={(event) => handleScroll(event, "home")}>Home</a>
        <a href="#about" onClick={(event) => handleScroll(event, "about")}>About</a>
        <a href="#projects" onClick={(event) => handleScroll(event, "projects")}>Projects</a>
        <a href="#contact" onClick={(event) => handleScroll(event, "contact")}>Contact</a>
      </Options>
    </Container>
  );
};

export default Navbar;
