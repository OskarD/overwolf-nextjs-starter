import { FC, useCallback, useEffect, useState } from "react";
import MaximizeButton from "./MaximizeButton";
import RestoreButton from "./RestoreButton";

const onWindowStateChange = overwolf.windows.onStateChanged;
type WindowStateChangedEvent = overwolf.windows.WindowStateChangedEvent;
type GetWindowStateResult = overwolf.windows.GetWindowStateResult;

enum CopyOfWindowStateEx {
  closed = "closed",
  hidden = "hidden",
  maximized = "maximized",
  minimized = "minimized",
  normal = "normal",
}

const MaximizeOrRestoreButton: FC<{ windowName: string }> = ({
  windowName,
}) => {
  const [windowState, setWindowState] = useState<CopyOfWindowStateEx>();

  const loadIsMaximized = useCallback(() => {
    overwolf.windows.getWindowState(
      windowName,
      ({ window_state_ex, success, error }: GetWindowStateResult) => {
        if (!success) {
          throw new Error(error);
        }

        const newWindowState = window_state_ex as string as CopyOfWindowStateEx;
        setWindowState(newWindowState);
      },
    );
  }, [windowName]);

  const handleWindowStateChanged = useCallback(
    async ({ window_name, window_state_ex }: WindowStateChangedEvent) => {
      if (window_name !== windowName) {
        return;
      }

      const newWindowState = window_state_ex as string as CopyOfWindowStateEx;

      setWindowState(newWindowState);
    },
    [windowName],
  );

  useEffect(() => {
    loadIsMaximized();
    onWindowStateChange.addListener(handleWindowStateChanged);
    return () => onWindowStateChange.removeListener(handleWindowStateChanged);
  }, [handleWindowStateChanged, loadIsMaximized]);

  return windowState === CopyOfWindowStateEx.maximized ? (
    <RestoreButton windowName={windowName} />
  ) : (
    <MaximizeButton windowName={windowName} />
  );
};

export default MaximizeOrRestoreButton;
