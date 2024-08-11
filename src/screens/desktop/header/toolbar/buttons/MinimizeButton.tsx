import { FC } from "react";
import ButtonWrapper from "./ButtonWrapper";
import MinimizeIcon from "./images/MinimizeIcon";

const MinimizeButton: FC<{ windowName: string }> = ({ windowName }) => (
  <ButtonWrapper onClick={() => overwolf.windows.minimize(windowName)}>
    <MinimizeIcon />
  </ButtonWrapper>
);

export default MinimizeButton;
