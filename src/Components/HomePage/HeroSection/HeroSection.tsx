// Libraries
import { useEffect } from "react";



// Styles
import Style from "./HeroSection.module.css";

export default function HeroSection() {

  return (
    <div className={Style.hero}>
      <h1>Hero Setcion</h1>
      <h2></h2>
      <button
      
      >
        Light
      </button>
      <button
      
      >
        Dark
      </button>
    </div>
  );
}
