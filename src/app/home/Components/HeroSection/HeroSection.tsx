"use client";

// Libraries
import { useEffect } from "react";

// Context
import useTheme from "@/context/useTheme";

// Components
import Wrapper from "@/Components/UIKit/Wrapper/Wrapper";

// Styles
import Style from "./HeroSection.module.css";

const HeroSectioin: React.FC = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  useEffect(() => {
    setTheme("dark");
  });
  return (
    <div className={theme === "dark" ? "darkTheme" : "lightTheme"}>
      <div className={Style.hero}>
        <Wrapper>
          <h1>Hero Setcion</h1>
          <h2></h2>
          <button>Light</button>
          <button>Dark</button>
        </Wrapper>
      </div>
    </div>
  );
};

export default HeroSectioin;
