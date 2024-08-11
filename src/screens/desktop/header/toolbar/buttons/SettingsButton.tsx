import ButtonWrapper from "./ButtonWrapper";
import SettingsIcon from "./images/SettingsIcon";

const SettingsButton = () => (
  <ButtonWrapper onClick={() => (window.location.href = "overwolf://settings")}>
    <SettingsIcon />
  </ButtonWrapper>
);

export default SettingsButton;
