import { FC, MouseEventHandler, PropsWithChildren } from "react";

const ButtonWrapper: FC<
  PropsWithChildren<{ onClick: MouseEventHandler<HTMLDivElement> | undefined }>
> = ({ children, onClick }) => (
  <div className="p-2 hover:bg-slate-700 active:bg-slate-500" onClick={onClick}>
    <div className="h-5 w-5 relative text-slate-200">{children}</div>
  </div>
);

export default ButtonWrapper;
