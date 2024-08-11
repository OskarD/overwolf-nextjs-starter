import { FC, SVGProps } from "react";

const MaximizeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="6 6 18 18" {...props}>
    <polyline
      points="13.5 12 13.5 9.5 20.5 9.5 20.5 16.5 18 16.5"
      fill="none"
      stroke="currentcolor"
    />
    <rect
      x="9.5"
      y="13.5"
      width={7}
      height={7}
      fill="none"
      stroke="currentcolor"
    />
  </svg>
);

export default MaximizeIcon;
