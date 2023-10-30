// Components
import Wrapper from "@/Components/UIKit/Wrapper/Wrapper";

// Styles
import Style from "./StoryNumbers.module.css";

const StoryNumbers: React.FC = () => {
  return (
    <>
      <Wrapper>
        <div className={Style.story}>
          <h4>Our story</h4>
          <h1> Handshake infographic mass market crowdfunding iteration.</h1>
          <h4>
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.{" "}
          </h4>
        </div>
      </Wrapper>
      <div className={Style.numbers}>
        <Wrapper>
          <div className={Style.head}>
            <h4>Our numbers</h4>
            <h1>Handshake infographic mass market crowdfunding iteration.</h1>
          </div>
          <div className={Style.values}>
            <div className={Style.value}>
              <h1>120m</h1>
              <h3>Cool feature title</h3>
            </div>
            <div className={Style.value}>
              <h1>10.000</h1>
              <h3>Cool feature title</h3>
            </div>
            <div className={Style.value}>
              <h1>240</h1>
              <h3>Cool feature title</h3>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default StoryNumbers;
