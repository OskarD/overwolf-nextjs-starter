import { WINDOW_NAMES } from "@/app/shared/constants";
import { WindowsService } from "@/lib/overwolf/WindowsService";
import { useEffect } from "react";

const Background = () => {
  useEffect(() => {
    WindowsService.restore(WINDOW_NAMES.DESKTOP);
  }, []);

  return null;
};

export default Background;
