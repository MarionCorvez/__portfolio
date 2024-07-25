import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const Wordpress = ({ ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 15 15"
    strokeWidth={0.25}
    stroke="currentColor"
    {...props}
  >
    <path d="m5.5 13.5-.47891.1437c.06326.2108.257.3555.47715.3563s.41491-.1425.47965-.353zm4 0-.47891.1437c.06109.2036.24427.3463.45666.3558.21238.0095.40753-.1164.48649-.3138zm3.5307-8.82687.4643.1857zm-.5415-1.93123-.3.4zm-.1321-.09904.3-.4zm-2 2 .4-.3zm.2858-2-.3-.4zm-3.1429 11.35714c-3.58985 0-6.5-2.9101-6.5-6.5h-1c0 4.1421 3.35786 7.5 7.5 7.5zm6.5-6.5c0 3.5899-2.9101 6.5-6.5 6.5v1c4.1421 0 7.5-3.3579 7.5-7.5zm-6.5-6.5c3.5899 0 6.5 2.91015 6.5 6.5h1c0-4.14214-3.3579-7.5-7.5-7.5zm0-1c-4.14214 0-7.5 3.35786-7.5 7.5h1c0-3.58985 2.91015-6.5 6.5-6.5zm-5.47891 3.64367 3 10.00003.95782-.2874-3-9.99997zm3.9568 10.00333 2-6.49996-.95578-.29408-2 6.50004zm.0432-10.00333 3 10.00003.95782-.2874-3-9.99997zm6.76811-1.30177-.1321-.09904-.6.8.1321.09904zm-2.83206 2.60096.64286.85714.8-.6-.6429-.85714zm.38576-2.7c-.85214.63907-1.02483 1.8479-.38576 2.7l.79996-.6c-.3077-.41027-.2245-.9923.1858-1.3zm2.3142 0c-.6857-.51429-1.6285-.51429-2.3142 0l.6.8c.3301-.24762.7841-.24762 1.1142 0zm.8379 2.61597c.3608-.90206.0714-1.934-.7058-2.51693l-.6.8c.4155.31163.5702.8633.3773 1.34554zm-11.495-.85883h2v-1h-2zm3 0h3v-1h-3zm4.96424 9.6857 3.53076-8.82687-.9285-.37139-3.53074 8.82686z" />
  </svg>
);
