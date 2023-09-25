//Components
import BlogCard from "@/Components/UIKit/blogCard/BlogCard";
import Button from "@/Components/UIKit/Button/Button";
import Wrapper from "@/Components/UIKit/Wrapper/Wrapper";

// Data
import { blogs } from "@/Data/blogs";

// Styles
import Style from "./Blogs.module.css";

const Blogs: React.FC = () => {
  return (
    <Wrapper>
      <h1 className={Style.heading}>Latest news</h1>
      <div className={Style.cardsGrid}>
        {blogs.map((blog: Blog, index: number) => (
          <BlogCard
            key={index}
            image={blog.image}
            category={blog.category}
            date={blog.date}
            blogText={blog.blogText}
            name={blog.name}
            userImage={blog.userImage}
          />
        ))}
      </div>
      <div className={Style.btnWrapepr}>
        <Button version="white">see more</Button>
      </div>
    </Wrapper>
  );
};

export default Blogs;
