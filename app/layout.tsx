import type { Metadata } from "next";
import { font } from "@/app/lib/fonts";
import "@/app/lib/globals.css";

export const metadata: Metadata = {
  title: "Marion Corvez | Portfolio",
  description:
    "Discover Marion Corvez's profile, from product manager to front-end developer, as well as digital trainer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
