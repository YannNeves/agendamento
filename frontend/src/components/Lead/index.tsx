import React from "react";
import { DivProps } from "../../types";

import { Container } from "./styles";

const Lead: React.FC<DivProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Lead;
