import React from "react";
import { Typography, Divider, Box } from "@mui/material";

const SectionTitle = ({ sectionName }) => {
  return (
    <Box sx={{ width: "100%", marginBottom: 1, marginTop: 1 }}>
      <Typography variant="h6" component="h2" sx={{ textAlign: "center" ,color:"#b5964dc8",fontFamily:"Oswald, sans-serif"}}>
        {sectionName}
      </Typography>
      {/* <Divider sx={{ marginBottom: 1, bgcolor: "red" }} /> */}
      <Box
        sx={{
          width: "fit-content",
          borderBottom: "10px solid red",
          marginBottom: 1,
        }}
      />
    </Box>
  );
};

export default SectionTitle;
