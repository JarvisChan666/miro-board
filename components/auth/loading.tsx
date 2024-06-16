import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export function Loading() {
  const [loadingText, setLoadingText] = useState("loading");

  // Loading anime
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === "loading...") {
          return "loading";
        } else {
          return prev + ".";
        }
      });
    }, 300);
    return () => clearInterval(interval);
  });
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="relative w-1/3 h-1/3">
        <Image
          src="/logo.svg"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
          className="animate-pulse duration-700"
        />
        <div className={cn("font-semibold text-1xl", font.className)}>
          <div className="text-white text-2xl font-mono animate-pulse justify-center ">
            {loadingText}
          </div>
        </div>
      </div>
    </div>
  );
}
