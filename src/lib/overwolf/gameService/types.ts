export type GameState = Record<string, any>;

export interface GameStateUpdateEvent {
  partialUpdate: Partial<GameState>;
  updatedState: GameState;
  previousState: GameState;
}
