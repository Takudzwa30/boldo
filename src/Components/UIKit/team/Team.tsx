// Libraries
import Image, { StaticImageData } from "next/image";

// Components
import Wrapper from "../Wrapper/Wrapper";

// Images
import memberOne from "../../../Assets/images/teamMemberOne.png";

// Styles
import Style from "./Team.module.css";

// Types
interface CardProps {
  version: "horizontal" | "vertical";
  image: StaticImageData;
  name: string;
  position: string;
}

// Data
const data = [
  {
    image: memberOne,
    name: "Michael Scott",
    position: "General Manager",
  },
  {
    image: memberOne,
    name: "Michael Scott",
    position: "General Manager",
  },
  {
    image: memberOne,
    name: "Michael Scott",
    position: "General Manager",
  },
  {
    image: memberOne,
    name: "Michael Scott",
    position: "General Manager",
  },
  {
    image: memberOne,
    name: "Michael Scott",
    position: "General Manager",
  },
  {
    image: memberOne,
    name: "Michael Scott",
    position: "General Manager",
  },
  {
    image: memberOne,
    name: "Michael Scott",
    position: "General Manager",
  },
];

const Team: React.FC = () => {
  return (
    <Wrapper>
      <div className={Style.headings}>
        <h4>Our team</h4>
        <h1>The people behind the work</h1>
        <h5>
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.{" "}
        </h5>
      </div>
      <div className={Style.teamMembers}>
        {data.map((member, i) => {
          if (i < 3) {
            return (
              <Card
                key={i}
                version="vertical"
                image={member.image}
                name={member.name}
                position={member.position}
              />
            );
          }
        })}
      </div>
      <div className={Style.moreTeamMembers}>
        {data.map((member, i) => {
          if (i > 2) {
            return (
              <Card
                key={i}
                version="horizontal"
                image={member.image}
                name={member.name}
                position={member.position}
              />
            );
          }
        })}
      </div>
    </Wrapper>
  );
};

const Card: React.FC<CardProps> = ({ version, image, name, position }) => {
  return (
    <div
      className={
        version === "horizontal" ? Style.cardHorizontal : Style.cardVertical
      }
    >
      <Image src={image} alt={"Team Member"} />
      <div className={Style.memberInfo}>
        <h3>{name}</h3>
        <h6>{position}</h6>
      </div>
    </div>
  );
};

export default Team;
