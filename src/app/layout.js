import "./globals.css";
import localFont from "next/font/local";
import {AOSInit} from "@/aos";

export const metadata = {
  title: "Հրաչ և Ռուզաննա",
  description: "Հրաչի և Ռուզաննայի հարսանիքի հրավիրատոմս",
};

const wien = localFont({
  src: "../assets/fonts/wien.ttf",
  display: "swap",
  variable: "--font-wien",
  style: "normal",
});

const mardoto = localFont({
  src: [
    {
      path: "../assets/fonts/MARDOTO-THIN.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/MARDOTO-THINITALIC.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/MARDOTO-REGULAR.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/MARDOTO-ITALIC.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/MARDOTO-MEDIUM.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/MARDOTO-MEDIUMITALIC.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/MARDOTO-BOLD.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/MARDOTO-BOLDITALIC.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/fonts/MARDOTO-BLACK.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/MARDOTO-BLACKITALIC.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-mardoto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <AOSInit />
    <head>
      <link rel="icon" href="/ring.png" type="image/png" sizes="32x32" />
    </head>
    <body className={`${wien.variable} ${mardoto.variable}`}>{children}</body>
    </html>
  );
}
