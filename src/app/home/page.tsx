import React from "react";

// Components
import HeroSectioin from "./Components/HeroSection/HeroSection";
import Blogs from "./Components/blogs/Blogs";
import Services from "./Components/services/Services";
import CustomRow from "@/Components/UIKit/customRow/CustomRow";

const Home: React.FC = () => {
  return (
    <>
      <section>
        <HeroSectioin />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <CustomRow version="left" />
      </section>
      <section>
        <CustomRow version="right" />
      </section>
      <section>
        <Blogs />
      </section>
    </>
  );
};

export default Home;
