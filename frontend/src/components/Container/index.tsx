import React from "react";
import { DivProps } from "../../types";

import { Base } from "./styles";

const Container: React.FC<DivProps> = ({ children, ...rest }) => {
  return <Base {...rest}>{children}</Base>;
};

export default Container;
