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
  Container,
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
    title: "Business People",
    text: "A timeless creation of black and white lace, this dress weaves together classic elegance and contemporary design. The embodiment of grace for the fashion-forward woman.",
  },
];

const Top = () => {
  return (
    <Box
      className="top__section app__wrapper"
      id="top"
      sx={{ height: { xs: "auto", md: "100vh" } }}
    >
      <img src={layout} alt="layout" className="layout__image" />
      <div className="app__wrapper_info">
        <h1 className="headtext__cormorant">Top</h1>
        <Grid sx={{ boxShadow:'none'}} container spacing={0}>

          
          {cards.map((card, index) => (
            <Grid sx={{ boxShadow:'none',}} item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "inherit",
                  border: '0',
                  boxShadow: "none",
                  borderStyle: "none",
                  fontFamily:"Oswald, sans-serif"
                  
                }}
              >
                <CardActionArea sx={{ border: 0, boxShadow: "none" }}>
                  <CardMedia
                    component="img"
                    height="500"
                    image={card.image}
                    alt={card.title}
                    sx={{
                      objectFit: "contain",
                      border: 0,
                      boxShadow: "none",
                      fontFamily:"Oswald, sans-serif"
                    }}
                  />
                  <CardContent sx={{ border: 0, boxShadow: "none" , fontFamily:'Oswald,sans-serif'}}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#dcca87", textAlign: "center" ,fontFamily:"Oswald, sans-serif"}}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", color: "#b5964d",fontFamily:"Oswald, sans-serif" }}
                    >
                      {card.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 2,
                    border: 0,
                    boxShadow: "none",
                  }}
                >
                  <Button sx={{backgroundColor:'#b5964d', color:'white',fontFamily:"Oswald, sans-serif"}}>See More</Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default Top;
