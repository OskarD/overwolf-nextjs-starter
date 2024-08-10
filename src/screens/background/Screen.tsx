import { ogsEventBus } from "@/lib/overwolf/gameService/GameService";
import { Subject } from "rxjs";
import useGameStateEmitter from "./hooks/useGameStateEmitter";
import useOpenWindows from "./hooks/useOpenWindows";

export interface Event {
  type: string;
  payload: any;
}

declare global {
  interface Window {
    eventBus: Subject<Event>;
  }
}

window.eventBus = ogsEventBus;

const Screen = () => {
  useOpenWindows();
  useGameStateEmitter();
  return null;
};

export default Screen;
