"use client";

// Components
import Home from "@/app/home/page";

// Libraries
import { useEffect } from "react";

// Context
import useTheme from "@/context/useTheme";

export default function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  });
  return (
    <>
      <Home />
    </>
  );
}
