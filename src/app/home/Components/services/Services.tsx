// Libraries
import { StaticImageData } from "next/image";

// Components
import Wrapper from "@/Components/UIKit/Wrapper/Wrapper";

// Icons
import { AiOutlineArrowRight } from "react-icons/ai";

// Images
import imageOne from "@/Assets/images/blogImageOne.png";

// Styles
import Style from "./Services.module.css";

interface CardProps {
  image: StaticImageData;
  title: string;
  text: string;
}

const data: CardProps[] = [
  {
    image: imageOne,
    title: "Cool feature title",
    text: "Learning curve network effects return on investment.",
  },
  {
    image: imageOne,
    title: "Cool feature title",
    text: "Learning curve network effects return on investment.",
  },
  {
    image: imageOne,
    title: "Cool feature title",
    text: "Learning curve network effects return on investment.",
  },
];

const Services: React.FC = () => {
  return (
    <Wrapper>
      <div className={Style.headings}>
        <h4>Our Services</h4>
        <h1>Handshake infographic mass market crowdfunding iteration.</h1>
      </div>
      <div className={Style.cardsGrid}>
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Card: React.FC<CardProps> = ({ image, title, text }) => {
  return (
    <div className={Style.card}>
      <div
        className={Style.cardImage}
        style={{
          background: `url(${image.src}) center / cover no-repeat`,
        }}
      />
      <h3>{title}</h3>
      <h4>{text}</h4>
      <div className={Style.linkWrapper}>
        <div className={Style.link}>
          <h4>Explore page</h4>
          <AiOutlineArrowRight />
        </div>
        <div className={Style.linkUnderLine} />
      </div>
    </div>
  );
};

export default Services;
