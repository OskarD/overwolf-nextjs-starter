import EventBusEvent from "@/lib/EventBusEvent";
import { Subject } from "rxjs";
import isDev from "./isDev";
import { WINDOW_NAMES } from "./overwolf/windowNames";

class MockGepMethods {
  static addListener(): void {
    //callback();
  }
  static removeListener(): void {
    //callback();
  }
}
class MockCommonMethods {
  static addListener(callback: (payload?: any) => void): void {
    callback();
  }
  static removeListener(callback: (payload?: any) => void): void {
    callback();
  }
  static simpleRequestInterval(
    interval: number,
    callback: overwolf.CallbackFunction<overwolf.Result>,
  ): void {
    console.info(`Callback interval ${interval}`);
    callback({ success: true });
  }
}
/**
 *
 * Overwolf Mock
 *
 * Progress:
 * benchmarking: 100%
 * windows: 15%
 * games: 70%,
 * utils: 10%
 */

const overwolfMock: typeof overwolf = {
  version: "BROWSER DEV",
  benchmarking: {
    onFpsInfoReady: MockCommonMethods,
    onHardwareInfoReady: MockCommonMethods,
    onProcessInfoReady: MockCommonMethods,
    requestFpsInfo: MockCommonMethods.simpleRequestInterval,
    requestHardwareInfo: MockCommonMethods.simpleRequestInterval,
    requestProcessInfo: MockCommonMethods.simpleRequestInterval,
    requestPermissions: (
      callback: overwolf.CallbackFunction<overwolf.Result>,
    ) => {
      callback({ success: true });
    },
    stopRequesting: () => {},
  },
  //@ts-ignore
  settings: {
    language: {
      get: (
        callback: (
          result: overwolf.settings.language.GetLanguageResult,
        ) => void,
      ) => {
        console.info("get language");
        callback({ language: "en", success: true });
      },
      onLanguageChanged: {
        addListener: (
          callback: (
            payload: overwolf.settings.language.LanguageChangedEvent,
          ) => void,
        ) => {
          console.log("onLanguageChanged addListener");
          callback({ language: "en" });
        },
        removeListener: (
          callback: (
            payload: overwolf.settings.language.LanguageChangedEvent,
          ) => void,
        ) => {
          callback({ language: "en" });
        },
      },
    },
  },
  //@ts-ignore
  utils: {
    openUrlInDefaultBrowser: (url: string) => {
      window.open(url);
    },
  },
  windows: {
    getCurrentWindow(callback: (result: any) => void): void {
      callback({ window: { name: WINDOW_NAMES.BACKGROUND }, success: true });
    },
    getMainWindow: () => ({
      //@ts-ignore
      window: { eventBus: new Subject<EventBusEvent>() },
    }),
    //@ts-ignore
    obtainDeclaredWindow(
      windowName: string,
      callback: (response: any) => void,
    ): void {
      callback({ window: { name: windowName }, success: true });
    },
    //@ts-ignore
    restore(): void {
      console.info("Mock restore ");
    },
    //@ts-ignore
    maximize(): void {
      console.info("Mock maximize");
    },
    //@ts-ignore
    close(): void {
      console.info("Mock close");
    }, //@ts-ignore
    minimize(): void {
      console.info("Mock minimize");
    },
    onStateChanged: {
      addListener: () => {},
      removeListener: () => {},
    },
    getWindowState(): void {
      console.info("Mock getWindowState");
    },
  },
  //@ts-ignore
  games: {
    //@ts-ignore
    events: {
      onInfoUpdates2: MockGepMethods,
      onNewEvents: MockGepMethods,
      onInfoUpdates: MockGepMethods,
      onError: MockGepMethods,
      setRequiredFeatures: (features, callback) => {
        //@ts-ignore
        callback({ success: true, features });
      },
      getInfo: (callback: (payload?: any) => void) => {
        callback();
      },
    },
    getLastRunningGameInfo: (callback) => {
      callback({
        success: true,
      });
    },
    getRunningGameInfo: (callback) => {
      callback({} as any);
    },
    getRunningGameInfo2: (callback) => {
      callback({} as any);
    },
    onGameInfoUpdated: MockGepMethods,
    //@ts-ignore
    inputTracking: {
      onKeyDown: MockCommonMethods,
      onKeyUp: MockCommonMethods,
      onMouseDown: MockCommonMethods,
      onMouseUp: MockCommonMethods,
      getMousePosition: (
        callback: overwolf.CallbackFunction<overwolf.games.inputTracking.GetActivityResult>,
      ) => {
        callback({
          success: true,
          activity: {
            aTime: 0,
            apm: 0,
            iTime: 0,
            keyboard: {
              keys: [],
              total: 0,
            },
            mouse: {
              dist: 0,
              keys: 0,
              total: 0,
            },
          },
        });
      },
      getActivityInformation: (
        callback: overwolf.CallbackFunction<overwolf.games.inputTracking.GetActivityResult>,
      ) => {
        callback({
          success: true,
          activity: {
            aTime: 0,
            apm: 0,
            iTime: 0,
            keyboard: {
              keys: [],
              total: 0,
            },
            mouse: {
              dist: 0,
              keys: 0,
              total: 0,
            },
          },
        });
      },
      getEyeTrackingInformation: (
        callback: overwolf.CallbackFunction<overwolf.games.inputTracking.GetActivityResult>,
      ) => {
        callback({
          success: true,
          activity: {
            aTime: 0,
            apm: 0,
            iTime: 0,
            keyboard: {
              keys: [],
              total: 0,
            },
            mouse: {
              dist: 0,
              keys: 0,
              total: 0,
            },
          },
        });
      },
      pauseEyeTracking: () => {},
      resumeEyeTracking: () => {},
    },
  },
};

if (isDev) {
  Object.defineProperty(window, "overwolf", {
    writable: true,
    value: overwolfMock,
  });
}

export default isDev;
