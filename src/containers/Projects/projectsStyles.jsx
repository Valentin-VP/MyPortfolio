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
  margin-top: 2rem;
  background-color: #f9f9f9;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 1.7rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  
  img {
    object-fit: cover;
    height: 100%;
    width: 530px;
    border-radius: 1.7rem;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
  }
`;
