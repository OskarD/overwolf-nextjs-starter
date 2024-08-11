import { FC, SVGProps } from "react";

const SettingsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="6 6 18 18" {...props}>
    <path
      fill="currentcolor"
      d="M22 16.3v-2.6h-2.19a4.94 4.94 0 0 0-.49-1.18L20.87 11 19 9.13l-1.55 1.55a5 5 0 0 0-1.18-.49V8H13.7v2.19a5 5 0 0 0-1.18.49L11 9.13 9.13 11l1.55 1.55a5 5 0 0 0-.49 1.18H8v2.6h2.19a5 5 0 0 0 .49 1.18L9.13 19 11 20.87l1.55-1.55a4.94 4.94 0 0 0 1.18.49V22h2.6v-2.19a4.94 4.94 0 0 0 1.18-.49L19 20.87 20.87 19l-1.55-1.55a4.94 4.94 0 0 0 .49-1.18Zm-7 1.45A2.75 2.75 0 1 1 17.75 15 2.75 2.75 0 0 1 15 17.75Z"
    />
  </svg>
);

export default SettingsIcon;
