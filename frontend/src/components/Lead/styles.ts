import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  & h1 {
    font-family: "Inter", sans-serif;
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 24px;
  }

  & p {
    opacity: 0.75;
  }
`;
