import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const Git = ({ ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 15 15"
    strokeWidth={1}
    stroke="currentColor"
    {...props}
  >
    <path d="m2.5 10.5c-1.10457 0-2 .8954-2 2s.89543 2 2 2 2-.8954 2-2-.89543-2-2-2zm0 0v-6m2-2c0-1.10457-.89543-2-2-2s-2 .89543-2 2 .89543 2 2 2m2-2c0 1.10457-.89543 2-2 2m2-2h5c1.6569 0 3 1.34315 3 3v2m0 0c-1.1046 0-2 .89543-2 2 0 1.1046.8954 2 2 2s2-.8954 2-2c0-1.10457-.8954-2-2-2z" />
  </svg>
);
