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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/s.png" type="image/x-icon" />
      <link rel="icon" href="/s.png" type="image/x-icon" />
      <meta name="google-site-verification" content="uRi_8KJdu6QPJgH35SYqn5Gl0c5TGuVl7SzAa_huf6k" />
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
