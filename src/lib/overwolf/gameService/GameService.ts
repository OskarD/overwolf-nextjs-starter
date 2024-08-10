import { Event } from "@/screens/background/Screen";
import { Subject } from "rxjs";
import EventType from "../EventType";
import gameFeatures from "../gameFeatures";
import setOverwolfRequiredFeatures from "./setRequiredFeatures";
import { GameState, GameStateUpdateEvent } from "./types";

type InfoUpdateEvent = overwolf.games.events.InfoUpdates2Event<
  string,
  overwolf.games.events.InfoUpdate2
>;

export const ogsEventBus = new Subject<Event>();

class GameService {
  private static _instance: GameService;

  private constructor() {}

  public static getInstance = (): GameService => {
    if (!GameService._instance) {
      GameService._instance = new GameService();
    }
    return GameService._instance;
  };

  private _state: GameState = {};

  public handleNewGame = (gameClassId: number) => {
    const features = gameFeatures.get(gameClassId);
    if (features === undefined) {
      console.warn("Features set", gameFeatures);
      throw new Error(`No features set for game class ID ${gameClassId}`);
    }

    setOverwolfRequiredFeatures(features);
  };

  private mergeWithCurrentState = (
    stateUpdate: Partial<GameState>,
  ): GameState =>
    Object.entries(stateUpdate).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          ...acc[key],
          ...value,
        },
      }),
      structuredClone(this._state),
    );

  public handleInfoUpdates = (event: InfoUpdateEvent) => {
    const partialUpdate = event.info as Partial<GameState>;
    const updatedState: GameState = this.mergeWithCurrentState(partialUpdate);

    ogsEventBus.next({
      type: EventType.GAME_STATE_UPDATE,
      payload: {
        partialUpdate,
        updatedState,
        previousState: this._state,
      } as GameStateUpdateEvent,
    });

    this._state = updatedState;
  };
}

export default GameService;
