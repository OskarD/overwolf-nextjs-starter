import isDev from "@/lib/isDev";
import { FC } from "react";
import ButtonWrapper from "./ButtonWrapper";
import DiscordIcon from "./images/DiscordIcon";

const DISCORD_LINK = "https://discord.com/invite/yChRMBQ";

const DiscordButton: FC = () => {
  const handleClick = () => {
    if (isDev) return window.open(DISCORD_LINK);
    overwolf.utils.openUrlInDefaultBrowser(DISCORD_LINK);
  };

  return (
    <ButtonWrapper onClick={handleClick}>
      <DiscordIcon className="p-[1px]" />
    </ButtonWrapper>
  );
};

export default DiscordButton;
