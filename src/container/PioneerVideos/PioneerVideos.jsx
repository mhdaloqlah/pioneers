import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import "../video/Video.css";
import { Box } from "@mui/material";
import Video from "../video/Video";
const PioneerVideos = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: { xs: "auto", md: "100vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden", // Prevents any content from overflowing
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{ textAlign: "center", my: 2, color: "#B5964D" }}
      >
        Videos
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ width: "auto", maxWidth: "100%" }}
      >
        {/* Center item */}
        <Grid item xs={16} sx={{ height: "50vh", width: "90vh" }}>
          <Video sx={{ width: "100%" }} />
        </Grid>

        {/* Bottom row */}
        <Grid item xs={6} sx={{ height: "50vh" }}>
          {" "}
          <Video />
        </Grid>
        <Grid item xs={6} sx={{ height: "50vh" }}>
          {" "}
          <Video />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PioneerVideos;
