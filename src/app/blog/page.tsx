// Libraries
"use client";
import { useEffect } from "react";

// Contexts
import useTheme from "@/context/useTheme";

// Components
import HeroSection from "./components/heroSection/HeroSection";

const page: React.FC = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  });
  return (
    <>
      <section>
        <HeroSection />
      </section>
    </>
  );
};

export default page;
