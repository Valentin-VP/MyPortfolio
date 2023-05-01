import styled from "styled-components";
import valentin from "../../assets/CVF_1986.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 950px;
  height: 490px;
  position: relative;
`;

export const Main = styled.div`
  width: 950px;
  height: 350px;
  display: flex;
  gap: 130px;
  justify-content: flex-start;
  position: relative;
`;

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 470px;
`;

export const Title = styled.h1`
  line-height: 3.8rem;
  font-size: 3.5rem;
  margin-bottom: 0;
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
`;

export const Socials = styled.div`
  vertical-align: top;
  a {
    margin-right: 10px;
  }
`;

export const MainPic = styled.div`
  @keyframes Morph {
    0%, 100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }

    25% {
      border-radius: 40% 70% 70% 40% / 50% 60% 45% 60%;
    }

    50% {
      border-radius: 70% 30% 60% 40% / 60% 30% 70% 40%;
    }

    75% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }

  animation: Morph 10s ease-in-out infinite;
  background-image: url(${valentin});
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid #2d2e32;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  width: 350px;
  height: 350px;
  transform: scale(1.1);
`;

export const Techs = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
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
    margin-right: 1rem;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.20);
  }
`;
