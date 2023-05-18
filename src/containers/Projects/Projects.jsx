import React from "react";
import { Container, Wrapper, Title, Project } from "./ProjectsStyles";

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Project>
          <img
            src="https://drive.google.com/uc?export=view&id=1kSokHdofJY15wEJ0b2hEzvFb_CO6h3HH"
            alt="warner Media discovery logo"
          />
        </Project>
        <Project>
          <img
            src="https://www.newslinereport.com/online/nota_la-comision-europea-aprueba-la-fusion-entre-discovery-y-warnermedia.jpg"
            alt="warner Media discovery logo"
          />
          <div className="text-container">
            <h3></h3>
          </div>
        </Project>
      </Wrapper>
    </Container>
  );
};

export default Projects;
