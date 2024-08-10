import EventBusEvent from "@/lib/EventBusEvent";
import { ogsEventBus } from "@/lib/overwolf/gameService/GameService";
import { Subject } from "rxjs";
import useGameStateEmitter from "./hooks/useGameStateEmitter";
import useOpenWindows from "./hooks/useOpenWindows";

declare global {
  interface Window {
    eventBus: Subject<EventBusEvent>;
  }
}

window.eventBus = ogsEventBus;

const Screen = () => {
  useOpenWindows();
  useGameStateEmitter();
  return null;
};

export default Screen;
