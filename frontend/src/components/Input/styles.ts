import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  input {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    padding: 8px 16px;
    font-size: 16px;
    min-width: 340px;
    width: 100%;
    max-width: 720px;

    &::placeholder {
      opacity: 0.5;
    }

    &:hover {
      border: 1px solid rgba(19, 105, 255, 0.5);
    }

    &:active,
    &:focus {
      border: 2px solid rgba(19, 105, 255, 0.85);
    }
  }
  
`;
