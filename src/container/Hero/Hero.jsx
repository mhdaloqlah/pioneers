import React from "react";
import HeroImage from "../../../public/assets/Hero.png";
import Hundred from "../../../public/assets/hundred.png";


import "./Hero.css";
const Hero = () => {
  return (
    <section id="home" className="hero__bg">
      <div className="  app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse ">
          <img src={HeroImage} alt="Hero_image" />
        </div>
        <div className="mask"> </div>

        <div className="app__wrapper_info">
          <h1 className="headtext__cormorant">
            <span className="span__heading">Explore the</span> Top{" "}
            <span className="span__heading">100</span> Syrian Pioneers{" "}
            <span className="span__heading">In U</span>AE{" "}
          </h1>

          {/* <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
              .
            </p>
          </div>
          <p className="p__opensans">
            {" "}
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.{" "}
          </p>
        </div> */}

          <div className="app__chef-sign">
            <img src={Hundred} alt="sign_image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
