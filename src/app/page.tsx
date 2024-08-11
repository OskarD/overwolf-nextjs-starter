"use client";

import "../lib/window.mock";

import getCurrentWindow from "@/lib/overwolf/getCurrentWindowName";
import { useEffect, useState } from "react";
import CurrentScreen from "../components/CurrentScreen";

export default function Home() {
  const [screenName, setScreenName] = useState<string | undefined>();

  useEffect(() => {
    const loadWindowName = async () => {
      try {
        const currentWindow = await getCurrentWindow();
        setScreenName(currentWindow);
        console.log("Screen loaded:", currentWindow);
      } catch (error) {
        console.error("Failed to load window name", error);
      }
    };

    loadWindowName();
  }, []);

  if (screenName === undefined) {
    return null;
  }

  return <CurrentScreen name={screenName} />;
}
