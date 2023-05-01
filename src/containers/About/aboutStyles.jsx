import styled from "styled-components";
import macPic from "../../assets/macPic.jpg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 10rem 0 10rem 0;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 22rem;
  width: 950px;
`;

export const AboutImage = styled.div`
    height: 100%;
    max-height: 100%;
    min-width: 23rem;
    background-image: url(${macPic});
    border-radius: 15px;
    background-size: cover;
`;

export const AboutText = styled.div`
    margin-left: 5rem;

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

    p{
        color: #767676;
        font-family: Mulish, sans-serif;
        font-size: 1.21rem;
        font-weight: 500;
        line-height: 1.4;
    }
`