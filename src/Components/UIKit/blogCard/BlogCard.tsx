import Image from "next/image";

// Styles
import Style from "./BlogCard.module.css";

const BlogCard: React.FC<Blog> = ({
  image,
  category,
  date,
  blogText,
  name,
  userImage,
}) => {
  return (
    <div className={Style.card}>
      <Image src={image} alt="blog Image" />
      <div className={Style.catDateWrapper}>
        <h6>{category}</h6>
        <h6>{date}</h6>
      </div>
      <h4>{blogText}</h4>
      <div className={Style.userWrapper}>
        <Image src={userImage} alt="user image" />
        <h6>{name}</h6>
      </div>
    </div>
  );
};

export default BlogCard;
