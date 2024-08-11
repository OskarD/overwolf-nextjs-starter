import getCurrentWindowName from "@/lib/overwolf/getCurrentWindowName";
import { WINDOW_NAMES } from "@/lib/overwolf/windowNames";
import { FC, use } from "react";
import CloseButton from "./buttons/CloseButton";
import DiscordButton from "./buttons/DiscordButton";
import MaximizeOrRestoreButton from "./buttons/MaximizeOrRestoreButton";
import MinimizeButton from "./buttons/MinimizeButton";
import SettingsButton from "./buttons/SettingsButton";

const Toolbar: FC = () => {
  const currentWindowName = use<string>(getCurrentWindowName());

  if (currentWindowName === undefined) {
    return null;
  }

  return (
    <div className="flex">
      <DiscordButton />
      <SettingsButton />
      <MinimizeButton windowName={currentWindowName} />
      <MaximizeOrRestoreButton windowName={currentWindowName} />
      <CloseButton windowName={WINDOW_NAMES.BACKGROUND} />
    </div>
  );
};

export default Toolbar;
