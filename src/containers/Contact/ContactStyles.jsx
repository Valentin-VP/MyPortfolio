import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 0;
  width: 950px;
  @media (max-width: 1023px) {
    width: 90%;
  }
`;

export const Text = styled.div`
  p {
    color: #147efb;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.4rem;
  }

  span {
    font-size: 1.8rem;
  }

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 2rem;
  align-items: center;

  &:hover {
    cursor: pointer;
    scale: 0.95;

    p {
      color: #147efb;
    }
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: #2d2e32;
    font-size: 1.2rem;
    margin: 0;
  }

  p {
    color: #767676;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    margin: 0;
    margin-top: 15px;

    span {
      margin: 0;
    }
  }
`;
