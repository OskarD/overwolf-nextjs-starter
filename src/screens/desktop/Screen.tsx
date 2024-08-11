import GameStateView from "@/features/gameStateView/GameStateView";
import { FC } from "react";
import Header from "./header/Header";

const Screen: FC = () => (
  <div className="text-slate-200 bg-slate-600 top-0 left-0 right-0 bottom-0 absolute">
    <Header />
    <GameStateView />
  </div>
);

export default Screen;
