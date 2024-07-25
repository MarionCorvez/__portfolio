import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const Vite = ({ ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke="currentColor"
    {...props}
  >
    <path d="M0 0h24v24H0z" />
    <path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z" />
    <path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" />
  </svg>
);
