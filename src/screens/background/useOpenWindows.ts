import { WindowsService } from "@/lib/overwolf/WindowsService";
import { WINDOW_NAMES } from "@/lib/windowNames";
import { useEffect } from "react";

type RunningGameInfo = overwolf.games.RunningGameInfo;

const useOpenWindows = () => {
  useEffect(() => {
    WindowsService.restore(WINDOW_NAMES.DESKTOP);
  }, []);

  useEffect(() => {
    const handleGameLaunched = ({
      classId: gameClassId,
    }: RunningGameInfo): void => {
      overwolf.extensions.current.getManifest((result) => {
        const targetedGameIds = result.data.game_targeting?.game_ids;
        const isTargetedGameId = targetedGameIds?.includes(gameClassId);

        if (!isTargetedGameId) {
          return;
        }

        WindowsService.restore(WINDOW_NAMES.IN_GAME);
      });
    };

    overwolf.games.onGameLaunched.addListener(handleGameLaunched);
    return () => {
      overwolf.games.onGameLaunched.removeListener(handleGameLaunched);
    };
  }, []);
};

export default useOpenWindows;
