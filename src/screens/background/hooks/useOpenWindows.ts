import { WindowsService } from "@/lib/overwolf/WindowsService";
import { WINDOW_NAMES } from "@/lib/overwolf/windowNames";
import { useEffect } from "react";

type RunningGameInfo = overwolf.games.RunningGameInfo;

const { getManifest } = overwolf.extensions.current;
const { onGameLaunched } = overwolf.games;

const useOpenWindows = () => {
  useEffect(() => {
    WindowsService.restore(WINDOW_NAMES.DESKTOP);
  }, []);

  useEffect(() => {
    const handleGameLaunched = ({
      classId: gameClassId,
    }: RunningGameInfo): void => {
      getManifest((result) => {
        const targetedGameIds = result.data.game_targeting?.game_ids;
        const isTargetedGameId = targetedGameIds?.includes(gameClassId);

        if (!isTargetedGameId) {
          return;
        }

        WindowsService.restore(WINDOW_NAMES.IN_GAME);
      });
    };

    onGameLaunched.addListener(handleGameLaunched);
    return () => {
      onGameLaunched.removeListener(handleGameLaunched);
    };
  }, []);
};

export default useOpenWindows;
