/// Components
import BlogCard from "@/Components/UIKit/blogCard/BlogCard";

// Data
import { blogs } from "@/Data/blogs";

// Styles
import Style from ".//Blogs.module.css";
import Wrapper from "@/Components/UIKit/Wrapper/Wrapper";

const Blogs: React.FC = () => {
  return (
    <Wrapper>
      <div className={Style.blogsGrid}>
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
    </Wrapper>
  );
};

export default Blogs;
