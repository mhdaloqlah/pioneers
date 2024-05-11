import React from "react";
import { Grid, Box, Paper, styled, Typography } from "@mui/material";
import MainImage from "../../../public/assets/MainImage.png"; // Path to your main image
import SmallImage1 from "../../../public/assets/galleryimage1.png"; // Path to your small images
import SmallImage2 from "../../../public/assets/galleryimage2.png"; // Path to your small images
import SmallImage3 from "../../../public/assets/galleryimage3.png"; // Path to your small images
import SmallImage4 from "../../../public/assets/galleryimage4.png"; // Path to your small images
import SmallImage5 from "../../../public/assets/galleryimage5.png"; // Path to your small images
import SmallImage6 from "../../../public/assets/galleryimage6.png"; // Path to your small images

const PioneerGallery = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    border: "1px solid #B5964D",
    padding: 0,
    objectFit: "cover",
    textAlign: "center",
    boxSizing: "border-box",
    overflow: "hidden",
  }));

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: { xs: "auto", md: "100vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{ textAlign: "left", my: 2, color: "#B5964D" }}
      >
        Gallery
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ width: "auto", maxWidth: "100%" }}
      >
        <Grid item xs={12} md={6}>
          <Item>
            <img
              src={MainImage}
              alt="Main"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover", // Ensures the image covers the available space
                display: "block",

                margin: 0, // Remove any default margin
                padding: 0,
                boxSizing: "border-box",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4} container spacing={2}>
          {/* Array to simulate multiple images */}
          {[
            SmallImage1,
            SmallImage2,
            SmallImage3,
            SmallImage6,
            SmallImage4,
            SmallImage5,
          ].map((img, index) => (
            <Grid item xs={6} key={index}>
              <Item>
                <img
                  src={img}
                  alt={`Small ${index}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover", // Ensures the image covers the available space
                    display: "block",
                  }}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default PioneerGallery;
