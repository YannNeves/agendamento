import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
  position: absolute;
  top: 150px;

  & div {
    position: relative;
    padding: 24px;

    & h1 {
      max-width: 600px;
    }

    & svg {
      opacity: 0.5;

      &:hover {
        cursor: pointer;
        opacity: 1;
      }

      &.trash {
        position: absolute;
        right: 16px;
        top: 16px;
      }

      &.down,
      &.up {
        padding: 0 10px;
      }

      &.trash:hover,
      &.down:hover {
        color: #ff1333;
      }

      &.up:hover {
        color: #ff7d7d;
      }
    }
  }
`;
