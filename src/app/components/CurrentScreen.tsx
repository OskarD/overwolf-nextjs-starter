import dynamic from "next/dynamic";
import { memo } from "react";
import { WINDOW_NAMES } from "../shared/constants";

//window name in manifest file
const { BACKGROUND, DESKTOP, IN_GAME } = WINDOW_NAMES;

//lazy load window components, so that they are not loaded until they are needed
//this is done to reduce the amount of time spent loading
const BackgroundScreen = dynamic(() => import("@/screens/Background"));
const DesktopScreen = dynamic(() => import("@/screens/Desktop"));
const InGameScreen = dynamic(() => import("@/screens/InGame"));

type CurrentScreenProps = {
  name?: string;
};
//return the current page based on the window name, the current window name is passed in as a prop
//this is used to determine which page to render
const CurrentScreen = memo(function CurrentScreen({
  name,
}: CurrentScreenProps) {
  switch (name) {
    case BACKGROUND:
      return <BackgroundScreen />;
    case DESKTOP:
      return <DesktopScreen />;
    case IN_GAME:
      return <InGameScreen />;
    default:
      throw new Error(`Screen name not configured: ${name}`);
  }
});

export default CurrentScreen;
