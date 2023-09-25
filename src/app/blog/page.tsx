// Libraries
"use client";
import { useEffect } from "react";

// Contexts
import useTheme from "@/context/useTheme";

// Components
import HeroSection from "./components/heroSection/HeroSection";
import Blogs from "./components/blogs/Blogs";

const page: React.FC = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  });
  return (
    <>
      <HeroSection />
      <section>
        <Blogs />
      </section>
    </>
  );
};

export default page;
