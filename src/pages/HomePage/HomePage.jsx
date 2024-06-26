import React from "react";

import "./HomePage.css";
import Hero from "../../container/Hero/Hero";
import Top from "../../container/Top/Top";
import Video from "../../container/video/Video";
import FAQs from "../../container/FAQS/FAQs";

const HomePage = () => (
  <>
    <Hero />
    <Top />
    <Video />
    <FAQs /> 
  </>
);

export default HomePage;
