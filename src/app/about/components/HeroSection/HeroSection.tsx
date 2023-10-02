import React from "react";

// Components
import Wrapper from "@/Components/UIKit/Wrapper/Wrapper";

// Styles
import Style from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <div className={Style.hero}>
      <Wrapper>
        <h4>About</h4>
        <h1>We love to make great things, things that matter.</h1>
        <h6>
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </h6>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
