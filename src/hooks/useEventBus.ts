import EventType from "@/lib/overwolf/EventType";
import { useEffect } from "react";
import { filter } from "rxjs";

const useEventBus = () => {
  useEffect(() => {
    const eventBus = overwolf.windows.getMainWindow().window.eventBus;

    const listener = eventBus
      .pipe(filter(({ type }) => type === EventType.GAME_STATE_UPDATE))
      .subscribe(({ payload }) =>
        console.log("Received game state update", payload),
      );

    return () => listener.unsubscribe();
  }, []);
};

export default useEventBus;
