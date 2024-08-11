import { FC } from "react";
import ButtonWrapper from "./ButtonWrapper";
import MaximizeIcon from "./images/MaximizeIcon";

const MaximizeButton: FC<{ windowName: string }> = ({ windowName }) => (
  <ButtonWrapper onClick={() => overwolf.windows.maximize(windowName)}>
    <MaximizeIcon />
  </ButtonWrapper>
);

export default MaximizeButton;
