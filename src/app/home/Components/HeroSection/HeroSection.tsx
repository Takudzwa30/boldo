"use client";

// Libraries
import { useEffect } from "react";

// Context
import useTheme from "@/context/useTheme";

// Components
import Wrapper from "@/Components/UIKit/Wrapper/Wrapper";

// Styles
import Style from "./HeroSection.module.css";
import Button from "@/Components/UIKit/Button/Button";
import ImageSliders from "../ImageSliders/ImageSliders";

const HeroSectioin: React.FC = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  });
  return (
    <div className={Style.hero}>
      <Wrapper>
        <div className={Style.heroGrid}>
          <div>
            <h1>Save time by building fast with Boldo Template </h1>
            <h6>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </h6>
            <div className={Style.btnWrapper}>
              <Button version="green">Buy template</Button>
              <Button>Explore</Button>
            </div>
          </div>
          <div className={Style.heroImg} />
        </div>
        <ImageSliders />
      </Wrapper>
    </div>
  );
};

export default HeroSectioin;
