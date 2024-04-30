import { styled } from "@mui/material/styles";
import { Box, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import aboutUsImage from "../../../public/assets/aboutus.png";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const AboutUsPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0c0c0c",
        height: { xs: "100vh", md: "100vh" },
      }}
    >
      <Grid>
        <Grid>
          <Navbar />
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                      color: "#B5964D",
                      fontFamily: "Oswald",
                      marginLeft: { xs: "1rem", md: "6rem" },
                    }}
                  >
                    About Us
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#B5964D",
                      fontFamily: "Oswald",
                      marginLeft: { xs: "1rem", md: "6rem" },
                    }}
                  >
                    We are pleased to showcase a wide range of artists from
                    around the world who use a variety of mediums such as
                    painting, sculpture, photography and mixed media to create
                    thought-provoking and visually stunning pieces. Each exhibit
                    is carefully curated to challenge and engage our visitors
                    with topics ranging from social commentary and political
                    activism to personal stories and abstract expressions. Our
                    gallery space is designed to enhance the viewing experience,
                    with ample natural light, spacious rooms, and clean lines
                    that draw attention to the artwork. Whether you're an avid
                    art collector or simply a connoisseur of contemporary art,
                    our gallery offers a dynamic and immersive experience that's
                    sure to inspire and captivate.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <img
                  src={aboutUsImage}
                  alt="About Us"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      {/* <Grid sx={{ marginTop: { xs: "4rem", md: "0" } }}>
        <Footer />
      </Grid> */}
    </Box>
  );
};

export default AboutUsPage;
