import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px 0 20px;
  justify-content: space-between;
  position: fixed;
  width: calc(100% - 40px);
  background-color: white;
  z-index: 999;

  h3{
    font-weight: 700;
  }
`;

export const Logo = styled.h3`
  color: #2d2e32;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Option = styled.h4`
    margin-left: 10px;
    margin-right: 10px;
    color: #2d2e32;
    &:hover {
        color: #f2f2f2;
    }
`;