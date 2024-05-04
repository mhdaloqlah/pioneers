import React from "react";
import Grid from "@mui/material/Grid";
import Video from "./Video";
import "./Video.css";
const VideoGrid = () => {
  return (
    <Grid container spacing={2} className="Grid">
      {/* Top row */}
     

      {/* Center item */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        className="video-grid-item-large"
        style={{ height: "70vh" }}
      >
        <Video />
      </Grid>

      {/* Bottom row */}
      <Grid item xs={4} sm={4} md={4} className="video-grid-item">
        <Video />
      </Grid>
      <Grid item xs={4} sm={4} md={4} className="video-grid-item">
        <Video />
      </Grid>
      <Grid item xs={4} sm={4} md={4} className="video-grid-item">
        <Video />
      </Grid>
    </Grid>
  );
};

export default VideoGrid;