import type { Metadata } from "next";
import { display, sans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Partyz",
  description: "Partyz — the party-themed rebuild target.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
