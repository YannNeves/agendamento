import React from "react";
import { DivProps } from "../../types";

import { Container, HelpContainer, HelpText } from "./styles";

const Content: React.FC<DivProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
};

export default Content;
