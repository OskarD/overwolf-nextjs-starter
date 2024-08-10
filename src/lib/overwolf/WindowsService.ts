export class WindowsService {
  /**
   * Obtain a window object by a name as declared in the manifest.
   * This is required in order to create the window before calling other APIs
   * on that window
   */
  static obtainWindow = (
    name: string,
  ): Promise<overwolf.windows.WindowResult> => {
    return new Promise((resolve, reject) => {
      overwolf.windows.obtainDeclaredWindow(name, (result) => {
        if (result.success) {
          resolve(result);
        } else {
          console.warn("WindowsService.obtainWindow(): error:", name, result);
          reject(new Error(result.error));
        }
      });
    });
  };

  /**
   * Obtain the current window's object. This is required in order to create
   * the window before calling other APIs on that window
   */
  static getCurrentWindow = (): Promise<overwolf.windows.WindowResult> => {
    return new Promise((resolve, reject) => {
      overwolf.windows.getCurrentWindow((result) => {
        if (result.success) {
          resolve(result);
        } else {
          console.warn("WindowsService.getCurrentWindow(): error:", result);
          reject(new Error(result.error));
        }
      });
    });
  };

  /**
   * Restore a window by name
   */
  static restore = async (name: string): Promise<void> => {
    const { window } = await WindowsService.obtainWindow(name);

    return new Promise((resolve, reject) => {
      overwolf.windows.restore(window.id, (result) => {
        if (result.success) {
          resolve();
        } else {
          console.warn("WindowsService.restore(): error:", name, result);
          reject(new Error(result.error));
        }
      });
    });
  };

  /**
   * Minimize a window by name
   */
  static minimize = async (name: string): Promise<void> => {
    const { window } = await WindowsService.obtainWindow(name);

    return new Promise((resolve, reject) => {
      overwolf.windows.minimize(window.id, (result) => {
        if (result.success) {
          resolve();
        } else {
          console.warn("WindowsService.minimize(): error:", name, result);
          reject(new Error(result.error));
        }
      });
    });
  };

  /**
   * Maximize a window by name
   */
  static maximize = async (name: string): Promise<void> => {
    const { window } = await WindowsService.obtainWindow(name);

    return new Promise((resolve, reject) => {
      overwolf.windows.maximize(window.id, (result) => {
        if (result.success) {
          resolve();
        } else {
          console.warn("WindowsService.maximize(): error:", name, result);
          reject(new Error(result.error));
        }
      });
    });
  };

  /**
   * Close a window
   */
  static close = async (name: string): Promise<void> => {
    const state = await WindowsService.getWindowState(name);

    if (state === "closed") return;

    const { window } = await WindowsService.obtainWindow(name);

    await new Promise((resolve) => overwolf.windows.close(window.id, resolve));
  };

  /**
   * Set position of a window
   */
  static changePosition = async (
    name: string,
    left: number,
    top: number,
  ): Promise<overwolf.windows.WindowIdResult> => {
    const { window } = await WindowsService.obtainWindow(name);

    return new Promise((resolve, reject) => {
      overwolf.windows.changePosition(window.id, left, top, (result) => {
        if (result && result.success) {
          resolve(result);
        } else {
          console.warn("WindowsService.changePosition(): error:", name, result);
          reject(new Error(result.error));
        }
      });
    });
  };

  /**
   * Get state of the window
   */
  static getWindowState = (
    name: string,
  ): Promise<overwolf.windows.enums.WindowStateEx | undefined> => {
    return new Promise((resolve, reject) => {
      overwolf.windows.getWindowState(name, (result) => {
        if (result.success) {
          resolve(result.window_state_ex);
        } else {
          console.warn("WindowsService.getWindowState(): error:", name, result);
          reject(new Error(result.error));
        }
      });
    });
  };

  /**
   * Get state of the window
   */
  static setTopmost = async (
    name: string,
    shouldBeTopmost: boolean,
  ): Promise<overwolf.windows.WindowIdResult> => {
    const { window } = await WindowsService.obtainWindow(name);

    return new Promise((resolve, reject) => {
      overwolf.windows.setTopmost(window.id, shouldBeTopmost, (result) => {
        if (result.success) {
          resolve(result);
        } else {
          console.warn("WindowsService.setTopmost(): error:", name, result);
          reject(new Error(result.error));
        }
      });
    });
  };

  /**
   * Get state of the window
   */
  static bringToFront = async (
    name: string,
    grabFocus: boolean = false,
  ): Promise<overwolf.windows.WindowIdResult> => {
    const { window } = await WindowsService.obtainWindow(name);

    return new Promise((resolve, reject) => {
      overwolf.windows.bringToFront(window.id, grabFocus, (result) => {
        if (result.success) {
          resolve(result);
        } else {
          console.warn("WindowsService.bringToFront(): error:", name, result);
          reject(new Error(result.error));
        }
      });
    });
  };

  /**
   * Get states of app's windows
   */
  static getWindowsStates = (): Promise<
    overwolf.Dictionary<overwolf.windows.enums.WindowStateEx>
  > => {
    return new Promise((resolve, reject) => {
      overwolf.windows.getWindowsStates((state) => {
        if (state.success) {
          resolve(state.resultV2);
        } else {
          reject(state);
        }
      });
    });
  };

  /**
   * Get a list of monitors
   */
  static getMonitorsList = (): Promise<overwolf.utils.Display[]> => {
    return new Promise((resolve, reject) => {
      overwolf.utils.getMonitorsList((result) => {
        if (result && result.success && result.displays) {
          resolve(result.displays);
        } else {
          console.warn("WindowsService.getMonitorsList(): error:", result);
          reject(new Error(result.error));
        }
      });
    });
  };

  /**
   * Determine if a window stat is open (normal or maximized)
   */
  static windowStateIsOpen = (state: string): boolean => {
    switch (state) {
      case "normal":
      case "maximized":
        return true;
      default:
        return false;
    }
  };
}
