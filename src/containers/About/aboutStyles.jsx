import styled from "styled-components";
import macPic from "../../assets/images/macPic.webp";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 10rem 0 10rem 0;

  @media (max-width: 767px) {
    padding: 7rem 0 7rem 0;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 950px;
  gap: 2rem;

  @media (max-width: 1023px) {
    flex-direction: column;
    width: 80%;
  }

  @media (max-width: 767px) {
    width: 90%;
  }
`;

export const AboutImage = styled.div`
  height: 20rem;
  min-width: 23rem;
  background-image: url(${macPic});
  border-radius: 15px;
  background-size: cover;

  @media (max-width: 1023px) {
    min-height: 19rem;
    min-width: auto;
    height: 80%;
    width: 70%;
  }

  @media (max-width: 566px) { 
    width: 80%;
  }

  @media (max-width: 424px) {
    min-height: 15rem;
  }

  @media (max-width: 374px) {
    min-height: 10rem;
  }
`;

export const AboutText = styled.div`

  h4 {
    color: #147efb;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 1.5rem;
    margin: 0;
  }

  p {
    color: #767676;
    font-family: Mulish, sans-serif;
    font-size: 1.21rem;
    font-weight: 500;
    line-height: 1.4;
  }

  @media (max-width: 1023px) {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;
