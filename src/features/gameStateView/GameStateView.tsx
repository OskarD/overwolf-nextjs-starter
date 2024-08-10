import useGameState from "@/hooks/useGameState";
import { GameState } from "@/lib/overwolf/gameService/types";

const GameStateView = () => {
  const gameState: GameState | undefined = useGameState();

  if (gameState === undefined) {
    return null;
  }

  return (
    <div>
      <h2>Game State</h2>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(gameState).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{JSON.stringify(value, null, 2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameStateView;
