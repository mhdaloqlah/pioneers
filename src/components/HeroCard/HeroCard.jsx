// Import necessary components and styles from MUI
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const HeroCard = ({
  title,
  category,
  date,
  backgroundImage,
  size,
  paragraph,
  categoryColor,
  categoryFontColor,
  backgroundParagaphColor,
  paragraphWidth
}) => {
  // Custom styles for the card and its elements
  const cardStyles = {
    position: "relative",
    width: "100%", // Make the card responsive
    height: 300, // Default height, can be adjusted or made responsive
    //   backgroundImage: (props) => `url(${props.backgroundImage})`, // Use props to change the background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end", // Align content to the bottom
    cursor: "pointer",
    
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with opacity
  };

  const categoryTagStyles = {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: categoryColor,
    color: categoryFontColor,
    padding: "4px 8px",
  };

  const dateStyles = {
    alignSelf: "flex-end", // Align date to the right'
    position: "absolute",
    marginBottom: "1rem",
    color: "white",
    top: "0",
    padding: "8px", // Add some padding around the date
    // marginBottom: theme.spacing(5), // Use MUI's spacing system
  };

  const titleStyles = {
    fontSize: "1.5rem", // Adjust the font size as needed
    fontWeight: "bold",
    right: 0, // Align to the right

    color: "white",
    whiteSpace: "normal", // Allows the text to wrap
    textAlign: "right", // Aligns the text to the right
    overflow: "hidden", // Prevent overflow
    textOverflow: "ellipsis", // Add ellipsis if text is too long
    maxWidth: "100%",
    marginTop: "1rem",
  };

  const paragraphStyles = {
    color: "rgba(255, 255, 255, 0.73)", // Set the text color to white using RGBA
    marginTop: "0.1rem", // Margin top for spacing from the title
    fontSize: "1.5rem", // Font size for the paragraph
    whiteSpace: "normal", // Allows the text to wrap
    fontWeight: "bold",
    right: 0, // Align to the right
    backgroundColor:backgroundParagaphColor,
    textAlign: "right", // Align text to the right
    textOverflow: "ellipsis", // Add ellipsis if text is too long
    width: paragraphWidth,
    
  };
  // Card component
  return (
    <Card
      sx={{
        ...cardStyles,
        backgroundImage: `url(${backgroundImage})`,
        height: size,
      }}
    >
      {" "}
      <Box sx={overlayStyles}></Box> {/* Black overlay */}
      {/* <Typography sx={categoryTagStyles}>{category}</Typography>{" "} */}
      {/* Category tag */}
      <CardContent
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column", // Stack date and title vertically
          justifyContent: "flex-end", // Align items to the bottom
          alignItems: "flex-end", // Align items to the right

          marginBottom: "2rem",
        }}
      >
        <Typography sx={dateStyles}>{date}</Typography> {/* Date */}
        <Typography variant="h6" component="p" sx={titleStyles}>
          {title}
        </Typography>
        {paragraph && <Typography sx={paragraphStyles}>{paragraph}</Typography>}
      </CardContent>
    </Card>
  );
};

export default HeroCard;
