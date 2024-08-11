import getCurrentWindowName from "@/lib/overwolf/getCurrentWindowName";
import { FC, use } from "react";
import CloseButton from "./buttons/CloseButton";
import DiscordButton from "./buttons/DiscordButton";
import MaximizeOrRestoreButton from "./buttons/MaximizeOrRestoreButton";
import MinimizeButton from "./buttons/MinimizeButton";
import SettingsButton from "./buttons/SettingsButton";

const Toolbar: FC = () => {
  const windowName = use<string>(getCurrentWindowName());

  if (windowName === undefined) {
    return null;
  }

  return (
    <div className="flex">
      <DiscordButton />
      <SettingsButton />
      <MinimizeButton windowName={windowName} />
      <MaximizeOrRestoreButton windowName={windowName} />
      <CloseButton windowName={windowName} />
    </div>
  );
};

export default Toolbar;
