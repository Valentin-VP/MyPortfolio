import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0 1.5rem 0;
  background-color: #2d2e32;
  color: white;
  a {
    margin-left: 1rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
  }
`;
