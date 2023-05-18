import React, { useRef } from "react";
import { Container, MainContent, AboutImage, AboutText } from "./aboutStyles";

const About = () => {

  return (
    <Container id="about">
      <MainContent>
        <AboutImage />
        <AboutText>
          <h4>About me</h4>
          <h3>A commited Full Stack Developer from Uruguay 📍</h3>
          <p>
            With my expertise in information systems development, I possess
            strong technical skills and a robust knowledge base in languages
            like Java and JavaScript. My passion for technology drives me to
            constantly learn and research new tools and technologies through
            courses and self-improvement. I thrive when working with a team and
            enjoy collaborating with colleagues and clients, utilizing my
            effective communication skills.
          </p>
        </AboutText>
      </MainContent>
    </Container>
  );
};

export default About;
