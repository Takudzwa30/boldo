
// import ThemeProvider from "./ThemeProvider/ThemeProvider";


// Styles
import Style from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
        <div className={Style.hero}>
          <h1>Hero</h1>
        </div>
      {/* </ThemeProvider> */}
    </>
  );
};

export default Hero;
