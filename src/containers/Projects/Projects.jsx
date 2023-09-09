import React from "react";
import { Container, Wrapper, Title, Project } from "./ProjectsStyles";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import ScrolledPage from "../../assets/images/scrolledPage.png";

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Project style={{ flexDirection: "row-reverse" }}>
          <img className="scrollImage"
            src={ScrolledPage}
            alt="screenshot of the app"
          />
          <div className="text-container">
            <h3>Credilar 🚗</h3>
            <p>
              A website of an automotive company that offers its selection of
              cars with their respective detailed information to facilitate the
              customer's choice.
            </p>
            <p>Work in progress 🚧</p>
            <div className="stack">
              <p>React</p>
            </div>
            <div className="links">
              <div className="link">
                <a href="https://credilar.vercel.app" target="_blank">
                  Demo
                </a>
                <HiOutlineExternalLink color="#2d2e32" size={25} />
              </div>
            </div>
          </div>
        </Project>
        <Project>
          <img
            src="https://drive.google.com/uc?export=view&id=1kSokHdofJY15wEJ0b2hEzvFb_CO6h3HH"
            alt="Foodmonks app logo"
          />
          <div className="text-container">
            <h3>Foodmonks 🍔</h3>
            <p>
              A Website and mobile app for managing orders at a restaurant.
              Accept online payments, reservations, user reviews, discounts,
              real-time delivery tracking. Simplify operations, enhance customer
              experience.
            </p>
            <div className="stack">
              <p>Springbooot</p>
              <p>React Native</p>
              <p>React</p>
            </div>
            <div className="links">
              <div className="link">
                <a
                  href="https://github.com/Valentin-VP/foodmonks.git"
                  target="_blank"
                >
                  Code
                </a>
                <BsGithub color="#2d2e32" size={25} />
              </div>
              <div className="link">
                <a
                  href="https://drive.google.com/drive/u/0/folders/1lDRrWNZ_MljvbsMte5k37A-I3tsOK7hp"
                  target="_blank"
                >
                  Docs
                </a>
                <HiOutlineExternalLink color="#2d2e32" size={25} />
              </div>
            </div>
          </div>
        </Project>
        <Project style={{ flexDirection: "row-reverse" }}>
          <img
            src="https://www.newslinereport.com/online/nota_la-comision-europea-aprueba-la-fusion-entre-discovery-y-warnermedia.jpg"
            alt="warner Media discovery logo"
          />
          <div className="text-container">
            <h3>Aleph 📺</h3>
            <p>
              A multimodular application with the objective of managing the
              documentation, organization and payments of programs and
              commercials in Warner Media's television channels in Latin
              America.
            </p>
            <div className="stack">
              <p>Springbooot</p>
              <p>Angular</p>
              <p>Oracle SQL</p>
            </div>
          </div>
        </Project>
      </Wrapper>
    </Container>
  );
};

export default Projects;
