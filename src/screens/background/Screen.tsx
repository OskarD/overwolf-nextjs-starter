import EventBusEvent from "@/lib/EventBusEvent";
import { ogsEventBus } from "@/lib/overwolf/gameService/GameService";
import { FC } from "react";
import { Subject } from "rxjs";
import useGameStateEmitter from "./hooks/useGameStateEmitter";
import useWindowOpener from "./hooks/useWindowOpener";

declare global {
  interface Window {
    eventBus: Subject<EventBusEvent>;
  }
}

window.eventBus = ogsEventBus;

const Screen: FC = () => {
  useWindowOpener();
  useGameStateEmitter();
  return null;
};

export default Screen;
