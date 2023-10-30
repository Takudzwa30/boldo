"use client";

// Libraries
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

// Components
import Wrapper from "@/Components/UIKit/Wrapper/Wrapper";

// Styles
import Style from "./Accordion.module.css";

interface DropDownProps {
  text: string;
  title: string;
}

const data = [
  {
    text: "We connect our customers with the best, and help them keep up-and stay open.",
    title: "We connect our customers with the best?",
  },
  {
    text: "We connect our customers with the best, and help them keep up-and stay open.",
    title: "Android research & development rockstar? ",
  },
];

const Accordion: React.FC = () => {
  return (
    <Wrapper>
      <div className={Style.image} />
      <div className={Style.row}>
        <h2>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h2>
        <div>
          {data.map((item, index) => {
            return <DropDown key={index} title={item.title} text={item.text} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const DropDown: React.FC<DropDownProps> = ({ title, text }) => {
  const [active, setActive] = useState(true);
  return (
    <div className={Style.wrapper}>
      <div
        className={Style.headingContainer}
        onClick={() => setActive(!active)}
      >
        <h5>{title}</h5>
        {/* <BiRightArrowAlt className={active ? Style.iconActive : Style.icon} /> */}
      </div>

      <h6 className={active ? Style.activeText : Style.text}>{text}</h6>
      <div className={Style.halfSeparator} />
    </div>
  );
};

export default Accordion;
