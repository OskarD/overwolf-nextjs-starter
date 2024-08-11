import { FC } from "react";
import ButtonWrapper from "./ButtonWrapper";
import CloseIcon from "./images/CloseIcon";

const CloseButton: FC<{ windowName: string }> = ({ windowName }) => (
  <ButtonWrapper onClick={() => overwolf.windows.close(windowName)}>
    <CloseIcon />
  </ButtonWrapper>
);

export default CloseButton;
