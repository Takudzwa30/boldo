/// Components
import BlogCard from "@/Components/UIKit/blogCard/BlogCard";
import Wrapper from "@/Components/UIKit/Wrapper/Wrapper";

// Data
import { blogs } from "@/Data/blogs";

// Styles
import Style from ".//Blogs.module.css";
import Button from "@/Components/UIKit/Button/Button";

const Blogs: React.FC = () => {
  return (
    <Wrapper>
      <div className={Style.blogHeadings}>
        <h4>Our Blog</h4>
        <h1>Value proposition accelerator product management venture</h1>
      </div>
      <div className={Style.blogsGrid}>
        {blogs.map(
          (blog: Blog, index: number) =>
            index < 3 && (
              <BlogCard
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
      </div>
      <div className={Style.btnWrapper}>
        <Button version="white">see more</Button>
      </div>
    </Wrapper>
  );
};

export default Blogs;
