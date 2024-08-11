import Image from "next/image";
import { FC } from "react";
import logo from "./logo.jpg";
import Toolbar from "./toolbar/Toolbar";

const Header: FC = () => (
  <div className="bg-slate-800 h-20 flex justify-between">
    <div className="pl-3 self-center">
      <Image src={logo.src} alt="Logo" height={40} width={40} priority />
    </div>
    <div className="place-items-start">
      <Toolbar />
    </div>
  </div>
);

export default Header;
