import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Sateesh • Portfolio",
    default:
      "Sateesh • Portfolio",
  },
  description:
    "A unique creative portfolio designed by Sateesh.",
    icons: {
      icon: "/icons/favicon.png",
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

  <link rel="manifest" href="/site.webmanifest"/>

</head>

      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
