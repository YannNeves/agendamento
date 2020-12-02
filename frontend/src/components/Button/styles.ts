import styled from "styled-components";

export const Container = styled.button`
  border: 2px solid #ff9494;
  border-radius: 15px;
  padding: 16px;
  min-width: 75px;
  max-width: 250px;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease-in-out;
  margin-top: 32px;
  background-color: #fff;

  & p {
    color: #000;
  }

  & svg,
  & p {
    opacity: 0.75;
  }

  &:hover {
    border: 2px solid #ff9494;
    background-color: #ff9494;
    text-decoration: none;
    cursor: pointer;

    & svg,
    & p {
      color: #fff;
      opacity: 1;
    }
  }
`;
