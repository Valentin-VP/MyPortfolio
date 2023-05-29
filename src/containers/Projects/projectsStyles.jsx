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
  justify-content: flex-start;
`;

export const Title = styled.p`
  color: #147efb;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  background-color: #f9f9f9;
  width: 100%;
  height: 400px;
  border-radius: 1.7rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;

  img {
    object-fit: cover;
    height: 100%;
    width: 530px;
    border-radius: 1.7rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    align-items: center;
    margin-left: 60px;
    margin-right: 60px;

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
        white-space: nowrap;
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
`;
