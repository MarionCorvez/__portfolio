import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const Figma = ({ ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 15 15"
    strokeWidth={1}
    stroke="currentColor"
    {...props}
  >
    <path d="m7.5 1v8.5m0 0v2c0 1.1046-.89543 2-2 2s-2-.8954-2-2 .89543-2 2-2m2 0h-2m0 0c-1.10457 0-2-.89543-2-2s.89543-2 2-2m0 0h2m-2 0h4m-4 0c-1.10457 0-2-.89543-2-2s.89543-2 2-2h4c1.1046 0 2 .89543 2 2s-.8954 2-2 2m0 0c1.1046 0 2 .89543 2 2s-.8954 2-2 2c-1.10457 0-2-.89543-2-2s.89543-2 2-2z" />
  </svg>
);
