import React from "react";
import {
  Container,
  Content,
  MainText,
  SubText,
  Techs,
  Main,
  Title,
  MainPic,
  Socials,
} from "./homeStyles";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiJavascript, SiSpring, SiReact, SiAngular, SiHtml5, SiCss3 } from "react-icons/si";

const Home = () => {
  return (
    <Container>
      <Content>
        <Main>
          <MainText>
            <Title>Full Stack Developer</Title>
            <SubText>
              <span>
                Hello there! I'm Valentín Vasconcellos.
                A Full Stack software developer from Uruguay.
                <img
                  src="https://em-content.zobj.net/thumbs/160/apple/354/flag-uruguay_1f1fa-1f1fe.png"
                  alt="Uruguay Flag"
                />
              </span>
            </SubText>
            <Socials>
              <a
                href="https://www.linkedin.com/in/valentin-vasconcellos/"
                target="_blank"
              >
                <FaLinkedin color="#2d2e32" size="2rem"/>
              </a>
              <a href="https://www.github.com/valentin-vp" target="_blank">
                <BsGithub color="#2d2e32" size="2rem"/>
              </a>
            </Socials>
          </MainText>
          <MainPic />
        </Main>
        <Techs>
          <p>Main Toolset</p>
          <ul>
            <li>
              <SiJavascript color="#f0db4f" size="2rem"/>
            </li>
            <li>
              <SiSpring color="#6db33f" size="2rem"/>
            </li>
            <li>
              <SiReact color="#61dbfb" size="2rem"/>
            </li>
            <li>
              <SiAngular color="#dd1b16" size="2rem"/>
            </li>
            <li>
              <SiHtml5 color="#e34f26" size="2rem"/>
            </li>
            <li>
              <SiCss3 color="#264de4" size="2rem"/>
            </li>
          </ul>
        </Techs>
      </Content>
    </Container>
  );
};

export default Home;
