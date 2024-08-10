import GameService from "@/lib/overwolf/gameService/GameService";
import { useEffect } from "react";

type RunningGameInfo = overwolf.games.RunningGameInfo;

const { onGameLaunched } = overwolf.games;
const { onInfoUpdates2 } = overwolf.games.events;

const gameService = GameService.getInstance();

const useGameStateEmitter = () => {
  const handleGameLaunched = (info: RunningGameInfo) => {
    gameService.handleNewGame(info.classId);
  };

  useEffect(() => {
    onGameLaunched.addListener(handleGameLaunched);
    onInfoUpdates2.addListener(gameService.handleInfoUpdates);
    return () => {
      onGameLaunched.removeListener(handleGameLaunched);
      onInfoUpdates2.removeListener(gameService.handleInfoUpdates);
    };
  }, []);
};

export default useGameStateEmitter;
