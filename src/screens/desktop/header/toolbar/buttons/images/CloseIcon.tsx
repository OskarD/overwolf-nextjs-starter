import { FC, SVGProps } from "react";

const CloseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="6 6 18 18" {...props}>
    <g fill="none" stroke="currentColor">
      <path d="m19.5 10.5-9 9M10.5 10.5l9 9" />
    </g>
  </svg>
);

export default CloseIcon;
