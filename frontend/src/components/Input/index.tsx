import React from "react";
import { InputProps } from "../../types";

import { Container } from "./styles";

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
};

export default Input;
