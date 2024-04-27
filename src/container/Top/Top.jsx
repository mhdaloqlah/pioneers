import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import layout from "../../../public/assets/layout.png";
import businessman from "../../../public/assets/businessman.png";
import academic from "../../../public/assets/academic.png";
import creator from "../../../public/assets/creator.png";

import "./Top.css";
const cards = [
  {
    image: businessman,
    title: "Academic people",
    text: "A timeless creation of black and white lace, this dress weaves together classic elegance and contemporary design. The embodiment of grace for the fashion-forward woman.",
  },

  {
    image: academic,
    title: "Creative people",
    text: "A timeless creation of black and white lace, this dress weaves together classic elegance and contemporary design. The embodiment of grace for the fashion-forward woman.",
  },
  {
    image: creator,
    title: "Business Men",
    text: "A timeless creation of black and white lace, this dress weaves together classic elegance and contemporary design. The embodiment of grace for the fashion-forward woman.",
  },
];

const AwardCard = ({ award: { image, title, text } }) => (
  <div className="app__laurels_awards-card">
    {/* <div className="image__container"> */}
    <img src={image} alt="awards" />
    {/* </div> */}
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#b5964d" }}>
        {title}
      </p>
      <p className="p__opensans">{text}</p>
      <button className="custom__button">See More</button>
    </div>
  </div>
);

const Top = () => {
  return (
    <section className="top__section app__wrapper  " id="top">
      <img src={layout} alt="layout" className="layout__image" />
      <div className="app__wrapper_info">
        {/* <SubHeading title="Awards & recognition" /> */}
        <h1 className="headtext__cormorant">Top</h1>

        <div className="app__laurels_awards">
          {cards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Top;
