// Libraries
import Image from "next/image";

// Components
import Wrapper from "@/Components/UIKit/Wrapper/Wrapper";

// Data
import { blogs } from "@/Data/blogs";

// Styles
import Style from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <Wrapper>
      <div className={Style.headings}>
        <h4>Blog</h4>
        <h1>Thoughts and words</h1>
      </div>
      {blogs.map(
        (blog: Blog, index: number) =>
          index === 0 && (
            <Card
              key={index}
              image={blog.image}
              category={blog.category}
              date={blog.date}
              blogText={blog.blogText}
              name={blog.name}
              userImage={blog.userImage}
            />
          )
      )}
      <div className={Style.separator} />
    </Wrapper>
  );
};

const Card: React.FC<Blog> = ({
  image,
  category,
  date,
  blogText,
  name,
  userImage,
}) => {
  return (
    <div className={Style.card}>
      <div
        className={Style.cardImage}
        style={{
          background: `url(${image.src}) center / cover no-repeat`,
        }}
      />
      <div>
        <div className={Style.catDateWrapper}>
          <h6>{category}</h6>
          <h6>{date}</h6>
        </div>
        <h1>{blogText}</h1>
        <div className={Style.userWrapper}>
          <Image src={userImage} alt="user image" />
          <h6>{name}</h6>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
