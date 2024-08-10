import EventType from "./EventType";

interface EventBusEvent {
  type: EventType;
  payload: any;
}

export default EventBusEvent;
