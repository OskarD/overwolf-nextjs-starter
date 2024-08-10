import EventBusEvent from "@/lib/EventBusEvent";
import { ogsEventBus } from "@/lib/overwolf/gameService/GameService";
import { Subject } from "rxjs";
import useGameStateEmitter from "./hooks/useGameStateEmitter";
import useWindowOpener from "./hooks/useWindowOpener";

declare global {
  interface Window {
    eventBus: Subject<EventBusEvent>;
  }
}

window.eventBus = ogsEventBus;

const Screen = () => {
  useWindowOpener();
  useGameStateEmitter();
  return null;
};

export default Screen;
