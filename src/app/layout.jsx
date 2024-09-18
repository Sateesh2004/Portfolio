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
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />

  <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png"/>

  <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>

  <link rel="manifest" href="/site.webmanifest"/>

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
