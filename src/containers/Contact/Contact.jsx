import React from "react";
import {
  Container,
  MainContainer,
  Text,
  Contacts,
  ContactInfo,
} from "./contactStyles";
import { IoIosMailOpen } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <Container>
      <MainContainer>
        <Text>
          <p>Contact</p>
          <h3>
            Don't hesitate to contact me! <span>✉️</span>
          </h3>
        </Text>
        <Contacts>
          <ContactInfo>
            <span>
              <IoIosMailOpen color="#147efb" size="2.5rem" />
            </span>
            <div>
              <h3>Mail</h3>
              <a href="mailto:vasconcellospvalentin@gmail.com">
                vasconcellospvalentin@gmail.com
              </a>
            </div>
          </ContactInfo>
          <ContactInfo>
            <span>
              <FaLinkedin color="#147efb" size="2.5rem" />
            </span>
            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/valentin-vasconcellos/"
                target="_blank"
              >Valentin Vasconcellos</a>
            </div>
          </ContactInfo>
        </Contacts>
      </MainContainer>
    </Container>
  );
};

export default Contact;
