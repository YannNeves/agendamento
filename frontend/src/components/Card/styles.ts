import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 20px 0;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding: 16px;
  color: #000;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .row {
    flex-direction: row !important;
  }

  .row-reverse {
    flex-direction: row-reverse !important;
  }

  & h1 {
    font-family: "Inter", sans-serif;
    font-size: 24px;
  }

  & p {
    opacity: 0.5;
  }

  & a.clickable {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    border: 2px solid transparent;
    transition: all 0.25s ease-in-out;
    text-decoration: none;
    color: #000;
    margin: -16px;
    padding: 16px;

    & svg {
      opacity: 0.75;
    }

    &:hover {
      border: 2px solid #FF9494;
      background-color: #FFE1E1;
      color: #000;
      text-decoration: none;
      cursor: pointer;

      & div:first-child {
        background-color: #FF9494;
        border: 2px solid #FF9494;
      }

      & div img,
      svg {
        color: #fff;
      }

      & svg {
        opacity: 1;
      }
    }
  }
`;
