import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const Javascript = ({ ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 15 15"
    strokeWidth={1}
    stroke="currentColor"
    {...props}
  >
    <path d="m12.5 8v-.16667c0-.73638-.597-1.33333-1.3333-1.33333h-1.1667c-.82843 0-1.5.67157-1.5 1.5s.67157 1.5 1.5 1.5h1c.8284 0 1.5.6716 1.5 1.5s-.6716 1.5-1.5 1.5h-1c-.82843 0-1.5-.6716-1.5-1.5m-2-5v5c0 .8284-.67157 1.5-1.5 1.5s-1.5-.6716-1.5-1.5m-3-10.5h14v14h-14z" />
  </svg>
);
