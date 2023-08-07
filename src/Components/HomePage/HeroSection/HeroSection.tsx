// Libraries
import { useEffect } from "react";

// Styles
import Style from "./HeroSection.module.css";
import Wrapper from "@/Components/UIKit/Wrapper/Wrapper";

export default function HeroSection() {
  return (
    <div className={Style.hero}>
      <Wrapper>
        <h1>Hero Setcion</h1>
        <h2></h2>
        <button>Light</button>
        <button>Dark</button>
      </Wrapper>
    </div>
  );
}
