// Libraries
import React from "react";
import Image, { StaticImageData } from "next/image";

// Components
import Wrapper from "../Wrapper/Wrapper";
import Button from "../Button/Button";

// Images
import leftImage from "@/Assets/images/row-image.png";
import rightImage from "@/Assets/images/rightImage.png";
import checkBlue from "@/Assets/images/check-blue.svg";

// svg Icons
import EyeIcon from "@/Assets/svgIcons/eyeIcon/EyeIcon";
import FeatherIcon from "@/Assets/svgIcons/featherIcon/FeatherIcon";
import SunIcon from "@/Assets/svgIcons/sunIcon/SunIcon";

// Styles
import Style from "./CustomRow.module.css";

interface RowProps {
  version: "left" | "right";
}

interface DataItem {
  text: string;
  icon?: React.ReactNode;
}

interface DataObject {
  title: string;
  image: StaticImageData;
  data: DataItem[];
}

const checks: DataObject = {
  image: leftImage,
  title:
    "We connect our customers with the best, and help them keep up-and stay open.",
  data: [
    {
      text: "We connect our customers with the best.",
    },
    {
      text: "Advisor success customer launch party.",
    },
    {
      text: "Business-to-consumer long tail.",
    },
  ],
};

const points: DataObject = {
  image: rightImage,
  title:
    "We connect our customers with the best, and help them keep up-and stay open.",
  data: [
    {
      icon: <FeatherIcon />,
      text: "We connect our customers with the best.",
    },
    {
      icon: <EyeIcon />,
      text: "Advisor success customer launch party.",
    },
    {
      icon: <SunIcon />,
      text: "Business-to-consumer long tail.",
    },
  ],
};

const CustomRow: React.FC<RowProps> = ({ version }) => {
  const { image, data, title } = version === "left" ? checks : points;
  const imageOrder = version === "left" ? 1 : 2;
  const textOrder = version === "left" ? 2 : 1;

  return (
    <Wrapper>
      <div className={Style.rowGrid}>
        <Image style={{ order: imageOrder }} src={image} alt="Row Image" />
        <div className={Style.textWrapper} style={{ order: textOrder }}>
          <h2>{title}</h2>
          <ul>
            {data.map((item, index) => (
              <li
                className={version === "left" ? Style.check : Style.point}
                key={index}
              >
                {version === "left" ? (
                  <Image src={checkBlue} alt="Icon" />
                ) : (
                  item.icon
                )}
                {item.text}
              </li>
            ))}
          </ul>
          {version === "left" && <Button>start now</Button>}
        </div>
      </div>
    </Wrapper>
  );
};

export default CustomRow;
