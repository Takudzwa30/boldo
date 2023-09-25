import React from "react";

// Components
import HeroSectioin from "./Components/HeroSection/HeroSection";
import Blogs from "./Components/blogs/Blogs";

const Home: React.FC = () => {
  return (
    <>
      <section>
        <HeroSectioin />
      </section>
      <section>
        <Blogs />
      </section>
    </>
  );
};

export default Home;
