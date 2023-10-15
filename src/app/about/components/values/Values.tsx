// Libraries
import Image, { StaticImageData } from "next/image";

// Components
import Wrapper from "@/Components/UIKit/Wrapper/Wrapper";

// Images
import imageOne from "../../../../Assets/images/blogImageOne.png";

// Styles
import Style from "./Value.module.css";

// Types
interface CardProps {
  image: StaticImageData;
  title: string;
  text: string;
}

// Data
const data = [
  {
    image: imageOne,
    title: "We are commited.",
    text: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
  },
  {
    image: imageOne,
    title: "We are responsible.",
    text: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
  },
  {
    image: imageOne,
    title: "We aim for progress.",
    text: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
  },
];

const Values: React.FC = () => {
  return (
    <div className={Style.mainContainer}>
      <Wrapper>
        <div className={Style.container}>
          <div className={Style.headings}>
            <h4>Our values</h4>
            <h1>Things in we believe</h1>
            <h5>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.{" "}
            </h5>
          </div>
          <div className={Style.cards}>
            {data.map((item, i) => {
              return (
                <Card
                  key={i}
                  image={item.image}
                  title={item.title}
                  text={item.text}
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ image, title, text }) => {
  return (
    <div className={Style.card}>
      <Image src={image} alt="Card Image" />
      <div className={Style.textWrapper}>
        <h2>{title}</h2>
        <h4>{text}</h4>
      </div>
    </div>
  );
};

export default Values;
