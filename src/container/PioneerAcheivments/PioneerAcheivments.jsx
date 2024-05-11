import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const PioneerAcheivments = () => {
  const achievements = [
    {
      title: "Idea",
      description:
        "Lorem ipsum dolor sit amet consectetur. Viverra quis egestas sit vulputate venenatis phasellus et est arcu.",
      imageUrl: "../../../public/assets/idea.png",
    },
    {
      title: "Donation",
      description:
        "Lorem ipsum dolor sit amet consectetur. Viverra quis egestas sit vulputate venenatis phasellus et est arcu.",
      imageUrl: "../../../public/assets/donation.png",
    },
    {
      title: "Elegance",
      description:
        "Lorem ipsum dolor sit amet consectetur. Viverra quis egestas sit vulputate venenatis phasellus et est arcu.",
      imageUrl: "../../../public/assets/feather.png",
    },
  ];

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={4} sx={{ padding: 6 }}>
        {achievements.map((achievement, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: "transparent",
                boxShadow: "none", // Remove shadow
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: "auto",
                  height: 50, // Adjust height as needed
                  Width: "0%", // Limit the size of the image
                  margin: "0 auto", // Center the image horizontally
                }}
                image={achievement.imageUrl}
                alt="Achievement image"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    color: "#B5964D",
                    textAlign: "center",
                    fontFamily: "oswald",
                  }}
                >
                  {achievement.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    color: "#fff",
                    textAlign: "center",
                    fontFamily: "oswald",
                  }}
                >
                  {achievement.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PioneerAcheivments;
