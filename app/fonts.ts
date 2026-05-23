import { Bowlby_One } from "next/font/google";
import localFont from "next/font/local";

export const display = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display-raw",
  display: "swap",
});

export const sans = localFont({
  src: [
    { path: "./fonts/Aspekta-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Aspekta-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Aspekta-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Aspekta-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans-raw",
  display: "swap",
});
