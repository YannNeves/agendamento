import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  .column {
    display: flex;
    flex-direction: column;
  }

  p {
    max-width: 450px;
    font-size: 14px;
  }
`;
