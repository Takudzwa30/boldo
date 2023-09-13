"use client";

// Components
import HeroSection from "@/app/home/Components/HeroSection/HeroSection";

// Libraries
import { useEffect } from "react";

// Context
import useTheme from "@/context/useTheme";

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  });
  return (
    <div className={theme === "dark" ? "darkTheme" : "lightTheme"}>
      <section>
        <HeroSection />
      </section>
    </div>
  );
}
