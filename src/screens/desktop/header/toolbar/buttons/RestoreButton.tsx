import { FC } from "react";
import ButtonWrapper from "./ButtonWrapper";
import RestoreIcon from "./images/RestoreIcon";

const RestoreButton: FC<{ windowName: string }> = ({ windowName }) => (
  <ButtonWrapper onClick={() => overwolf.windows.restore(windowName)}>
    <RestoreIcon />
  </ButtonWrapper>
);

export default RestoreButton;
