import React from "react";

import "./HomePage.css";
import Hero from "../../container/Hero/Hero";
import Top from "../../container/Top/Top";
import Video from "../../container/video/Video";
import FAQs from "../../container/FAQS/FAQs";
import Container from "@mui/material/Container";
import Pioneers from "../../container/Pioneers/Pioneers";
import VideoGrid from "../../container/video/VideoGrid";
import ControlledAccordions from "../../container/FAQS/FAQs";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = () => (
  <>
    
    <Hero />
    <Top />
    <VideoGrid />
    <Pioneers />
    {/* <FAQs /> */}
    <ControlledAccordions/>

  </>
);

export default HomePage;
