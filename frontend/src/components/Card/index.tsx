import React from "react";

import { Container } from "./styles";
import { DivProps } from "../../types";

const Card: React.FC<DivProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Card;
