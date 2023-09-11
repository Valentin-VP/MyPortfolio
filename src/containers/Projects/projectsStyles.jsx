import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 5rem 0 5rem 0;
  width: 950px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1023px) {
    width: 70%;
  }

  @media (max-width: 767px) {
    width: 90%;
  }
`;

export const Title = styled.p`
  color: #147efb;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  
  @media (max-width: 1023px) {
    text-align: center;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  background-color: #f9f9f9;
  width: calc(100% - 40px);
  height: 400px;
  border-radius: 1.7rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;

  img {
    object-fit: cover;
    height: 100%;
    width: 500px;
    border-radius: 1.7rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .scrollImage {
    object-fit: cover;
    object-position: top;

    &:hover {
      object-position: bottom;
      transition: all 5s;
    }
    &:not(:hover) {
      object-position: top;
      transition: all 1s;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 350px;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;

    p {
      font-size: 17px;
      font-weight: 500;
      text-align: center;
      color: #767676;
      margin: 0;
      margin-bottom: 10px;
    }

    .stack {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;

      p {
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        color: #000;
        font-family: Mulish, sans-serif;
        font-weight: 600;
        padding: 10px 13px;
        flex-wrap: wrap;
      }
    }

    .links {
      display: flex;
      justify-content: space-evenly;
      width: 100%;

      .link {
        display: flex;
        align-items: center;

        a {
          color: #2d2e32;
          font-family: Poppins, sans-serif;
          font-size: 1.3rem;
          text-decoration: none;
          margin-right: 10px;

          &:hover {
            color: #147efb;
          }
        }
      }
    }
  }

  @media (max-width: 1023px) {
    flex-direction: column !important;
    align-items: center;
    width: auto;
    height: auto;

    img {
      height: 350px;
    }

    .text-container {
      width: 90%;

      .stack {
        p {
          margin: 0 5px 5px 5px;
        }
      }

      .links {
        margin-top: 10px;
      }
    }
  }

  @media (max-width: 767px) {
    img {
      width: 90%;
      height: 360px;
    }
  }

  @media (max-width: 550px) {
    img {
      width: 100%;
      height: 300px;
    }
  }

  @media (max-width: 425px) {
    img {
      height: 250px;
    }
  }

  @media (max-width: 373px) {
    img {
      height: 180px;
    }
  }
`;
