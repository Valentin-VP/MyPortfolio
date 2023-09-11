import styled from "styled-components";
import ppic from "../../assets/images/CVF_2179_compressed.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1023px) {
    height: auto;
    padding-top: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 950px;
  position: relative;
  @media (max-width: 1023px) {
    width: 100%;
    justify-content: center;
    margin-top: 60px;
  }
`;

export const Main = styled.div`
  width: 950px;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media (max-width: 1023px) {
    height: auto;
    flex-direction: column-reverse;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 470px;
  @media (max-width: 1023px) {
    max-width: 80%;
  }

  @media (max-width: 320px) {
    max-width: 95%;
  }
`;

export const Title = styled.h1`
  line-height: 3.8rem;
  font-size: 3.5rem;
  margin-bottom: 0;

  @media (max-width: 1023px) {
    text-align: center;
  }
`;
export const SubText = styled.p`
  font-size: 1.2rem;
  color: #767676;
  font-weight: 500;

  img {
    object-fit: contain;
    width: 2.8rem;
    vertical-align: middle;
    margin-left: 0.5rem;
  }

  @media (max-width: 1023px) {
    text-align: center;
    max-width: 500px;
    img {
      display: none;
    }
  }
`;

export const Socials = styled.div`
  vertical-align: top;
  a {
    margin-right: 10px;
  }

  @media (max-width: 1023px) {
    display: flex;
    justify-content: center;
  }
`;

export const MainPic = styled.div`
  @keyframes Morph {
    0%,
    100% {
      border-radius: 56% 44% 25% 75% / 58% 50% 50% 42%;
    }

    25% {
      border-radius: 34% 66% 77% 23% / 58% 62% 38% 42%;
    }

    50% {
      border-radius: 80% 20% 80% 20% / 30% 40% 60% 70%;
    }

    75% {
      border-radius: 56% 44% 25% 75% / 58% 50% 50% 42%;
    }
  }

  animation: Morph 10s ease-in-out infinite;
  background-image: url(${ppic});
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid #2d2e32;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  width: 350px;
  height: 350px;
  @media (max-width: 1023px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 425px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 320px) {
    width: 200px;
    height: 200px;
  }
`;

export const Techs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 1.2rem;

  p {
    border-right: 3px solid #2d2e32;
    font-family: Mulish, sans-serif;
    font-weight: 600;
    padding-right: 1rem;
    margin-right: 3rem;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    margin: 0 0.5rem 0.5rem 0.5rem;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    margin-top: 40px;

    p {
      padding: 0;
      margin: 15px 0 0 0;
      border: 0;
      border-bottom: 3px solid #2d2e32;
    }

    ul {
      justify-content: center;
      flex-wrap: wrap;
    }

  }

  @media (max-width: 375px) {
    ul {
      scale: 0.8;
    }
  }

`;
