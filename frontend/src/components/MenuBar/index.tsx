import React from "react";
import { DivProps } from "../../types";

import { Container } from "./styles";

const MenuBar: React.FC<DivProps> = ({ children, visible, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default MenuBar;
