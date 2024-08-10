import { WINDOW_NAMES } from "@/lib/windowNames";
import isDev from "../isDev";

async function getCurrentWindow() {
  if (isDev) {
    const windowName = WINDOW_NAMES.IN_GAME;
    console.log(
      `Running in dev mode, returning ${windowName} window, you can change this in src/lib/overwolf-essentials.ts: getCurrent`,
      "src/lib/overwolf-essentials.ts",
      "getCurrentWindow",
    );

    return Promise.resolve(windowName);
  }
  return new Promise<string>((resolve, reject) => {
    overwolf.windows.getCurrentWindow((result) => {
      if (result.success) {
        resolve(result.window.name);
      } else {
        reject(result.error);
      }
    });
  });
}

export default getCurrentWindow;
