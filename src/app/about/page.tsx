"use client";

// Libraries
import { useEffect } from "react";

// Components
import StoryNumbers from "./components/storyNumbers/StoryNumbers";
import HeroSection from "./components/HeroSection/HeroSection";

// Contexts
import useTheme from "@/context/useTheme";

export default function () {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  });

  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section>
        <StoryNumbers />
      </section>
    </>
  );
}
