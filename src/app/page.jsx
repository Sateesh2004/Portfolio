"use client";
import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import { useState } from "react";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("kumarsateesh838@gmail.com");
    setCopied(true);

    // Hide the "Copied" message after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>

        {/* Email display */}
        <div className="text-foreground rounded-full cursor-pointer z-50 p-2.5 xs:p-4 custom-bg absolute top-[8px] left-[8px]">
          kumarsateesh838@gmail.com
        </div>

        {/* Copy email button */}
        <div className="text-foreground rounded-full z-50 p-2.5 xs:p-4 custom-bg absolute top-[50px] left-[8px]">
          <button onClick={handleCopy}>
            Copy email address
          </button>
          {copied && (
            <span className="ml-4 text-green-500">Copied!</span>
          )}
        </div>

        {/* Send email button */}
        <div className="text-foreground rounded-full cursor-pointer z-50 p-2.5 xs:p-4 custom-bg absolute top-[100px] left-[8px]">
          <a href="mailto:kumarsateesh838@gmail.com" className="no-underline text-foreground">
            Send me email
          </a>
        </div>
      </div>
    </main>
  );
}
