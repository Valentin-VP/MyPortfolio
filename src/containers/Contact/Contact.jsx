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
  const onSocialClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Container id="contact">
      <MainContainer>
        <Text>
          <p>Contact</p>
          <h3>
            Don't hesitate to contact me! <span>✉️</span>
          </h3>
        </Text>
        <Contacts>
          <ContactInfo
            onClick={() =>
              onSocialClick("mailto:vasconcellospvalentin@gmail.com")
            }
          >
            <span>
              <IoIosMailOpen color="#147efb" size="2.5rem" />
            </span>
            <div>
              <h3>Mail</h3>
              <p>vasconcellospvalentin@gmail.com</p>
            </div>
          </ContactInfo>
          <ContactInfo
            onClick={() =>
              onSocialClick(
                "https://www.linkedin.com/in/valentin-vasconcellos/"
              )
            }
          >
            <span>
              <FaLinkedin color="#147efb" size="2.5rem" />
            </span>
            <div>
              <h3>LinkedIn</h3>
              <p>Valentin Vasconcellos</p>
            </div>
          </ContactInfo>
        </Contacts>
      </MainContainer>
    </Container>
  );
};

export default Contact;
