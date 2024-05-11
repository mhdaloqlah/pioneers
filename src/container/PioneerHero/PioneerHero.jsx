import React from "react";
import Layout from "../../../public/assets/layout.png";
import MainPioneer from "../../../public/assets/MainPioneer.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import NavBar from "../../components/NavBar/NavBar";
import Link from "@mui/material/Link";
import "../Hero/Hero.css";

const PioneerHero = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: "center",
    boxShadow: "none",
    backgroundSize: "cover",
  }));

  return (
    <Box
      sx={{
        // backgroundImage: `url(${Layout})`,
        backgroundSize: "cover", // Adjust background size
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Grid item xs={12}>
          <Item>
            <h1 className="headtext__cormorant">
              <span className="span__heading" style={{ color: "#B5964D" }}>
                Joseph Saramago
              </span>
            </h1>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <img
              src={MainPioneer}
              alt="Pioneer"
              style={{ maxWidth: "50%" }} // Adjust image size
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PioneerHero;
