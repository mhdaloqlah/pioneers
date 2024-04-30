import React from "react";

import "./HomePage.css";
import Hero from "../../container/Hero/Hero";
import Top from "../../container/Top/Top";
import Video from "../../container/video/Video";
import FAQs from "../../container/FAQS/FAQs";
import Container from "@mui/material/Container";
import Pioneers from "../../container/Pioneers/Pioneers";

const HomePage = () => (
  <>
    <Hero />
    <Top />
    <Video />
    <Pioneers />
    <FAQs />
  </>
);

export default HomePage;
