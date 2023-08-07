"use client";

import { useEffect } from "react";

import HeroSection from "@/Components/About/HeroSection/HeroSection";
import useTheme from "@/context/useTheme";

export default function () {
  const {  setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  });

  return (
    <>
      <HeroSection />
    </>
  );
}
